import { Splide, SplideSlide } from "@splidejs/react-splide"
import { useEffect, useState } from "react"
import {Link} from 'react-router-dom'
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
    <Wrapper>
      <h3 id='popular'>Popular Picks</h3>
      <SSplide
        options={{
          perPage: 3,
          arrows: false,
          pagination: false,
          autoplay: true,
          pauseOnHover: false,
          resetProgress: false,
          drag: "free",
          gap: "4rem",
        }}
      >
        {popular.map((recipe) => {
          return (
            <SSlide key={recipe.id}>
              <SLink to={`/recipe/${recipe.id}`}>
                <Card>
                  <img src={recipe.image} alt={recipe.title} />
                  <Gradient />
                </Card>
                <P>{recipe.title}</P>
              </SLink>
            </SSlide>
          );
        })}
      </SSplide>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 2rem 10rem;
  overflow: hidden;
  h3{
    text-align:center;
    font-size:1rem;
  }
  @media(max-width:1200px) {
    margin:1rem 1.5rem;
  }
  `;
const SSplide = styled(Splide)`
  @media (max-width: 760px) {
    margin: 0 auto;
  }
  @media screen and (max-width: 420px) {
    gap:2rem;
  }
`;
const SSlide = styled(SplideSlide)`
  @media screen and (max-width: 420px) {
    ul{height: 100%;}
  }
`;
const SLink = styled(Link)`
  text-decoration:none;
`
const Card = styled.div`
  max-height: 14rem;
  height: 14rem;
  max-width: 100%;
  box-shadow: -5px 8px 5px #504f4fe6;
  border-radius: 18px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  img {
    border-radius: 18px;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover {
    transform: scale(1.1);
    transition: all 500ms ease;
  }
  @media (max-width: 760px) {
    width: 100%;
    height: 7rem;
    border-radius: 8px;
    margin-bottom: 2rem;
    img {
      border-radius: 8px;
    }
  }
  @media (max-width: 420px) {
    width: 100%;
    height: 5rem;
    border-radius: 8px;
    img {
      border-radius: 8px;
    }
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width:100%;
  height : 100%;
  background:linear-gradient(rgba(0,0,0,0) , rgba(0,0,0,0.5))
    `;

const P = styled.p`
            position:relative;
            z-index:1;
            bottom:0%;
            color: #383838;
            margin-top:1rem;
            width:100%;
            text-align: center;
            font-weight:600;
            font-size:0.8rem;
            display:flex;
            text-decoration:none;
            justify-content: center;
            align-items:center;
            @media(max-width:760px){
              top:0;
            }
        `;
export default Popular
