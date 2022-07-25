/** @format */

import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { GiHamburgerMenu, GiKnifeFork } from "react-icons/gi";
import { FaLinkedin, FaTwitter, FaGithub, FaTimes } from "react-icons/fa";
import { HashLink as Hlink } from "react-router-hash-link";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  return (
    <div>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <GiKnifeFork />
            Real<span id='green'>Meal</span>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            {click ? <FaTimes /> : <GiHamburgerMenu />}
          </div>
          <div className={click ? "nav-menu active" : "nav-menu"}>
            <div className='nav-menu-wrapper'>
              <input
                type='text'
                className="nav-input-mobile"
              />
              <ul className='nav-list'>
                <li className='nav-item'>
                  <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    Home
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    to='/contact'
                    className='nav-links'
                    onClick={closeMobileMenu}
                  >
                    Contact
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    scroll
                    to='/cuisine'
                    className='nav-links nav-recipe'
                    onClick={closeMobileMenu}
                  >
                    Recipe
                  </Hlink>
                </li>
              </ul>
              <span className='nav-item-icons'>
                <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://www.linkedin.com/in/great-solomon-656397237/'
                >
                  <FaLinkedin />
                </a>
                <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://twitter.com/B_lovedth'
                >
                  <FaTwitter />
                </a>
                <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://github.com/B-lovedth'
                >
                  <FaGithub />
                </a>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
