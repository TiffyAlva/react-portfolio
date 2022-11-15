//Footer
import "./FooterStyles.css";

import React from 'react'

//icons
import { FaBook, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <div className= "footer">
        <div className="footer-container">
          <div className="left">
            <div className="location">
              <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
            <p>Jackson Heights,</p>
            <p>New York.</p>
            </div>
            </div>
            <div className="phone">
            <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
             347-556-4014</h4>

             </div>
            <div className="email">
            <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
             TiffanyAlvarez54@gmail.com</h4>

            </div>
            </div>
          <div className="right">
            <h4><p>Add your Web Url</p></h4>
              <p>Copyright ©2022 Tiffany Alvarez</p>
            <div className="social">
            <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />
            <FaGithub size={30} style={{ color: "#fff", marginRight: "1rem" }} />
            </div>
          </div>
        </div>
      </div>
      
  )
}

export default Footer;
