// import { useState } from "react";
import { Link,NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  // const [click, setClick] = useState(false);
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
        <div className="nav-logo">
          <Link to='/'>
            My<span id="green">Recipe</span>
          </Link>
        </div>
        <div className="nav-mobile">
          active
        </div>
        <ul className="nav-items">
          <NavLink to='/'><li>Home</li></NavLink>
          <NavLink to='/services'><li>Contact</li></NavLink>
          <NavLink to='/cuisine'><li>Recipes</li></NavLink>
        </ul>
      </nav>
    </div>
      );
};

export default Navbar;
