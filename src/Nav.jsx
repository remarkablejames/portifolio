import React, { useState } from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { BiBriefcase } from "react-icons/bi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useNavigate, Link } from "react-router-dom";

export const Nav = () => {
  const [activeLink, setActiveLink] = useState("/");
  //   const getActiveNav = (link) => {
  //     const navigation = useNavigate();

  //   };
  const navigation = useNavigate();

  const handleClick = (link) => {
    navigation(link);
    setActiveLink(link);
  };

  return (
    <nav>
      <Link
        to="/"
        onClick={(e) => handleClick("/")}
        className={activeLink === "/" ? "active" : ""}
      >
        <AiOutlineHome />
      </Link>
      <span onClick={() => handleClick("/about")}>
        <Link to="/about" className={activeLink === "/about" ? "active" : ""}>
          <AiOutlineUser />
        </Link>
      </span>
      <a
        href="/experience"
        onClick={() => handleClick("/experience")}
        className={activeLink === "/experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="/portifolio"
        onClick={() => handleClick("/portifolio")}
        className={activeLink === "/portifolio" ? "active" : ""}
      >
        <BiBriefcase />
      </a>
      <a
        href="/contact"
        onClick={() => handleClick("/contact")}
        className={activeLink === "/contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};
