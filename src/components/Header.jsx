import React from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Header.css";

export default function Header({ onHomeClick }) {
  const navigate = useNavigate();

  function handleHomeClick(e) {
    e.preventDefault();       
    if (onHomeClick) onHomeClick();  
    navigate("/");            
  }

  return (
    <header>
      <div className="header-container">
        <h1 className="logo">Personality Quiz</h1>
        <nav>
          <a href="/" onClick={handleHomeClick}>Home</a>
          <Link to="/quiz">Quiz</Link>
        </nav>
      </div>
    </header>
  );
}
