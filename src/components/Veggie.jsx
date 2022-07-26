import { Splide, SplideSlide } from "@splidejs/react-splide"
import { useEffect, useState } from "react"
import styled from "styled-components"
import '@splidejs/react-splide/css';



const Veggie = () => {
  const [veggie, setVeggie] = useState([])
  useEffect(() => {
    getVeggie()
  },[])
                                                       
  const getVeggie = async() => {
    const check = localStorage.getItem("veggies");
    if(check){
      setVeggie(JSON.parse(check))
    }else{
       fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegan`)
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem("veggie",JSON.stringify(data.recipes))   
          setVeggie(data.recipes)
          console.log(data.recipes)
          })
        .catch((err) => {
          console.log(err.message) 
          })   
        console.log(veggie)
    }
  }
  return (
     <div>
      <Wrapper>
        <h3>Vegetarian Picks</h3>
        <SSplide
          options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: 'free',
            gap: '5rem',
            height:"17rem",
          }}>
          {veggie.map((recipe) => {
            return (
              <SSlide key={recipe.id}>
                <Card>
                  <img src={recipe.image} alt={recipe.title} />
                  <Gradient />
                </Card>
                  <P>{recipe.title}</P>
              </SSlide>
            )
          }
          )}
        </SSplide>
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
  margin: 2rem 10rem;
  overflow: hidden;
  h3 {
    text-align: center;
    font-size: 1rem;
  }
  @media (max-width: 1200px) {
    margin: 2rem 1.5rem;
  }
`;
const SSplide = styled(Splide)`
  @media (max-width: 760px) {
    height: 10rem;
    margin: 0 auto;
  }
`;
const SSlide = styled(SplideSlide)`
  @media (max-width: 420px) {
    width: 6rem;
  }
`;
const Card = styled.div`
  max-height: 14rem;
  height: 14rem;
  max-width: 100%;
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
  @media (max-width: 760px) {
    width: 7rem;
    height: 7rem;
    border-radius: 50%;
    margin-bottom: 2rem;
    img {
      border-radius: 50%;
    }
  }
  @media (max-width: 420px) {
    width: 100%;
    height: 5rem;
    border-radius: 0%;
    img {
      border-radius: 0%;
    }
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

const P = styled.p`
            position:absolute;
            z-index:1;
            left:50%;
            bottom:0%;
            color: #383838;
            transform: translate(-50%,24%);
            width:100%;
            text-align: center;
            font-weight:600;
            font-size:0.8rem;
            height:40%;
            display:flex;
            justify-content: center;
            align-items:center;
        `;
export default Veggie
