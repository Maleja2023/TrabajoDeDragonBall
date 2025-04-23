import React from "react";
import "./PowerCard.css";
import { Card, Box, Typography, Tooltip } from "@mui/material";

const PowerCard = ({ character }) => {
  if (!character) return null;

  const powerLevel = character.ki || 9000;
  const isOver9000 = powerLevel > 9000;

  const shortDescription = character.description
    ? character.description.length > 60
      ? character.description.substring(0, 57) + "..."
      : character.description
    : `${character.name} is ready to fight!`;

  return (
    <Card className="power-card">
      <div
        className="planet-background"
        style={{
          backgroundImage: `url(${character.originPlanet?.image})`,
        }}
      />
      <Box className="power-banner">
        {isOver9000 ? "IT'S OVER 9000!!!" : `POWER LEVEL: ${powerLevel}`}
      </Box>

      <Box className="character-image-container">
        <img
          src={character.image}
          alt={character.name}
          className="character-image"
        />
      </Box>

      <Box className="power-footer">
        <Typography className="power-number">{powerLevel}</Typography>
        <Box className="dragon-ball">🔮</Box>
      </Box>

      <Tooltip title={character.description} placement="bottom" arrow>
        <Box className="description">
          <Typography>{shortDescription}</Typography>
        </Box>
      </Tooltip>
    </Card>
  );
};

export default PowerCard;
