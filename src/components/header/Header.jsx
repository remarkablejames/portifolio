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
            A remarkable full stack developer Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Unde ipsa modi, corrupti blanditiis
            nulla earum fugiat! Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Amet deserunt mollitia quod error repellendus rem
            labore enim esse sed velit! Sit harum facilis libero culpa a
            provident sint animi voluptatem?
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
