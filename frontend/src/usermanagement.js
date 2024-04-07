import React from "react";
import "./usermanagement.css";

export default function Home() {
  const users = [
    { userid: 'Id', username: 'Username', userrole: 'Role' },

    { userid: 1, username: 'Dr. Aarav Patel', userrole: 'HoD' },
    { userid: 2, username: 'Prof. Vihaan Sharma', userrole: 'Faculty' },
    { userid: 3, username: 'Dr. Advik Iyer', userrole: 'Faculty' },
    { userid: 4, username: 'Mr. Kabir Joshi', userrole: 'Admin' },
    { userid: 5, username: 'Ms. Saanvi Gupta', userrole: 'Student' },
    { userid: 6, username: 'Mr. Ayaan Kumar', userrole: 'Student' },
    { userid: 7, username: 'Ms. Ananya Singh', userrole: 'Student' },
    { userid: 8, username: 'Dr. Vivaan Reddy', userrole: 'HoD' },
  ];

  return (
    <div className="parenusermanag">
      <div className="titlebar">
        <div className="bitslogobox">
          <img src="./pics/bitslogo.webp" alt="bitslogo" />
        </div>
        <div className="navbox"></div>
        <div className="currentuser">
          <p>USER MANAGEMENT</p>
        </div>
        <div className="bitsflagline"></div>
      </div>
      <div className="maincontent">
        <div className="usersarea">
          {users.map((user) => (
            <div className="usertable" key={user.userid}>
              <div className="userid">{user.userid}</div>
              <div className="username">{user.username}</div>
              <div className="role">{user.userrole}</div>
              <div className="editbutton">Edit</div> 
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
