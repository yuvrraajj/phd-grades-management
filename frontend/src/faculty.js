import React from "react";
import { useNavigate } from "react-router-dom";
import "./faculty.css";

export default function Home() {
    const nav = useNavigate();

    return (
        <div className="parentadmin">
            <div className="titlebar">
                <div className="bitslogobox">
                    <img src="./pics/bitslogo.webp" alt="bitslogo" />
                </div>
                <div className="navbox"></div>
                <div className="currentuser">
                    <p>FACULTY HOMEPAGE</p>
                </div>
                <div className="bitsflagline"></div>
            </div>
            <div className="maincontent">
                <img className="bitsimage" src="./pics/bdome.jpeg" alt="bits" />
                <div className="boxmenus">
                <div className="grades boxoption" onClick={() => nav('/grademanagement')}>
                        <div className="boxtopic">GRADE MANAGEMENT</div>
                    </div>
                    <div className="courses boxoption" onClick={() => nav('/maintenance')} >
                        <div className="boxtopic" >STUDENT MANAGEMENT</div>
                    </div>
                   
                    <div className="projects boxoption" onClick={() => nav('/maintenance')}>
                        <div className="boxtopic">ACADEMIC PROGRESS TRACKING</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
