import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
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
        <li className="navigation__nav-list" data-location="/#">
          Inicio
        </li>
        <li
          className="navigation__nav-list navigation__nav-list-sub"
          data-location="/nosotros#"
        >
          Nosotros
          <ul className="navigation__subnav">
            <li data-location="/nosotros#">
              <Link className="navigation__subnav-list" to="/nosotros">
                ¿Quienes Somos?
              </Link>
            </li>
            <li
              className="navigation__subnav-list"
              data-location="/nosotros#team"
            >
              Equipo
            </li>
            <li
              className="navigation__subnav-list"
              data-location="/nosotros#services"
            >
              Servicios
            </li>
            <li
              className="navigation__subnav-list"
              data-location="blog.familypets.pe"
            >
              Blog
            </li>
          </ul>
        </li>
        <li className="navigation__nav-list" data-location="/shop">
          Agenda Tu Cita
        </li>
        <li className="navigation__nav-list" data-location="/#map">
          Contacto
        </li>
        <li className="navigation__nav-list">
          Laboratorio
          <ul className="navigation__subnav">
            <li className="navigation__subnav-list" data-location="/signUp">
              Registrarse
            </li>
            <li className="navigation__subnav-list" data-location="/signIn">
              Iniciar Sesion
            </li>
          </ul>
        </li>
      </ul>
      <Hamburger />
    </nav>
  );
};

export default Navigation;
