import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { ReserverModal } from "./ReserverModal";
const Hero = () => {
  const [scrollY, setScrollY] = useState<number>(0);

  const [show, setShow] = useState<boolean>(true);
  

  const changeScroll = (): void => {
    setScrollY(window.scrollY);
  };

  window.addEventListener("scroll", changeScroll);

  return (
    <div
      className="hero"
      style={{ backgroundPosition: `center ${scrollY / 3}px` }}
      id="inicio"
    >
      <HashLink to="/familypets#contacto">
        <button className="hero__button hero__button-left">CONTACTO</button>
      </HashLink>
      <button onClick={()=>{setShow(true)}} className="hero__button">AGENDA TU CITA</button>
      {show ? <ReserverModal setShow={setShow}/> : null}

    </div>
  );
};

export default Hero;
