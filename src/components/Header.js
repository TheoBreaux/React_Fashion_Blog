import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header" style={{ padding: "1rem 2rem" }}>
      <h1>Sartre's List</h1>
      <h2>Better-Dressed People</h2>

      <nav className="header-nav">
        <ul aria-label="Main Navigation" role="navigation" class="header-nav">
          <a href="#womens">
            <li>Women's</li>
          </a>
          <a href="#mens">
            <li>Men's</li>
          </a>
          <a href="#onthestreet">
            <li>On the Street</li>
          </a>
          <a href="#thecatwalk">
            <li>The Catwalk</li>
          </a>
          <a href="#adwatch">
            <li>AdWatch</li>
          </a>
          <a href="#about">
            <li>About</li>
          </a>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
