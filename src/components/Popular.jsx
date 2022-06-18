import { Splide, SplideSlide } from "@splidejs/react-splide"
import { useEffect, useState } from "react"
import styled from "styled-components"
import '@splidejs/react-splide/css';

  
const Popular = () => {
  const [popular,setPopular] = useState([])
  useEffect(() => {
    getPopular()
  },[])
  
   const getPopular = () => {
    fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
      .then((res) => res.json())
      .then((data) => {
        setPopular(data.recipes)
        console.log(data)
      })
      .catch((err) => {
        console.log(err.message)
        return <div>Unable to fetch</div>
      })
    }
  return ( 
    <div>
          <Wrapper>
        <h3>Popular Picks</h3>
        <Splide></Splide>
            {popular.map((recipe) => {
              return (
                <Card>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title}/>
                </Card>
              )
            }
            )}
          </Wrapper> 
    </div>
  )
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
  padding: 2rem;
`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow : hidden;

  img{
    border-radius:2rem;
  }
`
export default Popular
