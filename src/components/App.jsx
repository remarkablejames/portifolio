import React from "react";
import { Header } from "./header/Header";
import { Nav } from "./nav/Nav";
import { About } from "./about/About";
import { Experience } from "./experience/Experience";
import { Services } from "./services/Services";
import { Portifolio } from "./portifolio/Portifolio";
import { Testimonials } from "./testimonials/Testimonials";
import { Contact } from "./contact/Contact";
import { Footer } from "./footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portifolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
