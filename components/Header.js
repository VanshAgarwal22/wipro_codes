import React, { useState } from "react";
import "./Header.css";
import logo from "../logo.svg"; 

function Header() {
  const [content, setContent] = useState("Welcome to Home");

  return (
    <div>
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
        <nav>
          <ul>
            <li><button onClick={() => setContent("Welcome to Header")}>Header</button></li>
            <li><button onClick={() => setContent("Welcome to About Us")}>About Us</button></li>
            <li><button onClick={() => setContent("Welcome to Contact Us")}>Contact Us</button></li>
          </ul>
        </nav>
      </header>
      <div className="content">
        <h1>{content}</h1>
      </div>
    </div>
  );
}

export default Header;
