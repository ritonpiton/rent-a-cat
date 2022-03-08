import React from "react";
import "./Main.css";
import Cards from "../Cards/Cards";
import Filter from "../Filter/Filter";
import Preloader from "../Preloader/Preloader";
import { Route, Switch } from 'react-router-dom';
import InfoPage from '../InfoPage/InfoPage';

function Main({ cards, onSelectItem, onCardClick, onCardEditClick, onCardDeleteClick, onBookClick, selectedCard }) {
  const [isLoading, setIsLoading] = React.useState(true);

  // прелоадер
  React.useEffect(() => {
    const loadingTimeout = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <main className="main">
      <Filter onSelectItem={onSelectItem} />
      {isLoading ? (
        <Preloader />
      ) : (
        <Switch>
          <Route exact path={'/'}>
            <Cards cards={cards} onCardClick={onCardClick} onCardEditClick={onCardEditClick} onCardDeleteClick={onCardDeleteClick} onBookClick={onBookClick}/>
          </Route>
          <Route path={`/cats/:id`}>
            <InfoPage card={selectedCard} onBookClick={onBookClick} isOnInfoPage={true}/>
          </Route>
        </Switch>
      )}
    </main>
  );
}

export default Main;
