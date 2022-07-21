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
    <div>
      Cuisine
    </div>
  )
}

const Grid = styled.div`
    display: grid;
    grid-template-columns:repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap:3rem;
`

const Card = styled.div`
        min-height: 25rem;
        border-radius: 3rem;
        overflow : hidden;
        position:relative;
        img{
            border-radius:3rem;
            position:absolute;
            left:0;
            width:100%;
            height:100%;
            object-fit:cover;
        }
`        

export default Cuisine;
