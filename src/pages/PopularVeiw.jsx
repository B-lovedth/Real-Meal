import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from '../components/Loading'
import styled from "styled-components";

const PopularVeiw = () => {
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const [popularView, setPopularView] = useState();
  const [itemNum, setItemNum] = useState(12);
  useEffect(() => {
    getPopularVeiw();
  }, [itemNum]);
  const HandleClick = () => {
    if (itemNum < 30) {
      setItemNum(itemNum + 4);
    }
  };
    const getPopularVeiw = async () => {
      const AbortCont = new AbortController()
    fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=${itemNum}`,{signal:AbortCont.signal}
    )
        .then((res) => {
            if (!res.ok)
              throw Error("Unable to fetch, Check your Network connection");
            else return res.json();
      } )
      .then((data) => {
        setPopularView(data.recipes);
        console.log(data.recipes);
        setIsPending(false)
        setError(null)
      })
      .catch((err) => {
          console.log(err.message);
          setError("Unable to Fetch, Please Check your network")
          setIsPending(false)
      });
        return (()=>AbortCont.abort())
  };
  return (
      <Full>
        {popularView && <Ch3>Popular Cuisines</Ch3>}
        <Grid
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {popularView &&
            popularView.map((item) => {
              return (
                <Link to={`/recipe/${item.id}`} className='link'>
                  <CardContainer>
                    <Card key={item.id}>
                      <img src={item.image} alt={item.title} />
                      <h4>{item.title}</h4>
                    </Card>
                  </CardContainer>
                </Link>
              );
            })}
        </Grid>
        {isPending && <Loading/>}
        {error && <H3>{error}</H3>}
        {popularView && (
          <div style={{ position: "relative",marginBottom:"2rem" }}>
            <MoreBtn onClick={HandleClick}>More</MoreBtn>
          </div>
        )}
      </Full>
  );
};
const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 1.5rem;
  margin: 2rem 3rem;
  height: 100%;
  @media (max-width: 960px) {
    grid-template-columns: repeat(auto-fit, minmax(6rem, 1fr));
    margin: 2rem 1rem;
    .link {
      text-decoration: none;
    }
  }
`;
const Full = styled(motion.div)`
  height: 100%;
`;
const MoreBtn = styled.button`
  padding: 0.5rem 1rem;
  display: flex;
  margin: 1rem auto 1rem;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  background: linear-gradient(to right, #f66117, #ef5454);
`;
const H3 = styled.h3`
  text-align: center;
  height: 53.5vh;
`;
const Ch3 = styled.h4`
  font-family: "Lobster Two";
  text-align: center;
  margin-top: 1rem;
  font-size: 2rem;
  overflow: hidden;
`;
const CardContainer = styled.div`
  overflow: hidden;
  background: #e457106e;
  border-top-right-radius: 2rem;
  border-top-left-radius: 2rem;
  box-shadow: -5px 8px 5px #504f4fe6;
  height:18rem;
    @media(max-width:960px){
        height: 10rem;
    }  
`;
const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  img:hover {
    transform: scale(1.1);
    transition: all 500ms ease;
  }

  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 0.5rem 0;
    font-size: 0.65rem;
    color: #000;
  }
`;
export default PopularVeiw;
