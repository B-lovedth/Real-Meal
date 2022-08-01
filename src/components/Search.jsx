import styled from 'styled-components'
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'
const Search = () => {
  const [input, setInput] = useState('')
  const navigate = useNavigate()
  const submitHandler = (e) => {
    e.preventDefault()
    navigate(`/searched/${input}`)
  }
  return (
    <StyleForm onSubmit={submitHandler}>
      <FaSearch/>
      <input type="text" onChange={(e) => setInput(e.target.value)} value={input} placeholder="search" />
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
