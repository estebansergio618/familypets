import React, { useEffect, useRef, useState } from "react";

const Hamburger = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isAboutUsOpen, setIsAboutUsOpen] = useState<boolean>(false);
  const [isLabOpen, setIsLabOpen] = useState<boolean>(false);
  const navRef = useRef<HTMLUListElement>(null);
  const handleCloseMenu = (e: any): void => {
    if (
      !e.target.classList.contains("hamburger__nav-background") &&
      !e.target.classList.contains("hamburger__menu")
    )
      return;
    navRef.current?.classList.add("hamburger__nav--closing");
    setTimeout(() => {
      navRef.current?.classList.remove("hamburger__nav--closing");
      setIsMenuOpen(false);
      setIsAboutUsOpen(false);
      setIsLabOpen(false);
    }, 200);
  };
  useEffect(() => {
    setIsMenuOpen(false);
    setIsAboutUsOpen(false);
    setIsLabOpen(false);
  }, []);

  return (
    <div className="hamburger">
      <button
        className="hamburger__menu material-symbols-outlined"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        menu
      </button>
      {isMenuOpen ? (
        <div className="hamburger__nav-background" onClick={handleCloseMenu}>
          <ul className="hamburger__nav" ref={navRef}>
            <li className="hamburger__nav-list--first">
              MENU
              <button
                className="hamburger__menu hamburger__menu-close material-symbols-outlined"
                onClick={handleCloseMenu}
              >
                close
              </button>
            </li>
            <li>
              <a
                className="hamburger__nav-list"
                href="/familypets#inicio"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </a>
            </li>
            <li
              className="hamburger__nav-list"
              onClick={() => setIsAboutUsOpen(!isAboutUsOpen)}
            >
              <div className="hamburger__nav-list--title">
                Nosotros
                <span
                  className={
                    isAboutUsOpen
                      ? "hamburger__droplogo hamburger__droplogo--invert material-symbols-outlined"
                      : "hamburger__droplogo material-symbols-outlined"
                  }
                >
                  arrow_drop_down
                </span>
              </div>
              {isAboutUsOpen ? (
                <ul className="hamburger__subnav">
                  <li>
                    <a
                      className="hamburger__subnav-list"
                      href="/familypets/nosotros"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      ¿Quienes Somos?
                    </a>
                  </li>
                  <li>
                    <a
                      className="hamburger__subnav-list"
                      href="/familypets/nosotros#equipo"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Equipo
                    </a>
                  </li>
                  <li>
                    <a
                      className="hamburger__subnav-list"
                      href="/familypets#servicios"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Servicios
                    </a>
                  </li>
                  {/* <li
                    className="hamburger__subnav-list"
                  >
                    Blog
                  </li> */}
                </ul>
              ) : null}
            </li>
            <li>
              <a
                className="hamburger__nav-list"
                href="/familypets#contacto"
                onClick={() => setIsMenuOpen(false)}
              >
                Agenda Tu Cita
              </a>
            </li>
            <li>
              <a
                className="hamburger__nav-list"
                href="/familypets#contacto"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </a>
            </li>
            {/* <li
              className="hamburger__nav-list"
              onClick={() => setIsLabOpen(!isLabOpen)}
            >
              <div className="hamburger__nav-list--title">
                Laboratorio
                <span
                  className={
                    isLabOpen
                      ? "hamburger__droplogo hamburger__droplogo--invert material-symbols-outlined"
                      : "hamburger__droplogo material-symbols-outlined"
                  }
                >
                  arrow_drop_down
                </span>
              </div>
              {isLabOpen ? (
                <ul className="hamburger__subnav">
                  <li
                    className="hamburger__subnav-list"
                  
                  >
                    Registrarse
                  </li>
                  <li
                    className="hamburger__subnav-list"
                  >
                    Iniciar Sesion
                  </li>
                </ul>
              ) : null}
            </li> */}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default Hamburger;
