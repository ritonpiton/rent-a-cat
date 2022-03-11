import React from 'react';
import './Card.css'
import {Button, IconButton} from '@mui/material';
import catImage from '../../images/cat-image.jpg';
import {ThemeProvider} from '@mui/material/styles';
import {theme} from '../../theme';
import {Link} from 'react-router-dom';
import Icons from '../Icons/Icons';

function Card({card, link, onCardClick, onCardEditClick, onCardDeleteClick, onBookClick }) {

  function handleCardClick() {
    onCardClick(card);
  }

  function handleBookClick() {
    onBookClick(card);
  }

  return(
      <div className="card">
        <div className="card-container">
          <img className="card__image" alt={card ? card.name : "Имя"} src={card.image != null ? card.image : catImage} />
          <div className="card__main">
            <p className="card__title">{card.nameCat}</p>
            <p className="card__price">{card.price} &#8381; / час</p>
            <ThemeProvider theme={theme}>
              <Button variant="contained" color={card.isBooked ? "secondary" : "primary"} size="small" onClick={handleBookClick} sx={{mt: 1, mb: 1}}>{card.isBooked ? "Снять бронь" : "Бронировать"}</Button>
            </ThemeProvider>
            <Link className="card__link" to={link} onClick={handleCardClick}>Узнать больше &rarr;</Link>
          </div>
        </div>
        <Icons card={card} onCardEditClick={onCardEditClick} onCardDeleteClick={onCardDeleteClick}/>
      </div>
  )
}

export default Card;