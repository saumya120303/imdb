import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        Made by Saumya Rani
        <a href="https://saumya120303.github.io/portfolio/" className="footer-link">
        Click ❤️ to know more.
        </a>
      </div>
    </div>
  );
};

export default Footer;
