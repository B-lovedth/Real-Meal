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
       fetch(`https://api.spoonacular.com/recipes/${id}/similar?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
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
  
  return(
    <Wrapper>
      <Heading>
        <h3 id='similar'>Similar Recipes</h3>
        {/* <Link to='/pView'>
          <FaArrowRight style={{ color: "#333" }} />
        </Link> */}
      </Heading>
      <SSplide
        options={{
          perPage: 3,
          arrows: false,
          pagination: false,
          autoplay: true,
          pauseOnHover: false,
          resetProgress: false,
          drag: "free",
          gap: "3rem",
        }}
      >
        {similar.map((recipe) => {
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
    font-size:1rem;
  }
  @media(max-width:1200px) {
    margin:1rem 1.5rem;
  }
  `;
const Heading = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;  
`
const SSplide = styled(Splide)`
  @media (max-width: 760px) {
    margin: 0 auto;
  }
  @media screen and (max-width: 420px) {
    gap:1rem;
  }
`;
const SSlide = styled(SplideSlide)`
  @media screen and (max-width: 420px) {
    ul{height: 100%;}
  }
`;
const SLink = styled(Link)`
  text-decoration:none;
  cursor:pointer;
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
    transform: scale(1.05);
    transition: all 500ms ease;
  }
  @media (max-width: 760px) {
    width: 100%;
    height: 7rem;
    border-radius: 8px;
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
              font-size:0.62rem;
            }
        `;
export default Similar
