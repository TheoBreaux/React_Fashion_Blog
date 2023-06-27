import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div style={{ padding: "1rem 2rem" }}>
      <nav className="footer-nav">
        <ul aria-label="Main Navigation" role="navigation" class="footer-nav">
          <a href="#home">
            <li>Home</li>
          </a>
          <a href="#womens">
            <li>Women's</li>
          </a>
          <a href="#mens">
            <li>Men's</li>
          </a>
          <a href="onthetreet">
            <li>On the Street</li>
          </a>
          <a href="thecatwalk">
            <li>The Catwalk</li>
          </a>
          <a href="adwatch">
            <li>AdWatch</li>
          </a>
          <a href="about">
            <li>About</li>
          </a>
          <a href="tips">
            <li>Tips</li>
          </a>
        </ul>
      </nav>
      <p class="copyright">&#169;2013 Valet Industries, Inc.</p>
    </div>
  );
};

export default Footer;
