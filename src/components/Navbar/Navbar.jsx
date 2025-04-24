import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorEl, setAnchorEl] = useState(null);

  const handleGenderFilter = (gender) => {
    navigate(`/filter/gender/${gender}`);
    handleClose();
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { text: "Todos", onClick: () => { navigate("/"); handleClose(); } },
    { text: "Hombres", onClick: () => handleGenderFilter("Male") },
    { text: "Mujeres", onClick: () => handleGenderFilter("Female") },
    { text: "Acerca de", onClick: () => { navigate("/about"); handleClose(); } },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "purple", // Fondo morado
          boxShadow: "0 8px 16px rgba(219, 25, 122, 0.3)",
          borderBottomLeftRadius: 12,
          borderBottomRightRadius: 12,
          zIndex: 1100
        }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              Dragon Ball App
            </Link>
          </Typography>

          {isMobile ? (
            <>
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {menuItems.map((item, index) => (
                  <MenuItem key={index} onClick={item.onClick}>
                    {item.text}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <>
              <Button color="inherit" component={Link} to="/">
                Todos
              </Button>
              <Button 
                color="inherit"
                onClick={() => handleGenderFilter('Male')}
              >
                Hombres
              </Button>
              <Button 
                color="inherit"
                onClick={() => handleGenderFilter('Female')}
              >
                Mujeres
              </Button>
              <Button color="inherit" component={Link} to="/about">
                Acerca de
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;