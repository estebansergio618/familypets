import React, { useEffect, useRef } from "react";
import { CardInterface } from "../types";

interface Props {
  card: CardInterface;
}

const Card = ({ card }: Props) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // this block is for animation
    if (cardRef.current != undefined && cardRef.current != null) {
      const height = cardRef.current!.clientHeight;
      const width = cardRef.current!.clientWidth;
      const handleMove = (e: any) => {
        const xVal = e.layerX;
        const yVal = e.layerY;
        const yRotation = 20 * ((xVal - width / 2) / width);
        const xRotation = -20 * ((yVal - height / 2) / height);
        const string =
          "perspective(500px) scale(1.1) rotateX(" +
          xRotation +
          "deg) rotateY(" +
          yRotation +
          "deg)";
        cardRef.current!.style.transform = string;
      };
      cardRef.current!.addEventListener("mouseout", function () {
        cardRef.current!.style.transform =
          " perspective(500px) scale(1) rotateX(0) rotateY(0) ";
        cardRef.current!.style.transition = "all 3s ease-out";
      });
      cardRef.current!.addEventListener("mouseover", function () {
        cardRef.current!.style.transform =
          "perspective(500px) scale(0.9) rotateX(0) rotateY(0)";
        cardRef.current!.style.transition = "all 0s ease-out";
      });
      cardRef.current!.addEventListener("hover", function () {
        cardRef.current!.style.transform =
          "perspective(500px) scale(1.1) rotateX(0) rotateY(0)";
        cardRef.current!.style.transition = "all 0s ease-out";
      });
      cardRef.current!.addEventListener("mousemove", handleMove);
    }
  }, []);

  return card.mini ? (
    <div className="card--mini" ref={cardRef}>
      <span className="card--mini__icon material-symbols-outlined">
        {card.icon}
      </span>
      <div className="card--mini-right">
        <h4 className="card--mini__title">{card.title}</h4>
        <p className="card--mini__description">{card.description}</p>
        <button className="card--mini__button">{card.button}</button>
      </div>
    </div>
  ) : (
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
