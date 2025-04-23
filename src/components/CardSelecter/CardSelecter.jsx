import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import "./CardSelecter.css";

const CardSelecter = (props) => {
  const [showPreview, setShowPreview] = useState(false);
  const [previewSide, setPreviewSide] = useState('right');
  const filter = [
    "#903ded",
    "#f5f28b",
    "#f34e76",
    "#0d20e8",
    "#0d21e8",
    "#35a8f1",
    "#d9ff73",
    "#ff7ff8",
    "#2adbd3",
    "#f5fbf5",
  ];
  const randomColor = filter[Math.floor(Math.random() * filter.length)];

  const handleMouseEnter = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    setPreviewSide(mouseX > rect.width / 2 ? 'right' : 'left');
    setShowPreview(true);
  };

  return (
    <>
      <Card
        sx={{ width: 300, position: "relative" }}
        key={props.id}
        className="card"
        onClick={() => {
          props.onClick(props.id);
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setShowPreview(false)}
      >
        <CardMedia
          component="img"
          sx={{
            height: "90vh",
            objectFit: "cover",
            position: "relative",
            zIndex: 2000,
          }}
          image={props.image}
          alt={props.name}
          className="card-image"
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: randomColor,
            opacity: 0.3,
            mixBlendMode: "multiply",
            pointerEvents: "none",
          }}
        />
      </Card>
      {showPreview && (
        <Box
          sx={{
            position: 'fixed',
            left: previewSide === 'left' ? '20px' : 'auto',
            right: previewSide === 'right' ? '20px' : 'auto',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 9999,
            pointerEvents: 'none',
            maxHeight: '80vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
            flexDirection: previewSide === 'left' ? 'row' : 'row-reverse',
          }}
        >
          <img
            src={props.image}
            alt={props.name}
            style={{
              maxWidth: '250px',
              maxHeight: '80vh',
              width: 'auto',
              height: 'auto',
              objectFit: 'contain',
              filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.5))',
            }}
          />
          <Box
            sx={{
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              padding: 2,
              borderRadius: 2,
              color: 'white',
              maxWidth: '200px',
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
              {props.name}
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '12px' }}>
              Raza: {props.race}
            </Typography>
          </Box>
        </Box>
      )}
    </>
  );
};

export default CardSelecter;
