import React, { useState, useEffect } from "react";
import CardSelecter from "../../components/CardSelecter/CardSelecter";
import { useNavigate } from "react-router-dom";
import balls from "../../assets/balls.png";
import "./HomePage.css";

const HomePage = ({ filter }) => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  
  const handleCardClick = (id) => {
    navigate(`/personaje/${id}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Construir la URL con los filtros si existen
        let url = "https://dragonball-api.com/api/characters";
        if (filter) {
          url += `?gender=${filter}`;
        }
        
        const response = await fetch(url);
        const result = await response.json();
        // Verificar si la respuesta tiene la propiedad 'items' o es un array directamente
        setData(Array.isArray(result) ? result : result.items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [filter]); // Agregamos filter como dependencia

  return (
    <div className="homepage-container">
      <div className="header-container">
        <img 
          src={balls} 
          alt="Dragon Balls"
          className="dragon-balls-image"
        />
        <h1 className="app-title">
          Dragon Ball App
        </h1>
      </div>
      <div className="card-container">
        {data &&
          data.map((item) => (
            <CardSelecter
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              onClick={handleCardClick}
              race={item.race}
            />
          ))}
      </div>
    </div>
  );
};

export default HomePage;
