import Hero from "./Hero/Hero";
import About from "./About/About";
import Project from "./Project/Project";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";
import Services from "./Services/Services";

type Props = {
  currentLang: "vi" | "en"; // Nhận ngôn ngữ từ props
};

const Home = ({ currentLang }: Props) => {
  return (
    <div className="overflow-hidden font-roboto">
      <section id="home">
        <Hero currentLang={currentLang} />
      </section>
      <section id="about">
        <About currentLang={currentLang} />
      </section>
      <section id="services">
        <Services currentLang={currentLang} />
      </section>
      <section id="project">
        <Project currentLang={currentLang} />
      </section>
      <section id="skills">
        <Skills currentLang={currentLang} />
      </section>
      <section id="contacts">
        <Contact currentLang={currentLang} />
      </section>
    </div>
  );
};

export default Home;
