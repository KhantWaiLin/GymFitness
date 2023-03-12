import React from 'react'
import './Footer.css';
import Logo from '../../assets/logo.png';
import Github from '../../assets/github.png';
import Linkedin from '../../assets/linkedin.png';
import Instagram from '../../assets/instagram.png';

const Footer = () => {
  return (
    <div className="Footer-div">
        <hr />
        <div className="footer">
            <div className="social-links">
              <img src={Github} alt="" />
              <img src={Linkedin} alt="" />
              <img src={Instagram} alt="" />
            </div>
            <div className="footer-logo">
              <img src={Logo} alt="" />
            </div>
        </div>
        <div className="blur footer-blur-1"></div>
        <div className="blur footer-blur-2"></div>  
     
    </div>
  )
}

export default Footer