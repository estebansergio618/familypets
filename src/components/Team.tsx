import React from "react";
import Slider from "react-slick";
import den from "../assets/images/denis.webp";
import mar from "../assets/images/martin.webp";
import wen from "../assets/images/wendy.webp";
const Team = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          dots:true,
        },
      },
      {
        breakpoint: 667,
        settings: {
          slidesToShow: 1,
          speed: 1500,
          dots:true,
          centerMode: true,
          centerPadding: "0",
        },
      },
    ],
  };
  return (
    <section className="team" id="equipo">
      <div className="team__presentation">
        <h2 className="team__h2">¡Conoce a Nuestra Familia!</h2>
        <p className="team__text">
          Nuestro equipo es el indicado para la solución que tú y tu mascota
          están buscando y nos sentimos orgullosos de ello.
        </p>
      </div>
      <div className="team__card-container">
        <Slider {...settings}>
          <div className="team__card">
            <div className="team__card-up">
              <div
                className="team__card-image"
                style={{ backgroundImage: `url(${den})` }}
              />
            </div>
            <div className="team__card-down">
              <p className="team__card-name">Denís</p>
              <p className="team__card-role">Médica Veterinaria</p>
            </div>
          </div>
          <div className="team__card">
            <div className="team__card-up">
              <div
                className="team__card-image"
                style={{ backgroundImage: `url(${wen})` }}
              />
            </div>
            <div className="team__card-down">
              <p className="team__card-name">Wendy</p>
              <p className="team__card-role">Gerente</p>
            </div>
          </div>
          <div className="team__card">
            <div className="team__card-up">
              <div
                className="team__card-image"
                style={{ backgroundImage: `url(${mar})` }}
              />
            </div>
            <div className="team__card-down">
              <p className="team__card-name">Martín</p>
              <p className="team__card-role">Médico Veterinario</p>
            </div>
          </div>
        </Slider>
      </div>
      <div className="team__contact">
        <p className="team__text">¿Quieres formar parte? ¡Contáctanos!</p>
        <a href="/familypets#contacto">
        <button className="team__button">CONTACTO</button>
        </a>
      </div>
    </section>
  );
};

export default Team;
