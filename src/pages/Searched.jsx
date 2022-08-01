import {Link, useParams } from "react-router-dom";
import { useEffect , useState } from "react";
import styled from "styled-components";


const Searched = () => {
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const [searchedRec, setSearchedRec] = useState([]);
    let params = useParams()
    useEffect(() => {
        getSearched(params.search)
    }, [params.search]);
    const getSearched = async(searchTerm) => {
         const abortCont = new AbortController()
        fetch(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${searchTerm}&number=12`,
          { signal: abortCont.signal }
        )
            .then((res) => {
                if(!res.ok) throw Error('Unable to fetch, Check your Network connection') 
                else return console.log(res.json())
            })
            .then((data) => {
                setSearchedRec(data.results)
                setIsPending(false)
                setError(null)
            })
            .catch((err) => {
                console.log(err.message)
                setError("Unable to fetch, Check your Network connection");
                setIsPending(false)
            });
        return ()=> abortCont.abort()
    }
    return (
      <div>
        <Grid>
          {isPending && <H3>Loading...</H3>}
          {error && <H3>{error}</H3>}
          {searchedRec &&
            searchedRec.map((item) => {
              return (
                <Card key={item.id}>
                  <img src={item.image} alt={item.title} />
                  <h4>{item.title}</h4>
                </Card>
              );
            })}
        </Grid>
      </div>
    );
     }
  
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 1.5rem;
  margin: 2rem 3rem;
  height: 100%;
`;

const H3 = styled.h3`
  font-family: "Calistoga", cursive;
  text-align: center;
  margin-top: 1rem;
  font-size: 2rem;
  height:58.5vh;
`;
const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
    box-shadow: -5px 8px 5px #504f4fe6;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;        

export default Searched
