import { Link } from 'react-router-dom'
import styled from 'styled-components';
import {motion} from 'framer-motion'

const SCuisine = () => {
  const cuisine = [
    {
      name: "African",
      image: "https://spoonacular.com/recipeImages/716298-312x231.jpg",
      id: 1,
    },
    {
      name: "American",
      image: "https://spoonacular.com/recipeImages/642540-312x231.jpg",
      id: 2,
    },
    {
      name: "British",
      image: "https://spoonacular.com/recipeImages/82518-312x231.jpg",
      id: 3,
    },
    {
      name: "Cajun",
      image: "https://spoonacular.com/recipeImages/648524-312x231.jpg",
      id: 4,
    },
    {
      name: "Caribbean",
      image: "https://spoonacular.com/recipeImages/655687-312x231.jpg",
      id: 5,
    },
    {
      name: "Eastern European",
      image: "https://spoonacular.com/recipeImages/664031-312x231.jpg",
      id: 13,
    },
    {
      name: "European",
      image: "https://spoonacular.com/recipeImages/648257-312x231.jpg",
      id: 6,
    },
    {
      name: "French",
      image: "https://spoonacular.com/recipeImages/648641-312x231.jpg",
      id: 7,
    },
    {
      name: "German",
      image: "https://spoonacular.com/recipeImages/1095834-312x231.jpg",
      id: 8,
    },
    {
      name: "Indian",
      image: "https://spoonacular.com/recipeImages/658482-312x231.jpg",
      id: 10,
    },
    {
      name: "Irish",
      image: "https://spoonacular.com/recipeImages/640136-312x231.jpg",
      id: 11,
    },
    {
      name: "Italian",
      image: "https://spoonacular.com/recipeImages/664737-312x231.jpg",
      id: 12,
    },
    {
      name: "Jewish",
      image: "https://spoonacular.com/recipeImages/634751-312x231.jpg",
      id: 14,
    },
    {
      name: "Korean",
      image: "https://spoonacular.com/recipeImages/1096217-312x231.jpg",
      id: 15,
    },
    {
      name: "Latin American",
      image: "https://spoonacular.com/recipeImages/654432-312x231.jpg",
      id: 16,
    },
    {
      name: "Meditenarrean",
      image: "https://spoonacular.com/recipeImages/642095-312x231.jpg",
      id: 17,
    },
    {
      name: "Middle Eastern",
      image: "https://spoonacular.com/recipeImages/642121-312x231.jpg",
      id: 19,
    },
    {
      name: "Nordic",
      image: "https://spoonacular.com/recipeImages/648565-312x231.jpg",
      id: 20,
    },
    {
      name: "Southern",
      image: "https://spoonacular.com/recipeImages/1697553-312x231.jpg",
      id: 21,
    },
    {
      name: "Spanish",
      image: "https://spoonacular.com/recipeImages/1095806-312x231.jpg",
      id: 22,
    },
    {
      name: "Thai",
      image: "https://spoonacular.com/recipeImages/645474-312x231.jpg",
      id: 23,
    },
    {
      name: "Vietnamese",
      image: "https://spoonacular.com/recipeImages/664835-312x231.jpg",
      id: 24,
    },
  ];
  return (
    <Sdiv
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Title>Available Cuisines</Title>
      <Grid>
        {cuisine.map((cuisine) => {
          return (
            <StyledLink to={`/cuisine/${cuisine.name}`} key={cuisine.id}>
              <Card>
                <img src={cuisine.image} alt={cuisine.name} />
                <Gradient />
                <h5>{cuisine.name}</h5>
              </Card>
            </StyledLink>
          );
        })}
      </Grid>
    </Sdiv>
  );
}
const Sdiv = styled(motion.div)`
  height:100%;
  margin:0;
`
const Grid = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  margin: 2rem 3rem;
  text-align: center;
  align-items:center;
  @media (max-width: 960px) {
    grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
    margin:0;
  }
`;
const Card = styled.div`
  min-height: 12rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  box-shadow: -5px 8px 5px #504f4fe6;
  img {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  h5 {
    position: absolute;
    font-size: 1.5rem;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, -200%);
    color: white;
    width: 100%;
  }
  @media (max-width: 960px) {
    min-height: 8rem;
    h5 {
      font-size: 1rem;
    }
  }
`;
const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75));
`;

const Title = styled.h3`
  text-align: center;
  font-family: 'Lobster Two';
  font-size:2rem;
  font-weight: 600;
  color: #1a1a1a;
  letter-spacing:1.5px;
`;
const StyledLink = styled(Link)`
  font-weight: 600;
  color: #1f1f1f;
  padding: 1rem 3rem;
  text-decoration: none;
  border-radius: 18px;
  @media (max-width: 960px) {
    padding: 1rem 1rem;
  }
  &:hover {
    color: #e45710;
  }
  &:active {
    color: #f3f3f3;
    background: linear-gradient(to right, #333, #010101);
  }
`;
export default SCuisine
