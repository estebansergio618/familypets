import React from "react";
import { CardInterface } from "../types";

interface Props {
  card: CardInterface;
}

const Card = ({ card }: Props) => {
  return (
    <div className="card">
      <span className="card__icon material-symbols-outlined">{card.icon}</span>
      <h2 className="card__title">{card.title}</h2>
      <div className="card__bars">
        <div className="card__bars-top" />
        <div className="card__bars-bottom" />
      </div>
      <p className="card__description">{card.description}</p>
      <button className="card__button">{card.button}</button>
    </div>
  );
};

export default Card;
