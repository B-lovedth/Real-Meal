import { Splide, SplideSlide } from "@splidejs/react-splide"
import { useEffect, useState } from "react"
import styled from "styled-components"
import '@splidejs/react-splide/css';


const Popular = () => {
  const [popular, setPopular] = useState([])
  useEffect(() => {
    getPopular()
  },[])
                                                       
  const getPopular = async() => {
    const check = localStorage.getItem("popular");
    if(check){
      setPopular(JSON.parse(check))
    }else{
       fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem("popular",JSON.stringify(data.recipes))   
          setPopular(data.recipes)
          console.log(data.recipes)
        })
        .catch((err) => {
          console.log(err.message) 
        })   
        console.log(popular)
      }
  }
  return (
    <div>
      <Wrapper>
        <h3>Popular Picks</h3>
        <Splide
          options={{
            perPage: 3,
            arrows: false,
            pagination: false,
            drag: 'free',
            gap: '5rem',
            height:"17rem",
          }}>
          {popular.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <img src={recipe.image} alt={recipe.title} />
                  <Gradient />
                </Card>
                <P>{recipe.title}</P>
              </SplideSlide>
            )
          }
          )}
        </Splide>
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
  margin: 2rem 10rem;
  overflow: hidden;
  h3{
    text-align:center;
    font-size:1rem;
  }
  `;
const Card = styled.div`
  min-height: 14rem;
  border-radius: 50%;
  overflow : hidden;
  position:relative;
        img{
            border-radius:2rem;
            position:absolute;
            left:0;
            width:100%;
            height:100%;
            object-fit:cover;
        }
            position:absolute;
            z-index:1;
            left:50%;
            bottom:0%;
            color: #383838;
            transform: translate(-50%,24%);
            width:100%;
            text-align: center;
            font-weight:600;
            font-size:1rem;
            height:40%;
            display:flex;
            justify-content: center;
            align-items:center;
        `;
export default Popular
