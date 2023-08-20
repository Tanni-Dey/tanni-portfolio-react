import React from "react";
import Blog from "../Blog/Blog";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import Projects from "./Projects/Projects";

const Home = () => {
  return (
    <div>
      <Banner />
      {/* <About /> */}
      <Projects />
      <Contact />
      {/* <Blog /> */}
    </div>
  );
};

export default Home;
