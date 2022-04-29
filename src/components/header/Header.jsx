import React from "react";
import "./header.css";
import { CTA } from "./CTA";
import ME from "../../assets/me.svg";
import { Socials } from "./Socials";

export const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="banner__container">
          <h5>Hello, I'm</h5>
          <h1 id="text"></h1>
          <h5 className="text-light">
            A professional full-stack javascript developer with remarkable
            skills in React-redux, Git, Nodejs, MongoDB and much more! I like
            working on the front-end of the web. This is my site,
            remarkablejames.com, where I showcase and share whatever side
            projects I've been working on.
          </h5>
          <CTA />
        </div>
        <div className="me">
          <img src={ME} alt="Niyongira James" />
        </div>
      </div>
    </header>
  );
};
