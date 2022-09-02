import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
const Hero = () => {
  const [scrollY, setScrollY] = useState<number>(0);

  const changeScroll = (): void => {
    setScrollY(window.scrollY);
  };

  window.addEventListener("scroll", changeScroll);

  return (
    <div
      className="hero"
      style={{ backgroundPosition: `center ${(scrollY-30)/10}px` }}
      id="inicio"
    >
      <HashLink to="/familypets#contacto">
        <button className="hero__button hero__button-left">CONTACTO</button>
      </HashLink>
      <HashLink to="/familypets#contacto">
        <button className="hero__button">AGENDA TU CITA</button>
      </HashLink>
    </div>
  );
};

export default Hero;
