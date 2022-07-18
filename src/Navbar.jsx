import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

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
    if (window.innerWidth <= 1000) {
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
            My<span id='green'>Recipe</span>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars-staggered"}>icon </i>
          </div>
          <input type='t' ></input>
          <div className={ click ? "nav-menu active" : "nav-menu"}>
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
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Recipe
                </Link>
              </li>
            </ul>
            <span className="icons nav-item">
              <i className="fas fa-facebook">F</i>
              <i className="fas fa-twitter">T</i>
              <i className="fas fa-github">G</i>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
