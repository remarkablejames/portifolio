import React from "react";
import "./footer.css";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";

export const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        REMARKABLEJAMES
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portifolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact Me</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.twitter.com/remarkablejames" target="_blank">
          <IoLogoTwitter />
        </a>
        <a href="https://www.github.com/remarkablejames" target="_blank">
          <IoLogoGithub />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; remarkableJames. All rights reserved.</small>
      </div>
    </footer>
  );
};
