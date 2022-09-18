import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../assets/images/logo.webp";
import { ReserverContext } from "../context/ReserverContext";
import Hamburger from "./Hamburger";
const Navigation = () => {
  const [navOnTop, setNavOnTop] = useState<boolean>(true);
  const changeNav = (): void => {
    if (window.scrollY <= 90) {
      setNavOnTop(true);
    } else {
      setNavOnTop(false);
    }
  };

  const reserverContext = useContext(ReserverContext);
  const handleShowReserverModal = (): void => {
    reserverContext?.setShowReserverModal(true);
  };

  window.addEventListener("scroll", changeNav);
  return (
    <nav className={navOnTop ? "navigation" : "navigation navigation-alt"}>
      <div className="navigation__title">
        <p>Clinica Veterinaria</p>
        <div className="navigation__logo-container">
          <img className="navigation__logo-img" src={logo} alt="Family Pets" />
          <h1 className="navigation__logo-text">Family Pets</h1>
        </div>
      </div>
      <ul className="navigation__nav">
        <li>
          <HashLink className="navigation__nav-list" to="/familypets#inicio">
            Inicio
          </HashLink>
        </li>
        <li className="navigation__nav-list navigation__nav-list-sub">
          Nosotros
          <ul className="navigation__subnav">
            <li>
              <HashLink
                className="navigation__subnav-list"
                to="/familypets/nosotros#nosotros"
              >
                ¿Quienes Somos?
              </HashLink>
            </li>
            <li>
              <HashLink
                className="navigation__subnav-list"
                to="/familypets/nosotros#equipo"
              >
                Equipo
              </HashLink>
            </li>
            <li>
              <HashLink
                className="navigation__subnav-list"
                to="/familypets/nosotros#servicios"
              >
                Servicios
              </HashLink>
            </li>
            {/* <li className="navigation__subnav-list">Blog</li> */}
          </ul>
        </li>
        <li
          onClick={() => handleShowReserverModal()}
          className="navigation__nav-list"
        >
          Agenda Tu Cita
        </li>
        <li>
          <HashLink className="navigation__nav-list" to="/familypets#contacto">
            Contacto
          </HashLink>
        </li>
        {/* <li className="navigation__nav-list">
          Laboratorio
          <ul className="navigation__subnav">
            <li className="navigation__subnav-list">
              Registrarse
            </li>
            <li className="navigation__subnav-list">
              Iniciar Sesion
            </li>
          </ul>
        </li> */}
      </ul>
      <Hamburger />
    </nav>
  );
};

export default Navigation;
