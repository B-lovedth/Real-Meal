import React from 'react'
import styled from 'styled-components'

const Loading = () => {
  return (
    <LoadingBar className='loading'>
        <Span></Span>
        loading
    </LoadingBar>
  )
}
const LoadingBar=styled.div`
    position: relative;
    display:flex;
    height:50vh;
    width:100%;
    align-items: center;
    justify-content:center;
    font-size: 1rem;
`
const Span=styled.span`
    @keyframes rotate {
        to{
            transform: rotate(360deg);
        }
    }
    position:absolute;
    display:flex;
    align-items: center;
    justify-content: center;
    height:7rem;
    width:7rem;
    border:5px solid #333;
    border-radius:50%;
    animation:rotate 2s infinite  ease;

    &::before{
        content:'';
        position:absolute;
        left:-10px;
        height:1rem;
        width:1rem;
        background-color: #333;
        border-radius:50%;
    }
`
export default Loading

