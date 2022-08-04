import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { motion } from 'framer-motion'
import {FaClock} from 'react-icons/fa'

const Recipe = () => {
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const [details, setDetails] = useState();
  const [activeTab , setActiveTab] = useState('summary')
  let params = useParams();
  useEffect(() => {
    fetchDetails();
  }, [params.name]);
  const fetchDetails = async () => {
    const abortCont = new AbortController();
    fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`,
      { signal: abortCont.signal }
    )
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);
        setIsPending(false);
        setError(null);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
        setIsPending(false)
        setError(err.message);
      });
    return () => abortCont.abort();
  };
  return (
    <Container>
      {isPending && <H3>Loading..</H3>}
      {error && <H3>{error}</H3>}
      {details && (
        <DetailWrapper
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className='left'>
            <h2>{details.title}</h2>
            <img src={details.image} alt={details.title} />
            <div>
              <p>
                <FaClock />:{details.cookingMinutes} Minutes
              </p>
              <p></p>
            </div>
          </div>
          <Info>
            <ButtonWrapper>
              <Button
                onClick={() => setActiveTab("summary")}
                className={activeTab === "summary" ? "active" : ""}
              >
                Summary
              </Button>
              <Button
                onClick={() => setActiveTab("instructions")}
                className={activeTab === "instructions" ? "active" : ""}
              >
                Instructions
              </Button>
              <Button
                onClick={() => setActiveTab("ingredients")}
                className={activeTab === "ingredients" ? "active" : ""}
              >
                Ingredients
              </Button>
            </ButtonWrapper>
            {activeTab === "summary" && (
              <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
                <div>{console.log(details.analyzedInstructions[0].steps)}</div>
              </motion.div>
            )}
            {activeTab === "instructions" && (
              <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* <h3
                  dangerouslySetInnerHTML={{ __html: details.instructions }}
                ></h3> */}
                <ul>
                  {details.analyzedInstructions[0].steps.map((step) => {
                    return <li key={step.id}>{step.step}</li>;
                  })}
                </ul>
              </motion.div>
            )}
            {activeTab === "ingredients" && (
              <motion.ul
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {details.extendedIngredients.map((ingredients) => {
                  return <li key={ingredients.id}>{ingredients.original}</li>;
                })}
              </motion.ul>
            )}
          </Info>
        </DetailWrapper>
      )}
    </Container>
  );
};
const Container = styled.div`
  width:100%;
`
const H3 = styled.h3`
  text-align: center;
`;
const ButtonWrapper = styled.div`
  display:flex;
  flex-direction:row;
  justify-content: space-between;
  text-align:center;
  align-items:center;
`
const DetailWrapper = styled(motion.div)`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5rem;
  margin-bottom: 2.5rem;
  display: flex;

  img {
    width: 25rem;
    border-radius: 18px;
    box-shadow: -5px 8px 5px #504f4fe6;
  }

  .active {
    background: linear-gradient(to right, #f66117, #ef5454);
    color: white;
  }
  h2 {
    text-align: center;
    margin-bottom: 1rem;
    font-family: "Lobster Two";
  }
  h3 {
    font-size: 1rem;
    line-height: 1.7rem;
  }
  li {
    font-size: 1rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
  @media (max-width: 1200px) {
    flex-direction: column;
    margin: 0 auto;
    width: 90%;
    .left {
      margin-bottom: 1rem;
    }
    img {
      width: 100%;
    }
    h3{
      font-size:0.7rem;
      text-align:justify;
      line-height:1rem;
    }
    li{
      font-size:0.7rem;
      line-height:1rem;
    }
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  cursor: pointer;
  background: white;
  border: 2px solid transparent;
  border-radius: 18px;
  box-shadow: -5px 8px 5px #504f4fe6;
  margin-right: 1rem;
  font-weight: 600;
  @media(max-width:960px){
    padding:1rem 0.4rem;
  }
`;
const Info = styled.div`
  margin-left: 5rem;
  @media(max-width:1200px){
    margin:0 auto;
    width:100%;
  }`;
export default Recipe;
