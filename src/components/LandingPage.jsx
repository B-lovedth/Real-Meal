import React from 'react'
import "./LandingPage.css"
import Dish from './pasta.png'
import styled from 'styled-components'

const LandingPage = () => {
  return (
    <div className="body">
      <div className='container'>
        <div className="row">
          <div className="column-one">
            <div className="main-header">
              Let's get cooking with delicious recipies
            </div>
            <div className="sub-header">
              <p>Wanna cook, but not sure how to go about it?</p>
              <p>Don't worry, we got you.</p>
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
  background-color: green;
  border:1px solid green;
  color: white;
  border-radius: 5px;
  padding: 2rem 3rem;
  margin-right: 10px;
  font-size:2rem;
`
const ButtonOutline = styled.button`
  background-color: white;
  border:1px solid green;
  color: green;
  border-radius:5px;
  padding:2rem 3rem;
  font-size:2rem;
`
const Img = styled.img`
  max-height:100%;
  width: 100%;
  height:30rem;
`
export default LandingPage
