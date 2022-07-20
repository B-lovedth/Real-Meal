import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import {GiHamburgerMenu ,GiKnifeFork} from 'react-icons/gi'
import { FaLinkedin, FaTwitter, FaGithub, FaTimes } from 'react-icons/fa'
import {HashLink as Hlink} from 'react-router-hash-link'

const Navbar = () => {
  const [click, setClick] = useState(false);
  // const [isMobile , setisMobile] = useState(false)
  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  // const confirmMobile = () =>{
  //   if (window.innerWidth <= 1200) {
  //     setisMobile(true)
  //   }
  //   else {
  //     setisMobile(false)
  //   }
  // }
  // window.addEventListener('resize',confirmMobile)

  // useEffect(() => {
  //   confirmMobile()
  // },[])
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
                <Hlink
                  scroll
                  to="/#popular"
                  className="nav-links nav-recipe"
                  onClick={closeMobileMenu}
                >
                  Recipe
                </Hlink>
              </li>
            </ul>
            <span className="nav-item icons">
              <Link target="blank" to={{pathname:"https://www.linkedin.com/in/great-solomon-656397237/"}}><FaLinkedin/></Link>
              <Link target="blank" to={{pathname:"twitter.com/B_lovedth"}}><FaTwitter/></Link>
              <Link target="blank" to={{pathname:"github.com/B-lovedth"}}><FaGithub/></Link>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
