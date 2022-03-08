import React from "react";
import "./AboutCatForm.css";
import catImage from '../../images/cat-image.jpg';
import { theme } from '../../theme';
import { ThemeProvider } from '@mui/material/styles';
import { Button } from '@mui/material';
import {Link} from 'react-router-dom';

function AboutCatForm({ link, card, onCardClick, onBookClick, isOnInfoPage }) {

  function handleCardClick() {
    onCardClick(card);
  }

  function handleBookClick() {
    onBookClick(card);
  }

  return (
    <div className={'about-form'}>
      <img className={'about-form__image'} alt={card ? card.name : 'Имя'} src={card.image != null ? card.image : catImage} />

      <div className={'about-form__main'}>
        <p className={'about-form__title'}>{card.nameCat}</p>
        <p className={'about-form__price'}>{card.price} рублей / час</p>
        <ThemeProvider theme={theme}>
          <Button variant="contained" color={card.isBooked ? 'secondary' : 'primary'} onClick={handleBookClick}>{card.isBooked ? 'Снять бронь' : 'Забронировать'}</Button>
        </ThemeProvider>
        <Link className={`${isOnInfoPage ? 'about-form__link_hidden' : 'about-form__link'}`} to={link} onClick={handleCardClick}>Узнать больше -></Link>
      </div>

      <div className={'about-form__details'}>
        <p  className={'about-form__subtitle'}>Характеристики котика</p>
        <div  className={'about-form__detail-container'}>
          <p className={'about-form__details-name'}>Цвет:&nbsp;</p>
          <p className={'about-form__details-value'}>{card.color}</p>
        </div>

        <div  className={'about-form__detail-container'}>
          <p className={'about-form__details-name'}>Возраст:&nbsp;</p>
          <p className={'about-form__details-value'}>{card.age}</p>
        </div>

        <div  className={'about-form__detail-container'}>
          <p className={'about-form__details-name'}>Порода:&nbsp;</p>
          <p className={'about-form__details-value'}>{card.breed.nameBreed}</p>
        </div>

      </div>
    </div>
  );
}

export default AboutCatForm;