import React from "react";
import { useNavigate } from "react-router-dom";
import "./Admin.css";

export default function Home() {
    const nav = useNavigate();

    return (
        <div className="parentadmin">
            <div className="titlebar">
                <div className="bitslogobox">
                    <img src="./pics/bitslogo.webp" alt="bitslogo"></img>
                </div>
                <div className="navbox"></div>
                <div className="currentuser">
                    <p>ADMIN HOMEPAGE</p>
                </div>
                <div className="bitsflagline"></div>
            </div>
            <div className="maincontent">
                <img className="bitsimage" src="./pics/bdome.jpeg" alt="bits"></img>
                <div className="boxmenus">
                    <div className="courses boxoption" onClick={() => nav('/usermanagement')}>
                        <div className="boxtopic">USER MANAGEMENT</div>
                    </div>
                    <div className="grades boxoption" onClick={() => nav('/maintenance')}>
                        <div className="boxtopic" >ROLE BASED ACCESS</div>
                    </div>
                    <div className="projects boxoption" onClick={() => nav('/maintenance')}>
                        <div className="boxtopic">SYSTEM MANAGEMENT</div>
                    </div>
                    <div className="thesis boxoption" onClick={() => nav('/maintenance')}>
                        <div className="boxtopic">SETTINGS AND CONFIG</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
