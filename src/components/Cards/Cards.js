import React from "react";
import "./Cards.css";
import Card from "../Card/Card";
import Filter from "../Filter/Filter";
import Preloader from "../Preloader/Preloader";

function Cards({ cards, onSelectItem, onCardClick, onCardEditClick, onCardDeleteClick, onBookClick }) {

  const [isLoading, setIsLoading] = React.useState(true);

  // прелоадер
  React.useEffect(() => {
    const loadingTimeout = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(loadingTimeout);
  }, [isLoading]);

  function handleLoading(state) {
    setIsLoading(state);
  }

  return (
    <>
      <Filter onSelectItem={onSelectItem} onLoading={handleLoading} />
      {isLoading ? (
        <Preloader />
      ) : (
        <div className="cards">
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
        </div>
      )}
    </>
  );
}

export default Cards;