import React from "react";
import { useNavigate } from "react-router-dom";
import "./Student.css";

export default function Home() {
    const nav = useNavigate();

    // Function to handle navigation, which can be reused if needed
    const handleNavigate = (path) => {
        nav(path);
    };

    return (
        <div className="parentstudent">
            <div className="titlebar">
                <div className="bitslogobox">
                    <img src="./pics/bitslogo.webp" alt="bitslogo" />
                </div>
                <div className="navbox"></div>
                <div className="currentuser">
                    <p>STUDENT HOMEPAGE</p>
                </div>
                <div className="bitsflagline"></div>
            </div>
            <div className="maincontent">
                <div className="boxmenus">
                <div className="grades boxoption" onClick={() => handleNavigate('/studentgrades')}>
                        <div className="boxtopic">GRADES</div>
                    </div>
                    <div className="courses boxoption">
                        <div className="boxtopic" onClick={() => nav('/maintenance')}>COURSES</div>
                    </div>
                    
                    <div className="projects boxoption">
                        <div className="boxtopic" onClick={() => nav('/maintenance')}>PROJECTS</div>
                    </div>
                    <div className="thesis boxoption">
                        <div className="boxtopic" onClick={() => nav('/maintenance')}>THESIS</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
