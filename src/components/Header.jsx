import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <div className="header-container">
        <h1 className="logo">Personality Quiz</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/quiz">Quiz</Link>
        </nav>
      </div>
    </header>
  );
}