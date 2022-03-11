import React from 'react';
import './EditCatPopup.css';
import EditCatForm from '../EditCatForm/EditCatForm';

function EditCatPopup({ breeds, isOpen, onClose, onAddCat, onEditCat, isOnEditPage, selectedCard }) {
  return(
    <section className={`popup ${isOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <button type="button" className={'popup__close-btn'} onClick={onClose}></button>
        <p className="popup__title">{`${isOnEditPage ? "Редактирование котика" : "Форма добавления котика"}`}</p>
        <EditCatForm breeds={breeds} onAddCat={onAddCat} onEditCat={onEditCat} isOnEditPage={isOnEditPage} selectedCard={selectedCard}/>
      </div>
    </section>
  );
}

export default EditCatPopup;