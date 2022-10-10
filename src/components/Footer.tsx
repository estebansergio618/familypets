import clubWulf from "../assets/images/clubwuf.webp";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__left">
        <p className="footer__text">Datos de Contacto</p>
        <a
          className="footer__link"
          href="https://wa.me/51993485130"
          target="_blank"
          rel="noreferrer"
        >
          <p className="footer__text">WhatsApp +51 993 485 130</p>
        </a>
        <a
          className="footer__link"
          href="mailto:clinicafamilypets@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <p className="footer__text">clinicafamilypets@gmail.com</p>
        </a>
      </div>
      <div className="footer__right">
        <a
          href="https://www.wuf.pe/beneficios/flying-woofs"
          target="_blank"
          rel="noreferrer"
        >
          <img className="footer__logo" src={clubWulf} alt="club wuf" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
