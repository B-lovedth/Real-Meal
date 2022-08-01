import styled from 'styled-components'
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'
const Search = () => {
  const [input, setInput] = useState('')
  const [error , setError] = useState('')
  const navigate = useNavigate()
  const submitHandler = (e) => {
    if (input === "") {
      e.preventDefault();
      setError("No input");
    } else if (!isNaN(input)) {
      e.preventDefault();
      setError("invalid input");
    } else {
      e.preventDefault();
      setError('')
      navigate(`/searched/${input}`);
    } 
  }
  return (
    <div>
      <StyleForm onSubmit={submitHandler}>
        <Button type='submit'>
          <FaSearch />
        </Button>
        <input
          type='text'
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder='search'
        />
      </StyleForm>
      <Error>{error}</Error>
    </div>
  );
}

const Error = styled.h6`
  text-align: center;
  color:red;
  top:0;
  margin-top:5px;
  font-weight:lighter;
`

const StyleForm = styled.form`
  position: relative;
  width: 100%;
  input {
    border: none;
    background: #f3f3f3;
    font-size: 0.75rem;
    font-weight:600;
    color: #1a1a1a;
    letter-spacing:0.5px;
    padding: 0.5rem 2.5rem;
    border: none;
    border-radius: 1rem;
    outline: none;
  }
  @media (max-width: 1200px) {
    margin: 0 auto;
    width: 100%;
    input {
      width: 100%;
    }
  }
`;
const Button = styled.button`
  position: absolute;
  top: 50%;
  left: 0%;
  transform: translate(100%, -50%);
  border: none;
  cursor:pointer;
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: #333;
  }
`;
export default Search
