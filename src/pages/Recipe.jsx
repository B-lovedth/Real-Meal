import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import {motion} from 'framer-motion'

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
      {isPending && <h3>Loading..</h3>}
      {error && <h3>{error}</h3>}
      {details && (
        <DetailWrapper
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="left">
            <h2>{details.title}</h2>
            <img src={details.image} alt={details.title} />
          </div>
          <Info>
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
            {activeTab === "summary" && (
              <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
              </motion.div>
            )}
            {activeTab === "instructions" && (
              <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3
                  dangerouslySetInnerHTML={{ __html: details.instructions }}
                ></h3>
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
const DetailWrapper = styled(motion.div)`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5rem;
  margin-bottom: 2.5rem;
  display: flex;
  .left {
    width: 40%;
    img {
      width: 25rem;
      border-radius: 18px;
      box-shadow: -5px 8px 5px #504f4fe6;
    }
  }
  .active {
    background: linear-gradient(to right, #f66117, #ef5454);
    color: white;
  }
  h2 {
    text-align:center;
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
`;
const Info = styled.div`
  margin-left: 5rem;
`;
export default Recipe;
