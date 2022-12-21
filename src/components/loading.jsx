import React from 'react'
import styled from 'styled-components'

const Loading = () => {
  return (
    <LoadingBar className='loading'>
        <Span></Span>
    </LoadingBar>
  )
}
const LoadingBar=styled.div`
    position: relative;
    display:flex;
    height:100vh;
    width:100%;
    align-items: center;
    justify-content:center;

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

    &::before{
        content:'';
        position:absolute;
        height:1rem;
        width:1rem;
        border-radius:50%;
    }
`
export default Loading

