import React from "react";
import { HashLink } from "react-router-hash-link";

const About = () => {
  return (
    <section className="about">
      <div className="about__separator">
        <span className="about__icon material-symbols-outlined">pets</span>
        <p className="about__title">BIENVENIDO A NUESTRA GRAN FAMILIA</p>
        <p className="about__subtitle">Family Pets</p>
      </div>
      <div className="about__info">
        <span className="about__img" />
        <div className="about__right">
          <h2 className="about__h2">¿Quiénes somos?</h2>
          <p className="about__text">
            La Clínica Veterinaria Family Pets está conformado por un equipo de
            profesionales en el área de medicina veterinaria, estética de
            mascotas y atención al cliente, todos comprometidos con el bienestar
            de su mascota.
            <br />
            <br />
            Proporcionamos los servicios y productos de calidad prémium para la
            salud de sus mascotas y nuestra misión es ofrecer solamente la
            atención de más alto estándar.
            <br />
            <br />
            Proporcionamos los servicios y productos de calidad prémium para la
            salud de sus mascotas y nuestra misión es ofrecer solamente la
            atención de más alto estándar.
          </p>
          <HashLink to="/familypets/nosotros#nosotros">
            <button className="about__button">SABER MÁS</button>
          </HashLink>
        </div>
      </div>
    </section>
  );
};

export default About;
