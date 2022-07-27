import styled from 'styled-components'
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
const Search = () => {
  return (
    <StyleForm>
      <input type="text" placeholder="search"/>
    </StyleForm>
  )
}

const StyleForm = styled.form`
    /* margin: 0 10rem; */
    position: relative;
    width: 100%;
    input{
        border:none;
        /* background: linear-gradient(35deg, #494949 , #313131); */
        background: #fff;
        font-size:0.75rem;
        color:white;
        padding:0.5rem 2.5rem;
        border:none;
        border-radius:1rem;
        outline:none;
    }
    svg{
        position: absolute;
        top:50%;
        left:0%;
        transform:translate(100%, -50%);
    }
`
export default Search
