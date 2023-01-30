import { useContext, useState } from "react";
import { HashLink } from "react-router-hash-link";
import { ReserverContext } from "../context/ReserverContext";
const Hero = () => {
  const [scrollY, setScrollY] = useState<number>(0);
  const changeScroll = (): void => {
    setScrollY(window.scrollY);
  };

  window.addEventListener("scroll", changeScroll);

  const reserverContext = useContext(ReserverContext);
  const handleShowReserverModal = (): void => {
    // reserverContext?.setShowReserverModal(true);
    alert("Muy pronto podras contar con esta opción 🐑");
  };

  return (
    <div
      className="hero"
      style={{ backgroundPosition: `center ${(scrollY - 30) / 10}px` }}
      id="inicio"
    >
      <HashLink to="/familypets#contacto">
        <button className="hero__button hero__button-left">CONTACTO</button>
      </HashLink>
      <button
        onClick={() => {
          handleShowReserverModal();
        }}
        className="hero__button"
      >
        AGENDA TU CITA
      </button>
    </div>
  );
};

export default Hero;
