// import { useState } from "react";
import { Link } from "react-router-dom";
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
      <nav className="navbar">
        <Link to='/'>
          My Recipe
        </Link>
        <div className="nav-mobile">
          active
        </div>
        <ul className="nav-items">
          <Link to='/'><li>home</li></Link>
          <Link to='/services'><li>services</li></Link>
          <Link to='/cuisine'><li>Recipes</li></Link>
        </ul>
      </nav>
    </div>
      );
};

export default Navbar;
