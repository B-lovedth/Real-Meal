import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link , useParams } from "react-router-dom";
import styled from "styled-components";



function Cuisine() {
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const [cuisine, setCuisine] = useState([])
    const [itemNum , setItemNum ] = useState(12)
    let params = useParams()
    useEffect(() => {
        console.log(params.type)
        getCuisine(params.type)
    }, [params.type]);
  const HandleClick = () => {
    if (itemNum < 20) {
      setItemNum(itemNum + 4)
      }
    getCuisine(params.type);
  }
    const getCuisine = async (name) => {
        const abortCont = new AbortController()
        fetch(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}&number=${itemNum}`,
          { signal: abortCont.signal }
        )
            .then((res) => {
                if(!res.ok) throw Error('Unable to fetch, Check your Network connection') 
                else return res.json()
            })
            .then((data) => {
                setCuisine(data.results)
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
    <>
      <Ch3>{ params.type} Cuisines</Ch3>
      <Grid>
        {isPending && <H3>Loading...</H3>}
        {error && <H3>{error}</H3>}
        {cuisine &&
          cuisine.map((item) => {
            return (
              <Card key={item.id}>
                <img src={item.image} alt={item.title} />
                <h4>{item.title}</h4>
              </Card>
            );
          })}
      </Grid>
      <MoreBtn onClick={HandleClick}>More</MoreBtn>
    </>
  );
}

const Grid = styled.div`
    display: grid;
    grid-template-columns:repeat(auto-fit, minmax(15rem, 1fr));
    grid-gap:1.5rem;
    margin: 2rem 3rem;
    height:100%;
`
const MoreBtn = styled.button`
padding:2rem;
right:0;
positon:absolute;

`
const H3 = styled.h3`
    text-align: center;
    height:53.5vh;
`
const Ch3 = styled.h4`
  font-family: 'Calistoga', cursive;
  text-align:center;
  margin-top:1rem;
  font-size:2rem;
`
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

export default Cuisine;
