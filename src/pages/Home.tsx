import React from "react";
import About from "../components/About";
import Brands from "../components/Brands";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Solutions from "../components/Solutions";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Solutions />
      <Services />
      <Brands />
      <Contact />
    </>
  );
};

export default Home;
