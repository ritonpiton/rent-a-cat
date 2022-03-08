import React from "react";
import "./InfoPage.css";
import AboutCatForm from '../AboutCatForm/AboutCatForm';

function InfoPage({ card, onBookClick, isOnInfoPage }) {
  return (
    <section className="info-page">
      <AboutCatForm card={card} onBookClick={onBookClick} isOnInfoPage={isOnInfoPage}/>
    </section>
  );
}

export default InfoPage;