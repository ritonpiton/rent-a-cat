import React from "react";
import "./NotFoundPage.css";
import {Link, useNavigate} from 'react-router-dom';

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__text">Страница не найдена</p>
      <Link className="link not-found__link" to={ '/'}>На главную</Link>
    </div>
  );
}

export default NotFoundPage;
