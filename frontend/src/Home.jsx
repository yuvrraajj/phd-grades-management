import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

export default function Home() {
  const nav = useNavigate();

  function handlenavigate(role) {
    switch (role) {
      case 'admin':
        nav('/admin');
        break;
      case 'stud':
        nav('/student');
        break;
        case 'fac':
        nav('/faculty');
        break;
      // Add cases for other roles if needed
      default:
        // Handle the default case or do nothing
        break;
    }
  }

  return (
    <div className="parenthome">
      <div className="subparent">
        <div className="titlebar">
          <div className="bitslogobox">
            <img src="./pics/bitslogo.webp" alt="bitslogo" />
          </div>
          <div className="navbox"></div>
          <div className="currentuser">
            <p>HOME</p>
          </div>
          <div className="bitsflagline"></div>
        </div>
        <div className="maincontent">
          <div className="loginoptions">
            <div className="loginbutton" onClick={() => handlenavigate('admin')}>LOGIN AS ADMIN</div>
            
            <div className="loginbutton" onClick={() => handlenavigate('fac')}>LOGIN AS FACULTY </div>
            <div className="loginbutton" onClick={() => handlenavigate('stud')}>LOGIN AS STUDENT</div>
            <div className="loginbutton" onClick={() => nav('/maintenance')}>LOGIN AS HoD</div>
          </div>
          <div className="phdnews">
            <div className="newsheading"><strong>SITE ANNOUNCEMENTS</strong></div>
          </div>
        </div>
      </div>
    </div>
  );
}
