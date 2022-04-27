// This is the call to action component that is included inside the header
// it holds two buttons that calls user to take some action on the website

import React from "react";
import CV from "../../assets/cv.pdf";

export const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};
