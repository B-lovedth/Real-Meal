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
        <Splide
          options={{
            perPage: 4,
            arrows: false,
            pargination: false,
            drag: 'free',
            gap: '5rem',
          }}>
          {veggie.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                  <Gradient />
                </Card>
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
        margin: 4rem 15rem;
        h3{
          text-align:center;
        }
    `;

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
        p{
            position:absolute;
            z-index:10;
            left:50%;
            bottom:0%;
            transform: translate(-50%,0%);
            color: white;
            width:100%;
            text-align: center;
            font-weight:600;
            font-size:1.5rem;
            height:40%;
            display:flex;
            justify-content: center;
            align-items:center;
        }
        `;

    const Gradient = styled.div`
        z-index: 3;
        position: absolute;
        width:100%;
        height : 100%;
        background:linear-gradient(rgba(0,0,0,0) , rgba(0,0,0,0.5))
    `;
export default Veggie
