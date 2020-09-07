import React from 'react';
import "../components/Header.css";

function Header () {
    return (
      <div className="header">
        <h1>EMPLOYEE DIRECTORY</h1>
        <p>Hover over <strong>name, phone number, email, or DOB</strong> to sort the employee directory.</p>
      </div>
    )
  }

export default Header;