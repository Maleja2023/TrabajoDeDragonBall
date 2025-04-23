import { Box, Container, Typography, Link, IconButton } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "black",
        color: "white",
        py: 1,
        position: "fixed",
        bottom: 0,
        width: "100%",
        zIndex: 1000,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              flex: "1",
              minWidth: "200px",
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            <Typography variant="subtitle1" sx={{ mb: 0.5 }}>
              Dragon Ball App
            </Typography>
        
          </Box>

          <Box sx={{ flex: "1", minWidth: "200px", textAlign: "center" }}>
            
            <Typography variant="body2" sx={{ mt: 0.5, fontSize: "0.8rem" }}>
              © {new Date().getFullYear()} Dragon Ball App. Todos los derechos
              reservados.
            </Typography>
          </Box>

      
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
