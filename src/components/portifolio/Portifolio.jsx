import React from "react";
import "./portifolio.css";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

export const Portifolio = () => {
  const images = [
    {
      id: 1,
      title: "Video-Search Application",
      image: IMG1,
      github: "https://github.com/remarkablejames/video-search-app",
      demo: "https://video-search-app-james.netlify.app/",
    },
    {
      id: 2,
      title: "Mbuze icyo nandika hano",
      image: IMG2,
      github: "",
      demo: "",
    },
    { id: 3, title: "Mantaining tasks", image: IMG3 },
    { id: 4, title: "My portfolio website", image: IMG4, github: "", demo: "" },
    {
      id: 5,
      title: "Admin dashboard layout",
      image: IMG5,
      github: "",
      demo: "",
    },
    {
      id: 6,
      title: "Charts template and infographic",
      image: IMG6,
      github: "",
      demo: "",
    },
  ];
  const content = images.map((item) => {
    return (
      <article className="portifolio__item" key={item.id}>
        <div className="portifolio__item-image">
          <img src={item.image} alt="" />
        </div>
        <h3>{item.title}</h3>
        <div className="portfolio__item-cta">
          <a href={item.github} className="btn" target="_blank">
            Github
          </a>
          <a href={item.demo} target="_blank" className="btn btn-primary">
            Live Demo
          </a>
        </div>
      </article>
    );
  });
  return (
    <section id="portifolio">
      <h5>My recent work</h5>
      <h2>Portifolio</h2>
      <div className="container portifolio__container">{content}</div>
    </section>
  );
};
