import React, { useEffect } from "react";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import "./Studentgrades.css";
export default function Home() {
    const nav=useNavigate();

    const options = ["COURSES", "GRADES", "PROJECTS", "ASSISTANT COURSES"];
    const cs_courses = [
        {"grade": "A", "course_id": "CSCI101", "course_name": "Introduction to Computer Science"},
        {"grade": "B+", "course_id": "CSCI201", "course_name": "Data Structures"},
        {"grade": "A-", "course_id": "CSCI301", "course_name": "Algorithms"},
        {"grade": "B", "course_id": "CSCI303", "course_name": "Operating Systems"},
        {"grade": "A", "course_id": "CSCI404", "course_name": "Computer Networks"}
    ]
  return (
    <div className="parentstudentgrades">
    
    <div className="titlebar">
        <div className="bitslogobox">
          
          <img src="./pics/bitslogo.webp" alt="bitslogo"></img>

        </div>
        <div className="navbox"></div>
        <div className="currentuser">
          <p>STUDENT GRADES</p>
        </div>
              <div className="bitsflagline"></div>

      </div>
      <div className="maincontent">
       <div className="downloadbar">
        <div className="downloadoption"> Download Marksheet </div>
       </div>

       <div className="gradesarea">
  {
    cs_courses.map((course) => (
      <div className="gradetable" key={course.course_id}> {/* Added a key for list rendering optimization */}
        <div className="courseid">{course.course_id}</div>
        <div className="coursename">{course.course_name}</div>
        <div className="grade">{course.grade}</div>
      </div>
    ))
  }
</div>

      </div>
    </div>
  )
}