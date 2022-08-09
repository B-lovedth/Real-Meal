import { Splide, SplideSlide } from "@splidejs/react-splide"
import { useEffect, useState } from "react"
import {Link, useParams} from 'react-router-dom'
import styled from "styled-components"
import '@splidejs/react-splide/css';
import { FaArrowRight } from "react-icons/fa";

const Similar = () => {
    const params = useParams()
    const [similar, setSimilar] = useState([])
  useEffect(() => {
    getSimilar(params.name)
  },[params.name])
                                                       
  const getSimilar = async(id) => {
       fetch(`https://api.spoonacular.com/recipes/${id}/similar?apiKey=${process.env.REACT_APP_API_KEY}&number=4`)
        .then((res) => res.json())
        .then((data) => {
          setSimilar(data)
          console.log(data)
        })
        .catch((err) => {
          console.log(err.message) 
        })   
        console.log(similar)
      }
  
  return (
    <Wrapper>
        <h4
          style={{
            margin: "1rem 0",
            textDecoration: "underline",
          }}
        >
          Similar Recipes
        </h4>
      <ul style={{ marginTop: "0", listStyleType:"disclosure-closed" }}>
        {similar.map((recipe) => {
          return (
            <li>
              <SLink to={`/recipe/${recipe.id}`}>
                <P>{recipe.title}</P>
              </SLink>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
    }

const Wrapper = styled.div`
  width:100%;
  h3{
    font-size:1rem;
  }
  `;

const SLink = styled(Link)`
  text-decoration:none;
  cursor:pointer;
`

const P = styled.p`
            position:relative;
            color: #383838;
            width:100%;
            text-align: left;
            font-weight:600;
            font-size:0.8rem;
            text-decoration:none;
            @media(max-width:760px){
              top:0;
              font-size:0.62rem;
            }
        `;
export default Similar
