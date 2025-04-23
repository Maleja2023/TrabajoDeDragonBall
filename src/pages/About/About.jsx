import React from "react";
import { Box, Typography, Container } from "@mui/material";
import PowerCard from "../../components/PowerCard/PowerCard";
import sceneImg from "../../assets/scene.png";
import Me from "../../assets/me.png";
import "./About.css";

const About = () => {
  const aboutInfo = {
    name: "Mayerli Alejandra Murcia",
    image: Me,
    ki: "Infinito",
    email: "mayerl.murcia@udla.edu.co",
    phone: "3106501377",
    description:
      "Esta aplicación fue desarrollada por Mayerli Alejandra Murcia, estudiante de Ingeniería en Sistemas de la Universidad de la Amazonia y credora de esta aplicación web.",
    originPlanet: {
      image: sceneImg,
    },
  };

  return (
    <Box className="about-container">
      <Box className="about-content">
        <Box className="about-card-container">
          <PowerCard character={aboutInfo} />
        </Box>
        <Typography variant="body1" className="about-description">
          Esta aplicación fue desarrollada por Mayerli Alejandra Murcia, estudiante de
          Ingeniería en Sistemas de la Universidad de la Amazonia y credora de
          esta aplicación web.
        </Typography>
        <Typography variant="body1" className="about-contact">
          Contacto
          <br />
          Correo: {aboutInfo.email}
          <br />
          Celular: {aboutInfo.phone}
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
