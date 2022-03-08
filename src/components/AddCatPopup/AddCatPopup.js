import React from 'react';
import './AddCatPopup.css';
import EditCatForm from '../EditCatForm/EditCatForm';

function AddCatPopup({ breeds, isOpen, onClose, onAddCat, isOnEditPage }) {
  return(
    <section className={`popup ${isOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <button type="button" className={'popup__close-btn'} onClick={onClose}></button>
        <p className="popup__title">{`${isOnEditPage ? "Редактирование котика" : "Форма добавления котика"}`}</p>
        <EditCatForm breeds={breeds} onAddCat={onAddCat} isOnEditPage={isOnEditPage}/>
      </div>
    </section>
  );
}

export default AddCatPopup;