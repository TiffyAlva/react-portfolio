//Resume //modify later
import React from 'react'

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import ResumeDoc from '../components/ResumeDoc';







const Resume = () => {
    const resumePdf = 'TiffanyResume.pdf';
  
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading= "RESUME." text= "view resume"/>
      <ResumeDoc/> 
      <Footer/>

      
      
      

      {/* <a href= "TiffanyResume.pdf" //Resume Download
          download="TiffanyResume.pdf"></a> */}
         
    </div>


// heading= "RESUME." text= "view resume"/>


          




    





    


  )
}

export default Resume;




// //Add your resume to the next page on line 13
