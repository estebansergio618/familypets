import React from "react";
import { CardInterface } from "../types";
interface Props {
  card: CardInterface;
  setOpenModal: (value: boolean) => void;
}
export const ServicesModal = ({ card, setOpenModal }: Props) => {
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
        <a href="/familypets#contacto">
          <button className="servicesmodal__button">CONTACTAR</button>
        </a>
      </div>
    </div>
  );
};
