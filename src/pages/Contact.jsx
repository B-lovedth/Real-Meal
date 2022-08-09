import { FaLinkedin, FaTwitter, FaGithub , FaWhatsapp } from "react-icons/fa";
import "./Contact.css"
import {motion} from 'framer-motion'

const Contact = () => {
  return (
    <motion.div
      className='contact'
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className='contact-container'>
        <h3>Hi! , i'm B-lovedth</h3>
        <p>
          I developed this web app using Spoonacular Food and Recipe API. <br />
          <br /> you can reach my socials through these links.
        </p>

        <div className='contact-wrapper'>
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
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
