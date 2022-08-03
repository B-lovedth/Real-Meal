import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Recipe = () => {
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const [details, setDetails] = useState({});
  let params = useParams();
  useEffect(() => {
    fetchDetails();
  }, [params.name]);
  const fetchDetails = async () => {
    const abortCont = new AbortController()
    fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`,{signal: abortCont.signal}
    )
      .then((res) => res.json())
        .then((data) => {
            setDetails(data)
            setIsPending(false)
            setError(null)
            console.log(data)
        })
        .catch((err) => {
            console.log(err)
            setError(err.message)
        });
      return (()=> abortCont.abort())
  };
    return <DetailWrapper>{details.title}</DetailWrapper>;
};

const DetailWrapper = styled.div`
  margin-top: 5rem;
  margin-bottom: 2.5rem;
  display: flex;
  .active {
    background: linear-gradient(to right, #f66117, #ef5454);
    color:white;
  }
  h2 {
    margin-bottom: 1rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
`;

const Button = styled.button`
  padding:1rem 2rem;
  color: #313131;
  background:white;
  border:2px solid black;
  margin-right: 1rem;
  font-weight: 600;
`
const info = styled.div`
    margin-left: 5rem;
`
export default Recipe;
