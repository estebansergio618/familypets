import React from "react";
import clubWulf from "../images/clubwuf.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__left">
        <h3>Datos de Contacto</h3>
        <a
          className="footer__link"
          href="https://wa.me/51937871113"
          target="_blank"
        >
          <h4>WhatsApp +51 993 485 130</h4>
        </a>
        <a
          className="footer__link"
          href="mailto:clinicafamilypets@gmail.com"
          target="_blank"
        >
          clinicafamilypets@gmail.com
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
