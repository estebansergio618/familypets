import React, { useState } from "react";
import background from "../images/lab1.jpg";
import background2 from "../images/lab2.jpg";
const Hero = () => {
  const [scrollY, setScrollY] = useState<number>(0);

  const changeScroll = (): void => {
    setScrollY(window.scrollY);
  };
  
  window.addEventListener("scroll", changeScroll);
  return (
    <div className="hero" style={{backgroundPosition:`center ${scrollY/3}px`}}>
      <button className="hero__button hero__button-left">CONTACTO</button>
      <button className="hero__button">AGENDA TU CITA</button>
    </div>
  );
};

export default Hero;
