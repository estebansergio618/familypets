import React from "react";
import { CardInterface } from "../types";
import Card from "./Card";

const Services = () => {
  const miniCardInfo: CardInterface[] = [
    {
      icon: "monitor_heart",
      title: "Clínica",
      description: "Atención veterinaria de primera.",
      button: "Saber Más",
      mini: true,
    },
    {
      icon: "cut",
      title: "Higiene y Estética",
      description: "Servicio de baño, corte y estética.",
      button: "Saber Más",
      mini: true,
    },
    {
      icon: "cottage",
      title: "Hospedaje",
      description: "Hospedaje para sus mascotas.",
      button: "Saber Más",
      mini: true,
    },
    {
      icon: "luggage",
      title: "Traslado",
      description: "Traslado nacional e internacional.",
      button: "Saber Más",
      mini: true,
    },
    {
      icon: "memory",
      title: "CHIPid",
      description: "Identifica a tu mascota con CHIPid.",
      button: "Saber Más",
      mini: true,
    },
    {
      icon: "language",
      title: "Servicios digitales",
      description: "Servicios en línea de vanguardia.",
      button: "Saber Más",
      mini: true,
    },
  ];
  return (
    <section className="services">
      <div className="services__text">
        <p className="services__title">Nuestros Servicios</p>
        <p className="services__subtitle">
          Ofrecemos servicios de alta calidad para la comodidad y el bienestar
          de su mascota.
        </p>
      </div>
      <div className="services__card-container">
        {miniCardInfo.map((card) => (
          <Card card={card} key={card.title} />
        ))}
      </div>
    </section>
  );
};

export default Services;
