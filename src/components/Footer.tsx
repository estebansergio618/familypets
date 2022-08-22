import React from "react";
import clubWulf from "../assets/images/clubwuf.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__left">
        <p className="footer__text">Datos de Contacto</p>
        <a
          className="footer__link"
          href="https://wa.me/51937871113"
          target="_blank"
        >
          <p className="footer__text">WhatsApp +51 993 485 130</p>
        </a>
        <a
          className="footer__link"
          href="mailto:clinicafamilypets@gmail.com"
          target="_blank"
        >
          <p className="footer__text">clinicafamilypets@gmail.com</p>
        </a>
      </div>
      <div className="footer__right">
        <a href="https://es.flyingwoofs.com/" target="_blank">
          <img className="footer__logo" src={clubWulf} alt="club wuf" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
