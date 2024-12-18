import React from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Project from "./Project/Project";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="project">
        <Project />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contacts">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
