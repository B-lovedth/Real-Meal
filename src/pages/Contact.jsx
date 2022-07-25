import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import "./Contact.css"

const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact-container'>
        <h3>Hi!, i'm B-lovedth</h3>
        <p>I developed this web app, although I'm still very much inexperienced <br /> you can reach my socials through this links.</p>
        
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
        </div>
      </div>
    </div>
  );
};

export default Contact;
