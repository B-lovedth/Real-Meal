import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import {GiHamburgerMenu , GiCrossMark ,GiKnifeFork} from 'react-icons/gi'
import { FaLinkedin, FaTwitter, FaGithub,FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [isMobile , setisMobile] = useState(false)
  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  const confirmMobile = () =>{
    if (window.innerWidth <= 1200) {
      setisMobile(true)
    }
    else {
      setisMobile(false)
    }
  }
  window.addEventListener('resize',confirmMobile)

  useEffect(() => {
    confirmMobile()
  },[])
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            My<span id='green'>Recipe</span><GiKnifeFork/>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes/> : <GiHamburgerMenu/>}
          </div>
          <div className={ click ? "nav-menu active" : "nav-menu"}>
            <input type='text' class ></input>
            <ul className='nav-list'>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/cuisine"
                  className="nav-links nav-recipe"
                  onClick={closeMobileMenu}
                >
                  Recipe
                </Link>
              </li>
            </ul>
            <span className="nav-item icons">
              <a href=""><FaLinkedin/></a>
              <a href="twitter.com/B-lovedth"><FaTwitter/></a>
              <a href="github.com/B-lovedth"><FaGithub/></a>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
