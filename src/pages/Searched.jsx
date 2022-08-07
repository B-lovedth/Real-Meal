import {Link, useParams } from "react-router-dom";
import { useEffect , useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";



const Searched = () => {
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const [searchedRec, setSearchedRec] = useState([]);
    const [found, setFound] = useState(null)  
    const [itemNum, setItemNum] = useState(12);
  
    let params = useParams()
    useEffect(() => {
        getSearched(params.search)
    }, [params.search]);
    const HandleClick = () => {
      if (itemNum < 30) {
        setItemNum(itemNum + 4);
      }
    };

    const getSearched = async(searchTerm) => {
         const abortCont = new AbortController()
        fetch(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${searchTerm}&number=${itemNUm}`,
          { signal: abortCont.signal }
        )
            .then((res) => {
                if(!res.ok) throw Error('Unable to fetch, Check your Network connection') 
                else return (res.json())
            })
          .then((data) => {
            if (data.results === []) setFound(false)
            else {
              setSearchedRec(data.results)
              setIsPending(false)
              setError(null)
              setFound(null)
            }
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
        <h5 style={{ textAlign: "center", marginTop: "1rem" }}>
          You searched for '{params.search}'
        </h5>
        <Grid
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {isPending && <H3>Loading...</H3>}
          {error && <H3>{error}</H3>}
          {found && <H3>Not Available..T_T</H3>}
          {searchedRec &&
            searchedRec.map((item) => {
              return (
                <Link to={`/recipe/${item.id}`} className='link'>
                  <Card key={item.id}>
                    <img src={item.image} alt={item.title} />
                    <h4>{item.title}</h4>
                  </Card>
                </Link>
              );
            })}
          {searchedRec && (
            <div style={{ position: "relative" }}>
              <MoreBtn onClick={HandleClick}>More</MoreBtn>
            </div>
          )}
        </Grid>
      </div>
    );
     }
  
const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 1.5rem;
  margin: 2rem 3rem;
  height: 100%;
  .link{
    text-decoration:none;
  }
  @media (max-width: 960px) {
    grid-template-columns: repeat(auto-fit, minmax(6rem, 1fr));
    margin: 2rem 1rem;
  }
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
  }img:hover{
    transform: scale(1.1);
    transition:all 500ms ease;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    text-decoration:none;
    padding: 1rem;
  }
`;        

export default Searched
