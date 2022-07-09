import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link , useParams } from "react-router-dom";
import styled from "styled-components";



function Cuisine() {
    const [cuisine, setCuisine] = useState([])
    useEffect(() => {
        getCuisine()
    },[])
    
    const getCuisine = (name) => {
        fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine={name}`)
            .then((res) => res.json())
            .then((data) => {
                setCuisine(data.recipe)
                console.log(data)
            })
            .catch((err)=>console.log(err.message))
    }

    return (
    <div>
      Cuisine
    </div>
  )
}

export default Cuisine;
