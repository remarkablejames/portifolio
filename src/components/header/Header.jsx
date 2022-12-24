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
          {/* <h5></h5>  */}
          <h1 id="text"></h1>
          <h5 className="text-light">
            I am, a professional full-stack javascript developer with excellent
            skills in React/redux, Git flow, Nodejs, MongoDB and much more! I
            like working on the back-end of the web. You have made it to the
            site where I showcase whatever side projects I've been working on.
          </h5>
          <CTA />
        </div>
        <div className="me">
          <img src={ME} alt="James Niyongira" />
        </div>
      </div>
    </header>
  );
};
