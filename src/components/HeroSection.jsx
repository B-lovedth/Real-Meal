import React from 'react'
import "./HeroSection.css"
import Dish from './pasta.png'
import Mobile from './mobile.png'
import styled from 'styled-components'
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className='body'>
      <div className='container'>
        <div className='row'>
          <div className='column-one'>
            <div className='mobile-header'>
              <img src={Mobile} alt='pasta' />
            </div>
            <div className='main-header'>
              Let's get cooking
              <br />
              with delicious recipies
            </div>
            <div className='sub-header'>
              <p>Wanna cook, but not sure how to go about it?</p>
              <p>Don't worry, we got you.</p>
            </div>
            <div className='btn-wrapper'>
              <Link to='/cuisines'>
                <ButtonBold className='btn btn-one'>Get started</ButtonBold>
              </Link>
              <HashLink smooth to='/#popular'>
                <ButtonOutline className='btn btn-two'>
                  Explore Menu
                </ButtonOutline>
              </HashLink>
            </div>
          </div>
          <div className='column-two'>
            <Img src={Dish} alt='dish' />
          </div>
        </div>
      </div>
    </div>
  );
}

const ButtonBold = styled.button`
  background: linear-gradient(to right, #f66117, #ef5454);
  border: 2px solid #e45710;
  color: white;
  border-radius: 5px;
  padding: 1rem 2rem;
  margin-right: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
`;
const ButtonOutline = styled.button`
  background-color: white;
  border:1px solid #e45710;
  color: #e45710;
  border-radius:5px;
  padding:1rem 2rem;
  font-size:1rem;
  font-weight:600;
  cursor: pointer;
  &:hover{
    background-color: #e45710;
    color: white;
    border:1px solid #e45710;
    transition:all 350ms ease-in;
  }
  
`
const Img = styled.img`
  max-height:100%;
  width: 100%;
  height:25rem;
`
export default LandingPage
