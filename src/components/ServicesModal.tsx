import React from "react";
import { HashLink } from "react-router-hash-link";
import { CardInterface } from "../types";
interface Props {
  card: CardInterface;
  setOpenModal: (value: boolean) => void;
}
export const ServicesModal = ({ card, setOpenModal }: Props) => {
  function perzonalize_message(card_title: string, phone: string): string {
    let res: string = "";

    let dog: string = "🐶";
    let plane: string = "🛫";
    let fingeprints: string = "🐾";
    let to_bath: string = "🛁";
    let house: string = "🏠";

    // THE KEYS CORRESPOND TO CARD.TITLE
    let dictionary_services: Map<string, string> = new Map();
    dictionary_services.set(
      "Clínica",
      "Me enteré que tiene el mejor servicio en clínica veterinaria ¿Me dan más información?" +
        dog +
        fingeprints
    );
    dictionary_services.set(
      "Grooming",
      "Quiero agasajar a mi mascota en su área de grooming ¿Me dan más información?" +
        to_bath +
        dog
    );
    dictionary_services.set(
      "Hospedaje",
      "Deseo un lugar seguro para mi mascota mientras no estoy con él/ella ¿Me dan más información sobre los servicios de hospedaje?" +
        dog +
        house
    );
    dictionary_services.set(
      "Traslado",
      "¡Mi mascota se va de viaje! ¿Cómo funciona sus servicios de translado?" +
        plane +
        dog +
        fingeprints
    );
    // dictionary_services.set('ChipID','Estoy interesado en asegurar a mi mascota ¿Cómo funciona su servicio de implantaciónde chips?');
    // dictionary_services.set('Laboratorio en Línea','Quiero realizar una consulta sobre un examen que ya realizé');

    // GREETINGS ACCORDING TO THE TIME
    let today: Date = new Date();
    let time: Number = today.getHours();

    if (0 <= time && time < 12) {
      res = "Buenos dias Family Pets. ";
    } else if (12 <= time && time < 18) {
      res = "Buenas tardes Family Pets. ";
    } else {
      res = "Buenas noches Family Pets. ";
    }

    // CUSTOMIZE ACCORDING TO THE SERVICE (DEPENDS ON THE CARD TITLE)
    if (dictionary_services.has(card_title)) {
      res = res + dictionary_services.get(card.title);
    } else {
      res =
        "Me gustaria saber mucho más sobre sus servicios. BUSCA EMOJI FELIZ";
    }

    return "https://api.whatsapp.com/send?phone=" + phone + "&text=" + res;
  }

  function sendWsp() {
    return window.open(perzonalize_message(card.title, "51993485130"));
  }

  return (
    <div className="servicesmodal__background">
      <div className="servicesmodal">
        <div className="servicesmodal__nav">
          <span
            className="servicesmodal__icon material-symbols-outlined"
            style={{ color: card.color }}
          >
            {card.icon}
          </span>
          <p className="servicesmodal__title">{card.title}</p>
          <span
            className="servicesmodal__icon servicesmodal__icon-close material-symbols-outlined"
            onClick={() => setOpenModal(false)}
          >
            close
          </span>
        </div>
        <p className="servicesmodal__text">{card.description}</p>
        <p className="servicesmodal__subtitle">El servicio incluye:</p>
        <div className="servicesmodal__subservices-container">
          {card.subservices?.map((service) => (
            <div
              className="servicesmodal__subservices"
              style={{ border: `2px solid ${card.color}`, color: card.color }}
              key={service}
            >
              <p>{service}</p>
            </div>
          ))}
        </div>
        <button onClick={sendWsp} className="servicesmodal__button">
          CONTACTAR
        </button>
      </div>
    </div>
  );
};
