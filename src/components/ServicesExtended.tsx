import React from "react";
import { CardInterface } from "../types";
import Card from "./Card";
const ServicesExtended = () => {
  const outlineCardInfo: CardInterface[] = [
    {
      icon: "healing",
      title: "Clínica",
      description:
        "El mejor servicio de clínica para su mascota, desde consultas hasta hospitalizaciones y operaciones.",
      color: "#42b7ca",
      type: "outline",
      subservices: [
        "Fisioterapia",
        "Hospitalización",
        "Cirugías",
        "Profilaxis",
        "Desparacitación Interna y externa",
        "Ecografías",
        "Radiografías",
        "Análisis y Pruebas Diagnósticas",
      ],
    },
    {
      icon: "cut",
      title: "Grooming",
      description:
        "Nuestros profesionales de la higiene canina son los mejores, harán sentir a tu mascota espectacular.",
      color: "#425fca",
      type: "outline",
      subservices: [
        "Agua temperada",
        "Secado temperado",
        "Baño Medicado",
        "Limpieza de oídos",
        "Limpieza de glándulas",
        "Corte y limado de uñas",
        "Cepillado y peinado",
        "Moñito o cinta decorativa",
        " Perfumado",
        "Corte de pelo",
        "Corte higiénico",
        "Retoque de cara",
        "Corte de raza",
        "Rapado",
      ],
    },
    {
      icon: "cottage",
      title: "Hospedaje",
      description:
        "Un hospedaje como el hogar, seguro tu mascota adorará estar con nosotros mientras tienes que irte de viaje.",
      color: "#9c42ca",
      type: "outline",
      subservices: [
        "Kennel Propio",
        "Paseos",
        "Comidas",
        "Juegos",
        "Baño",
        "Seguridad",
      ],
    },
    {
      icon: "luggage",
      title: "Traslado",
      description:
        "¿Quieres viajar o trasladar a tu mascota? Perfecto, tenemos lo que buscas, ¡Sin problemas! ¡Sin retrasos!.",
      color: "#C94254",
      type: "outline",
      subservices: [
        "Seguridad",
        "Rapidez",
        "Comodidad",
        "Solución de Tramites",
        "ChipID",
      ],
    },
    {
      icon: "memory",
      title: "ChipID",
      description:
        "Nuestro nuevo servicio de implantación de chips te permite identificar a tu mascota globalmente. Los chips de nuestro proveedor petID son de la mejor calidad y están certificados a nivel mundial. ¡La seguridad es primero!",
      color: "#40C989",
      type: "outline",
      route:"/#contacto",
    },
    {
      icon: "science",
      title: "Laboratorio en Línea",
      description:
        "Realiza los exámenes de tu mascota en nuestra clínica y chequea sus resultados en nuestra web desde cualquier parte del mundo.",
      color: "#C98940",
      type: "outline",
      button: "Entrar",
      route:"/#inicio",
    },
  ];
  return (
    <section className="servicesextended" id="servicios">
      <div className="servicesextended__presentation">
        <h2 className="servicesextended__h2">Servicios</h2>
        <p className="servicesextended__text">
          Ofrecemos los servicios de más alta calidad para que tú y tus mascotas
          no tengan de nada porque preocuparse.
        </p>
      </div>
      <div className="servicesextended__card-container">
        {outlineCardInfo.map((card) => (
          <Card card={card} key={card.title} />
        ))}
      </div>
    </section>
  );
};

export default ServicesExtended;
