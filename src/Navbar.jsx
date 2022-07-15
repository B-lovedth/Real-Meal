import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  // const showButton = () => {
  //   if (window.innerWidth <= 960) {
  //   } else {
  //   }
  // };

  // window.addEventListener("resize", showButton);

  // useEffect(() => {
  //   showButton();
  // }, []);

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <i class="fa-brands fa-sitrox fa-bounce"></i>OMA
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars-staggered"}> </i>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                {click ? "Home" : <i class="fa-solid fa-house"></i>}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                {click ? "Services" : <i class="fa-solid fa-computer"></i>}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                {click ? "Products" : <i class="fa-solid fa-bars-progress"></i>}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign-Up
              </Link>
            </li>
          </ul>
          {/* {button && <Button buttonStyle="btn--outline" link='/sign-up'>SIGN UP</Button>} */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
