import React from "react";
import { useParams } from "react-router-dom";
import "./InfoPage.css";
import catImage from "../../images/cat-image.jpg";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../theme";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import * as catsApi from "../../utils/catsApi";
import Icons from "../Icons/Icons";
import Preloader from "../Preloader/Preloader";

function InfoPage({ onBookClick, onCardEditClick, onCardDeleteClick }) {
  const { id } = useParams();
  const [card, setCard] = React.useState({});

  const [isLoading, setIsLoading] = React.useState(true);

  // прелоадер
  React.useEffect(() => {
    const loadingTimeout = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(loadingTimeout);
  }, []);

  React.useEffect(() => {
    catsApi.getCat(id)
      .then((cat) => {
        setCard(cat);
      })
      .catch((err) =>
        console.log(`Ошибка получения информации о котике \n${err}`)
      );
  }, [card]);

  function handleBookClick() {
    onBookClick(card);
  }

  return (
    <section className="info-page">
      {isLoading ? (
        <Preloader />
      ) : (
        <div className="info-page__container">
          <img
            className="info-page__image"
            alt={card ? card.name : "Имя"}
            src={card.image != null ? card.image : catImage}
          />
          <div className="info-page__main">
            <p className="info-page__title">{card.nameCat}</p>
            <p className="info-page__price">{card.price} рублей / час</p>
            <ThemeProvider theme={theme}>
              <Button variant="contained" color={card.isBooked ? "secondary" : "primary"} size="small" onClick={handleBookClick} sx={{mt: 1, mb: 1}}>{card.isBooked ? "Снять бронь" : "Бронировать"}</Button>
            </ThemeProvider>
            <Link className="info-page__link" to="/">
              &larr; Вернуться назад
            </Link>
          </div>

          <div className="info-page__details">
            <p className="info-page__subtitle">Характеристики котика</p>
            <div className="info-page__detail-container">
              <p className="info-page__details-name">Цвет:&nbsp;</p>
              <p className="info-page__details-value">{card.color}</p>
            </div>

            <div className="info-page__detail-container">
              <p className="info-page__details-name">Возраст:&nbsp;</p>
              <p className="info-page__details-value">{card.age}</p>
            </div>

            <div className="info-page__detail-container">
              <p className="info-page__details-name">Порода:&nbsp;</p>
              <p className="info-page__details-value">
                {card.breed !== undefined
                  ? card.breed.nameBreed
                  : card.nameBreed}
              </p>
            </div>
          </div>
          <Icons
            onCardEditClick={onCardEditClick}
            onCardDeleteClick={onCardDeleteClick}
            card={card}
          />
        </div>
      )}
    </section>
  );
}

export default InfoPage;