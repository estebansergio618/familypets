import { useLayoutEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import Slider from "react-slick";
import den from "../assets/images/denis.webp";
import mar from "../assets/images/martin.webp";
import wen from "../assets/images/wendy.webp";
import personal1 from "../assets/images/personal1.webp";
import personal2 from "../assets/images/personal2.webp";
import personal3 from "../assets/images/personal3.webp";
import personal4 from "../assets/images/personal4.webp";
import personal5 from "../assets/images/personal5.webp";
const Team = () => {
  const [sectionID, setSectionID] = useState("");
  useLayoutEffect(() => {
    // assign an id after 0,1 seconds page load
    // because and HashLink issue
    setTimeout(() => {
      setSectionID("equipo");
    }, 100);
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
      {
        breakpoint: 667,
        settings: {
          slidesToShow: 1,
          speed: 1500,
          dots: true,
          centerMode: true,
          centerPadding: "0",
        },
      },
    ],
  };
  const personal: { name: string; role: string; image: string }[] = [
    { name: "Denís", role: "Médica Veterinaria CEO", image: den },
    { name: "Wendy", role: "Administración", image: wen },
    { name: "Martín", role: "Médico Veterinario", image: mar },
    { name: "Leslie", role: "Practicante Veterinaria", image: personal1 },
    { name: "Josué Z.", role: "Grooming", image: personal2 },
    //{ name: "Jonathan ", role: "Grooming", image: personal3 },
    //{ name: "Luis", role: "Delivery", image: personal4 },
    { name: "Lucila", role: "Counter", image: personal5 },
  ];
  return (
    <section className="team" id={sectionID}>
      <div className="team__presentation">
        <h2 className="team__h2">¡Conoce a Nuestra Familia!</h2>
        <p className="team__text">
          Nuestro equipo es el indicado para la solución que tú y tu mascota
          están buscando y nos sentimos orgullosos de ello.
        </p>
      </div>
      <div className="team__card-container">
        <Slider {...settings}>
          {personal.map((person) => (
            <div className="team__card" key={person.name + person.role}>
              <div className="team__card-up">
                <div
                  className="team__card-image"
                  style={{ backgroundImage: `url(${person.image})` }}
                />
              </div>
              <div className="team__card-down">
                <p className="team__card-name">{person.name}</p>
                <p className="team__card-role">{person.role}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="team__contact">
        <p className="team__text">¿Quieres formar parte? ¡Contáctanos!</p>
        <HashLink to="/familypets#contacto">
          <button className="team__button">CONTACTO</button>
        </HashLink>
      </div>
    </section>
  );
};

export default Team;
