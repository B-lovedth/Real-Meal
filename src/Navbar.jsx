// import { useState } from "react";
import { Link,NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  // const [click, setClick] = useState(false);
  const [isMobile , setIsMobile] = useState(false)
  // const handleClick = () => {
  //   setClick(!click);
  // };

  // const closeMobileMenu = () => {
  //   setClick(false);
  // };

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
      <nav className="nav-container">
        <div>
          <Link to='/'className="nav-logo">
            My<span id="green">Recipe</span>
          </Link>
        </div>
        <div className="nav-mobile">
          active
        </div>
        <ul className="nav-items">
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/services'>Contact</NavLink></li>
          <li><NavLink to='/cuisine'>Recipes</NavLink></li>
        </ul>
      </nav>
    </div>
      );
};

export default Navbar;
