import React, { useState } from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { BiBriefcase } from "react-icons/bi";
import { BiMessageSquareDetail } from "react-icons/bi";

export const Nav = () => {
  const [activeLink, setActiveLink] = useState("#");
  const getActiveNav = (link) => {};
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveLink("#")}
        className={activeLink === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveLink("#about")}
        className={activeLink === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveLink("#experience")}
        className={activeLink === "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#portifolio"
        onClick={() => setActiveLink("#portifolio")}
        className={activeLink === "#portifolio" ? "active" : ""}
      >
        <BiBriefcase />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveLink("#contact")}
        className={activeLink === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};
