import React from 'react';
import './Card.css'
import { IconButton } from '@mui/material';
import AboutCatForm from '../AboutCatForm/AboutCatForm';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function Card({card, link, onCardClick, onCardEditClick, onCardDeleteClick, onBookClick }) {

  function handleEditClick() {
    onCardEditClick(card);
  }

  function handleDeleteClick() {
    onCardDeleteClick(card);
  }

  return(
      <div className={'card'}>
        <AboutCatForm link={link} card={card} onCardClick={onCardClick} onBookClick={onBookClick} />
        <IconButton aria-label="delete" sx={{position: 'absolute', right: '15px', bottom: '15px'}} onClick={handleDeleteClick}>
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="edit" sx={{position: 'absolute', right: '60px', bottom: '15px'}} onClick={handleEditClick}>
          <EditIcon />
        </IconButton>
      </div>

  )
}

export default Card;