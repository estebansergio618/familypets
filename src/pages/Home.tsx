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
    // show loader only the first time the page load
    // Get saved data from sessionStorage
    const data: string | null = sessionStorage.getItem("firstLoad");
    // Save data to sessionStorage
    if (data === "true") return;
    sessionStorage.setItem("firstLoad", "true");
    setPreLoading(true);
    setTimeout(() => {
      setPreLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {preLoading ? <PreLoader /> : null}
      <Hero />
      <ServicesExtended />
      <About />
      <Solutions />
      <Brands />
      <Contact />
    </>
  );
};

export default Home;
