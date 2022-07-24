import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link , useParams } from "react-router-dom";
import styled from "styled-components";



function Cuisine() {
    const [cuisine, setCuisine] = useState([])
    let params = useParams()
    useEffect(() => {
        console.log(params.type)
        getCuisine(params.type)
    }, [params.type]);
    
    const getCuisine = (name) => {
        fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`)
            .then((res) => {
                res.json()
                // console.log(res.json())
            })
            .then((data) => {
                setCuisine(data.results)
            })
            .catch((err)=>console.log(err.message))
    }

    return (
    <Grid>
        {cuisine.map((item) => {
            return (
                <Card>
                    <Link>
                        <img src={item.image} alt={item.title} />
                        <h4>{item.title}</h4>
                    </Link>
              </Card>
          )
      })}
    </Grid>
  )
}

const Grid = styled.div`
    display: grid;
    grid-template-columns:repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap:3rem;
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
