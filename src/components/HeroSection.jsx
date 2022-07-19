import React from 'react'
import "./HeroSection.css"
import Dish from './pasta.png'
import Mobile from './mobile.png'
import styled from 'styled-components'

const LandingPage = () => {
  return (
    <div className="body">
      <div className='container'>
        <div className="row">
          <div className="column-one">
            <div className="main-header">
              Let's get cooking<br/>with delicious recipies
            </div>
            <div className="sub-header">
              <p>Wanna cook, but not sure how to go about it?</p>
              <p>Don't worry, we got you.</p>
            </div>
            <div className="mobile-header">
              <img src={Mobile} alt='pasta'/>
            </div>
            <div className="btn-wrapper">
              <ButtonBold className="btn btn-one">Get started</ButtonBold>
              <ButtonOutline className="btn btn-two">Explore Menu</ButtonOutline>
            </div>
          </div>
          <div className="column-two">
            <Img src={Dish} alt="dish" />
          </div>
        </div>
      </div>
    </div>
  )
}

const ButtonBold = styled.button`
  background-color: #00df34;
  border:1px solid #00df34;
  color: white;
  border-radius: 5px;
  padding: 2rem 3rem;
  margin-right: 10px;
  font-size:2rem;
  font-weight: 600;
  cursor: pointer;
`
const ButtonOutline = styled.button`
  background-color: white;
  border:1px solid #00df34;
  color: #00df34;
  border-radius:5px;
  padding:2rem 3rem;
  font-size:2rem;
  font-weight:600;
  cursor: pointer;
  &:hover{
    background-color: #008000c8;
    color: white;
    border:1px solid #008000c8;
    transition:all 350ms ease-in;
  }
  
`
const Img = styled.img`
  max-height:100%;
  width: 100%;
  height:50rem;
`
export default LandingPage
