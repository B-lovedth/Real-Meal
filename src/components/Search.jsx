import styled from 'styled-components'
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
const Search = () => {
  const [input , setInput] = useState('')
  return (
    <StyleForm>
      <FaSearch/>
      <input type="text"  placeholder="search"/>
    </StyleForm>
  )
}

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
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
  }
  @media (max-width: 1200px) {
    margin: 0 auto;
    width: 100%;
    input {
      width: 100%;
    }
  }
`;
export default Search
