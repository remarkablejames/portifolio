import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import html from "../../assets/svg icons/HTML5.svg";
import css from "../../assets/svg icons/CSS 3.svg";
import js from "../../assets/svg icons/javascript.svg";
import react from "../../assets/svg icons/react.svg";
import reduxicon from "../../assets/svg icons/redux.png";
import mongo from "../../assets/svg icons/MongoDB.png";
import node from "../../assets/svg icons/Nodejs.png";
import giticon from "../../assets/svg icons/GIT.png";
import github from "../../assets/svg icons/GITHUB.png";
import webpackicon from "../../assets/svg icons/WEBPACK.png";

export const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__box">
          <img src={html} alt="" />
        </div>
        <div className="experience__box">
          <img src={css} alt="" />
        </div>
        <div className="experience__box">
          <img src={js} alt="" />
        </div>
        <div className="experience__box">
          <img src={react} alt="" />
        </div>
        <div className="experience__box">
          <img src={reduxicon} alt="" />
        </div>
        <div className="experience__box">
          <img src={mongo} alt="" />
        </div>
        <div className="experience__box">
          <img src={node} alt="" />
        </div>
        <div className="experience__box">
          <img src={giticon} alt="" />
        </div>
        <div className="experience__box">
          <img src={github} alt="" />
        </div>
        <div className="experience__box">
          <img src={webpackicon} alt="" />
        </div>
      </div>
    </section>
  );
};
