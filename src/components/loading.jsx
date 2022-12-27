import React from 'react'
import styled from 'styled-components'
import { GiFastNoodles, GiNoodles } from 'react-icons/gi'
const Loading = () => {
  return (
    <LoadingBar className='loading'>
        <Span></Span>
        <div className='in-loading'><GiNoodles/>
        loading</div>
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
    color:#333;
    font-size:1rem !important;
    font-weight:600;
    .in-loading{
        display: flex;
        flex-direction:column;
        align-items: center;
        justify-content:center;
    }
    .in-loading svg{
        font-size:3rem !important;
    }
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

