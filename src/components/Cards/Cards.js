import React from "react";
import "./Cards.css";
import Card from "../Card/Card";

function Cards({ cards, onCardClick, onCardEditClick, onCardDeleteClick, onBookClick }) {
  return (
    <section className="cards">
      {cards.map((item) => {
        return (
          <Card
            key={item.id}
            card={item}
            link={`/cats/${item.id}`}
            onCardClick={onCardClick}
            onCardEditClick={onCardEditClick}
            onCardDeleteClick={onCardDeleteClick}
            onBookClick={onBookClick}
          />
        );
      })}
    </section>
  );
}

export default Cards;