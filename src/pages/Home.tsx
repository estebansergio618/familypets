import React, { useEffect, useState } from "react";
import About from "../components/About";
import Brands from "../components/Brands";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import PreLoader from "../components/PreLoader";
import Services from "../components/Services";
import Solutions from "../components/Solutions";

const Home = () => {
  const [preLoading, setPreLoading] = useState<boolean>(false);
  useEffect(() => {
    setPreLoading(true);
    setTimeout(() => {
      setPreLoading(false);
    }, 2500);
  },[]);

  return (
    <>
      <Hero />
      <About />
      <Solutions />
      <Services />
      <Brands />
      <Contact />
      {preLoading ? <PreLoader /> : null}
    </>
  );
};

export default Home;
