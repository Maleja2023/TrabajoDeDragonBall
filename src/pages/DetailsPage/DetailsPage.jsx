import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Typography, Paper, List, ListItem, ListItemText } from "@mui/material";
import PowerCard from "../../components/PowerCard/PowerCard";
import scene from "../../assets/scene.png";
import "./DetailsPage.css";

const DetailsPage = () => {
  const [character, setCharacter] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await fetch(
          `https://dragonball-api.com/api/characters/${id}`
        );
        const data = await response.json();
        setCharacter(data);
      } catch (error) {
        console.error("Error fetching character:", error);
      }
    };
    fetchCharacter();
  }, [id]);

  if (!character) return <Typography>Cargando...</Typography>;

  return (
    <div
      className="character-background"
      style={{
        backgroundImage: `url(${character.originPlanet.image})`,
      }}
    >
      <div className="character-container">
        <div className="dark-overlay">
          <PowerCard character={character} />
        </div>
        <div className="dark-overlay"></div>
        <div className="dark-overlay">
          <Paper elevation={3} sx={{ 
            p: 3, 
            mb: 2,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            color: 'white',
            borderRadius: '25px'
          }}>
            <Typography variant="h4" gutterBottom>
              {character.name}
            </Typography>
            <Typography variant="body1" paragraph>
              {character.description}
            </Typography>
            <List dense>
              <ListItem>
                <ListItemText 
                  primary={<Typography className="text-bold" sx={{ color: 'white' }}>Raza</Typography>}
                  secondary={<Typography sx={{ color: 'white !important' }}>{character.race}</Typography>}
                />
              </ListItem>
              <ListItem>
                <ListItemText 
                  primary={<Typography className="text-bold" sx={{ color: 'white' }}>Poder de pelea</Typography>}
                  secondary={<Typography sx={{ color: 'white !important' }}>{`${character.ki} / ${character.maxKi}`}</Typography>}
                />
              </ListItem>
              <ListItem>
                <ListItemText 
                  primary={<Typography className="text-bold" sx={{ color: 'white' }}>Planeta de origen</Typography>}
                  secondary={<Typography sx={{ color: 'white !important' }}>{character.originPlanet.name}</Typography>}
                />
              </ListItem>
              <ListItem>
                <ListItemText 
                  primary={<Typography className="text-bold" sx={{ color: 'white' }}>Afiliación</Typography>}
                  secondary={<Typography sx={{ color: 'white !important' }}>{character.affiliation}</Typography>}
                />
              </ListItem>
            </List>
          </Paper>
        </div>
      </div>
      <div className="dark-overlay"></div>

      {character.transformations && character.transformations.length > 0 && (
        <div
          style={{
            backgroundImage: `url(${scene})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="dark-overlay">
            <Paper
              elevation={3}
              className="transformations-paper"
              sx={{
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                color: 'white',
                p: 3,
                borderRadius: '25px'
              }}
            >
              <Typography
                variant="h5"
                gutterBottom
                className="transformations-title"
                sx={{ color: 'white' }}
              >
                Transformaciones
              </Typography>
              <div className="transformations-grid">
                {character.transformations.map((transform, index) => (
                  <PowerCard
                    key={index}
                    character={{
                      ...character,
                      name: transform.name,
                      image: transform.image,
                      ki: transform.ki,
                      maxKi: transform.ki,
                    }}
                  />
                ))}
              </div>
            </Paper>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsPage;
