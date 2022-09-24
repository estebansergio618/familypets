import { useContext, useEffect, useRef, useState } from "react";
import { HashLink } from "react-router-hash-link";
import { ReserverContext } from "../context/ReserverContext";

const Hamburger = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isAboutUsOpen, setIsAboutUsOpen] = useState<boolean>(false);
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
    }, 200);
  };
  useEffect(() => {
    setIsMenuOpen(false);
    setIsAboutUsOpen(false);
  }, []);

  const reserverContext = useContext(ReserverContext);
  const handleShowReserverModal = (): void => {
    reserverContext?.setShowReserverModal(true);
  };

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
              <HashLink
                className="hamburger__nav-list"
                to="/familypets#inicio"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </HashLink>
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
                    <HashLink
                      className="hamburger__subnav-list"
                      to="/familypets/nosotros#nosotros"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      ¿Quienes Somos?
                    </HashLink>
                  </li>
                  <li>
                    <HashLink
                      className="hamburger__subnav-list"
                      to="/familypets/nosotros#equipo"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Equipo
                    </HashLink>
                  </li>
                  <li>
                    <HashLink
                      className="hamburger__subnav-list"
                      to="/familypets/nosotros#servicios"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Servicios
                    </HashLink>
                  </li>
                </ul>
              ) : null}
            </li>
            <li
              className="hamburger__nav-list"
              onClick={() => handleShowReserverModal()}
            >
              Agenda Tu Cita
            </li>
            <li>
              <HashLink
                className="hamburger__nav-list"
                to="/familypets#contacto"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </HashLink>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default Hamburger;
