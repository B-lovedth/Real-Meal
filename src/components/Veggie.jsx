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
        img{
            position:absolute;
            left:0;
            width:100%;
            height:100%;
            object-fit:cover;
        }
        p{
            position:absolute;
            left:50%;
            bottom:0%;
            width:100%;
            text-align: center;
            font-weight:600;
            height:40%;
            display:flex;
            justify-content: center;
            align-items:center;
        }
        `;

    `;
export default Veggie
