//About Content
import "./AboutContentStyles.css";

import React from 'react';
import { Link } from "react-router-dom";
import ME1 from "../assets/ME1.jpg" 


const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
      <img src={ME1}
       className="img" alt="true"/>
      <h1>Who Am I?</h1>
      <p>I'm a Full Stack Developer. I just graduated from Coding Bootcamp. </p>
      <Link to="/contact">
        <button className="btn">Contact</button>
      </Link>
        </div>


     </div>
  )
}

export default AboutContent;       
 
