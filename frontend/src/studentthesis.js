import React, { useEffect } from "react";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import "./Studentthesis.css";
export default function Home() {



  return (
    <div className="parentstudentthesis">

        <div className="message"> PAGE IS UNDER DEVELOPMENT</div>
    
    <div className="titlebar">
        <div className="bitslogobox">
          
          <img src="./pics/bitslogo.webp" alt="bitslogo"></img>

        </div>
        <div className="navbox"></div>
        <div className="currentuser">
          <p>STUDENT THESIS</p>
        </div>
              <div className="bitsflagline"></div>

      </div>
      <div className="maincontent">
      
        
      </div>
    </div>
  )
}