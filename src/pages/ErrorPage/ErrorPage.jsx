import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ErrorPage.css';

const ErrorPage = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  return (
    <div className="error-page">
      <div className="error-content">
        <h1>404</h1>
        <h2>Página no encontrada</h2>
        <p>Lo sentimos, la página que buscas no existe o ha sido movida.</p>
        <button className="error-button" onClick={goToHome}>
          Volver a la página principal
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;