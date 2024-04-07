import React, { useState, useRef, useEffect } from "react";
import "./usermanagement.css";

function UserRow({ user, onUpdateUser }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const rowRef = useRef(null);

  const handleClickOutside = (event) => {
    if (rowRef.current && !rowRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleRoleChange = (newRole) => {
    onUpdateUser(user.userid, newRole);
    setShowDropdown(false);
  };

  return (
    <div className="usertable" ref={rowRef}>
      <div className="userid">{user.userid}</div>
      <div className="username">{user.username}</div>
      <div className="role">{user.userrole}</div>
      <div className="editbutton" onClick={() => setShowDropdown(!showDropdown)}>Edit Role</div>
      {showDropdown && (
        <div className="dropdownMenu">
          <div className="dropdownOption" onClick={() => handleRoleChange('HoD')}>HoD</div>
          <div className="dropdownOption" onClick={() => handleRoleChange('Admin')}>Admin</div>
          <div className="dropdownOption" onClick={() => handleRoleChange('Faculty')}>Faculty</div>
          <div className="dropdownOption" onClick={() => handleRoleChange('Student')}>Student</div>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const [users, setUsers] = useState([
    
    { userid: 'Id', username: 'Username', userrole: 'Role' },
    { userid: 1, username: 'Dr. Aarav Patel', userrole: 'HoD' },
    { userid: 2, username: 'Prof. Vihaan Sharma', userrole: 'Faculty' },
    { userid: 3, username: 'Dr. Advik Iyer', userrole: 'Faculty' },
    { userid: 4, username: 'Mr. Kabir Joshi', userrole: 'Admin' },
    { userid: 5, username: 'Ms. Saanvi Gupta', userrole: 'Student' },
    { userid: 6, username: 'Mr. Ayaan Kumar', userrole: 'Student' },
    { userid: 7, username: 'Ms. Ananya Singh', userrole: 'Student' },
    { userid: 8, username: 'Dr. Vivaan Reddy', userrole: 'HoD' },
  ]);

  const updateRole = (userid, newRole) => {
    const updatedUsers = users.map(user => {
      if (user.userid === userid) {
        return { ...user, userrole: newRole };
      }
      return user;
    });
    setUsers(updatedUsers);
  };

  return (
    <div className="parentusermanag">
      <div className="subparent">
      <div className="titlebar">
          <div className="bitslogobox">
            <img src="./pics/bitslogo.webp" alt="bitslogo" />
          </div>
          <div className="navbox"></div>
          <div className="currentuser">
            <p>USER MANAGEMENT</p>
          </div>
          <div className="bitsflagline"></div>
        </div>        <div className="maincontent">
          <div className="usersarea">
            {users.map((user) => (
              <UserRow key={user.userid} user={user} onUpdateUser={updateRole} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
