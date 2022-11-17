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
      <p>Tiffany Alvarez is a Full Stack Developer and she just graduated from Coding Bootcamp. Tiffany looks forward to continue learning about coding. </p>
      <Link to="/contact">
        <button className="btn">Contact</button>
      </Link>
        </div>


     </div>
  )
}

export default AboutContent;       
 
