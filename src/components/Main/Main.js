import React from "react";
import "./Main.css";
import Cards from "../Cards/Cards";
import { Route, Routes, Navigate } from "react-router-dom";
import InfoPage from "../InfoPage/InfoPage";
import NotFoundPage from '../NotFoundPage/NotFoundPage';

function Main({ cards, onSelectItem, onCardClick, onCardEditClick, onCardDeleteClick, onBookClick }) {
  return (
    <main className="main">
      <Routes>
        <Route exact path={'/'} element={
          <Cards cards={cards} onSelectItem={onSelectItem} onCardClick={onCardClick} onCardEditClick={onCardEditClick} onCardDeleteClick={onCardDeleteClick} onBookClick={onBookClick} />} />
        <Route path={`/cats/:id`} element={
          <InfoPage onBookClick={onBookClick} onCardEditClick={onCardEditClick} onCardDeleteClick={onCardDeleteClick} />} />
        <Route path='not-found' element={<NotFoundPage />} />
        <Route path='/*' element={<Navigate to='/not-found' />} />
      </Routes>

    </main>
  );
}

export default Main;
