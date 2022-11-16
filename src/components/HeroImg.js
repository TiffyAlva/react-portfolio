//Hero Image
import "../components/HeroImg.js";
import "../components/HeroImgStyles.css";

import React from 'react';

import IntroImg from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (<div className="hero">
    <div className="mask">
        <img className="into-img" src=
        {IntroImg} alt="IntroImg"/>

        {/* <a href= "TiffanyResume.pdf" //Resume Download
          download="TiffanyResume.pdf">
          <button className= 'navBtn'>Resume</button>
        </a> */}
    </div>
    <div className="content">
        <p>HI, I'M TIFFANY ALVAREZ.</p>
        <h1>Full-Stack Web Developer.</h1>
        <div>
            <Link to="/project" className="btn">Projects</Link>
            {/* <Link to="/contact" className="btn btn-light">Contact</Link> */}
            <Link to="/resume" className= "btn btn-light">Resume</Link>
        </div>

    </div>
  </div>

  );
  
};

export default HeroImg;
