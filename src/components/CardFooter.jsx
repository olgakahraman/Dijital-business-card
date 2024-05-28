import React from "react";

export default function CardFooter() {
  return (
    <div className="footer">
      <div className="social-links">
        <a
          href="https://github.com/olgakahraman"
          target="_blank"
          rel="noopener noreferrer"
          title="Github Profile"
        >
          <i className="fa-brands fa-square-github"></i>
        </a>
        <a
          href="http://www.linkedin.com/in/olga-kahraman"
          target="_blank"
          rel="noopener noreferrer"
          title="Linkedin Profile"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          href="http://www.instagram.com/olga_d.khrmn/"
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram Profile"
        >
          <i className="fa-brands fa-square-instagram"></i>
        </a>
      </div>
    </div>
  );
}
