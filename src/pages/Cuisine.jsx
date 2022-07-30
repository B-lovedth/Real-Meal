import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link , useParams } from "react-router-dom";
import styled from "styled-components";



function Cuisine() {
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const [cuisine, setCuisine] = useState([])
    let params = useParams()
    useEffect(() => {
        console.log(params.type)
        getCuisine(params.type)
    }, [params.type]);
    
    const getCuisine = async (name) => {
        const abortCont = new AbortController()
        fetch(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}&number=12`,
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
                setError(err.message)
                setIsPending(false)
            });
        return ()=> abortCont.abort()
    }

    return (
        <Grid>
            {isPending && <H3>Loading...</H3>}
            {error && <H3>{ error }</H3>}
            {cuisine && (cuisine.map((item) => {
                return (
                    <Card key={item.id}>
                            <img src={item.image} alt={item.title} />
                            <h4>{item.title}</h4>
                    </Card>
            )
        }))}
    </Grid>
  )
}

const Grid = styled.div`
    display: grid;
    grid-template-columns:repeat(auto-fit, minmax(15rem, 1fr));
    grid-gap:1.5rem;
    margin: 2rem 3rem;
    height:100%;
`
const H3 = styled.h3`
    text-align: center;
    height:53.5vh;
`
const Card = styled.div`
        img{
            width: 100%;
            border-radius:2rem;
        }
        a{
            text-decoration: none;
        }
        h4{
            text-align:center;
            padding:1rem;
        }
`        

export default Cuisine;
