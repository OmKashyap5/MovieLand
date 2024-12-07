// components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import logo from "./Movie.png"

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="App Logo" />
      </div>
      <nav className="nav-bar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/search">Search</Link></li>
          <li><Link to="/movies">Movies</Link></li>
          <li><Link to="/series">Series</Link></li>
          <li><Link to="/sports">Sports</Link></li>
          <li><Link to="/login">Login/Sign Up</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
