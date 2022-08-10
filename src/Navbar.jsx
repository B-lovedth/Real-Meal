import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { GiHamburgerMenu, GiKnifeFork } from "react-icons/gi";
import { FaLinkedin, FaTwitter, FaGithub, FaTimes, FaWhatsapp , FaSearch } from "react-icons/fa";
import Search from "./components/Search";
import { motion } from "framer-motion";


const Navbar = () => {
  const [click, setClick] = useState(false);
  const [isSearch, setIsSearch] = useState(false)
  const handleClick = () => {
    setClick(!click);
  };
  const handleSearch = () => {
    setIsSearch(!isSearch)
  }

  const closeMobileMenu = () => {
    setClick(false);
  };

  return (
    <div>
      <nav className='navbar'>
        <div className='navbar-container'>
          <div className={isSearch ? 'search-icon active' : 'search-icon'} onClick={handleSearch}>
            <FaSearch />
          </div>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <GiKnifeFork />
            Real<span id='green'>Meal</span>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            {click ? <FaTimes /> : <GiHamburgerMenu />}
          </div>
          <div className={click ? "nav-menu active" : "nav-menu"}>
            <div className='nav-menu-wrapper'>
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
                    to='/cuisines'
                    className='nav-links nav-recipe'
                    onClick={closeMobileMenu}
                  >
                    Cuisine
                  </Link>
                </li>
              </ul>
              <div className='desktop'>
                <Search />
              </div>
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
                <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://wa.me/+2348109882351'
                >
                  <FaWhatsapp />
                </a>
              </span>
            </div>
          </div>
        </div>
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={isSearch ? "mobile-active" : "mobile"}
        >
          <Search />
        </motion.div>
      </nav>
    </div>
  );
};

export default Navbar;
