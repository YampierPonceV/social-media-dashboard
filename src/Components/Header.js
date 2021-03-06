import React from "react";
import "./Header.css";

const Header = ({ children }) => {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="header-grid">
          <div>
            <h1>Social Media Dashboard</h1>
            <p className="header-total">Total Followers: 23</p>
          </div>
        </div>
        {children}
      </div>
    </header>
  );
};

export default Header;
