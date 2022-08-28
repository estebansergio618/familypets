import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.webp";
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

  window.addEventListener("scroll", changeNav);
  useEffect(() => {
    console.log("rerender");
  }, []);
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
          <a className="navigation__nav-list" href="/#inicio">
            Inicio
          </a>
        </li>
        <li className="navigation__nav-list navigation__nav-list-sub">
          Nosotros
          <ul className="navigation__subnav">
            <li>
              <a className="navigation__subnav-list" href="/nosotros">
                ¿Quienes Somos?
              </a>
            </li>
            <li>
              <a className="navigation__subnav-list" href="/nosotros#equipo">
                Equipo
              </a>
            </li>
            <li>
              <a className="navigation__subnav-list" href="#servicios">
                Servicios
              </a>
            </li>
            {/* <li className="navigation__subnav-list">Blog</li> */}
          </ul>
        </li>
        <li>
          <a className="navigation__nav-list" href="/#contacto">
            Agenda Tu Cita
          </a>
        </li>
        <li>
          <a className="navigation__nav-list" href="/#contacto">
            Contacto
          </a>
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
