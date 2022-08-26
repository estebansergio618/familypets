import { CardInterface } from "../types";
import Card from "./Card";
import React, { useRef, useState } from "react";

const Solutions = () => {
  const [scrollY, setScrollY] = useState<number>(0);
  const parRef = useRef<HTMLDivElement>(null);

  const changeScroll = (): void => {
    if (parRef.current != undefined && parRef.current != null) {
      setScrollY(parRef.current.offsetTop - window.scrollY);
    }
  };
  window.addEventListener("scroll", changeScroll);
  const cardInfo: CardInterface[] = [
    {
      icon: "local_shipping",
      title: "Delivery Rápido",
      description:
        "Servicio de delivery eficiente para el transporte de su mascota.",
      button: "Agenda tu cita",
      route: "#contacto",
    },
    {
      icon: "schedule",
      title: "Emergencias 24/7",
      description:
        "Servicio de emergencias y líneas de atención disponibles 24/7.",
      button: "Necesito Ayuda",
      route: "#contacto",
    },
    {
      icon: "group",
      title: "El mejor equipo",
      description: "Un equipo de profesionales en los que puedes confiar.",
      button: "conócenos",
      route: "/nosotros",
    },
  ];
  return (
    <section className="solutions">
      <div className="solutions__separator">
        <div className="solutions__left">
          <h2 className="solutions__h2">VISÍTANOS JUNTO A TU PEQUEÑO</h2>
          <p>Reserva en segundos</p>
        </div>
        <a href="#contacto">
          <button className="solutions__button">AGENDA TU CITA</button>
        </a>
      </div>
      <div
        className="solutions__content"
        ref={parRef}
        style={{ backgroundPositionY: `${-scrollY / 5}px` }}
      >
        <div className="solutions__text">
          <h2 className="solutions__title">¡Adaptados para tus necesidades!</h2>
          <p className="solutions__subtitle">
            Las mejores soluciones pensadas para tu comodidad, descubre lo que
            podemos hacer por ti y tu mascota.
          </p>
        </div>
        <div className="solutions__cards">
          {cardInfo.map((card) => (
            <Card card={card} key={card.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
