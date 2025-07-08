import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";
import logo from "../image/logo.png";

const Header = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Blog", path: "/Blog" },
    { label: "Services", path: "/Services" },
    { label: "Contact Us", path: "/Contect" },
  ];

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        backgroundColor: "#000",
        height: "100vh",
        color: "#fff",
        p: 3,
      }}
    >
      <Typography variant="h5" sx={{ my: 2, fontWeight: 700 }}>
        Carfix
      </Typography>
      <List>
        {navLinks.map((item) => (
          <ListItem
            button
            key={item.label}
            component={Link}
            to={item.path}
            sx={{
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#1a1a1a",
                transform: "translateX(5px)",
              },
            }}
          >
            <ListItemText
              primary={item.label}
              primaryTypographyProps={{
                sx: {
                  color: location.pathname === item.path ? "#d90429" : "#fff",
                  fontSize: "1rem",
                  fontWeight: 500,
                  textAlign: "left",
                  transition: "color 0.3s ease",
                },
              }}
            />
          </ListItem>
        ))}
      </List>

      <Button
        variant="outlined"
        sx={{
          mt: 3,
          border: "1px solid #d90429",
          borderRadius: "10px",
          color: "#fff",
          fontWeight: "700",
          width: "100%",
          transition: "all 0.3s ease",
          "&:hover": {
            backgroundColor: "#d90429",
            color: "#fff",
            transform: "scale(1.05)",
          },
        }}
        component={Link}
        to="/Appointment"
      >
        Book An Appointment
      </Button>
    </Box>
  );

  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: { xs: 1.5, md: 2 },
        }}
      >
        {/* Logo & Brand */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <img
            src={logo}
            alt="logo"
            style={{
              width: "50px",
              height: "50px",
              objectFit: "contain",
            }}
          />
          <Typography
            variant="h5"
            sx={{
              fontFamily: "initial",
              color: "white",
              fontWeight: "bold",
              fontSize: { xs: "1.4rem", sm: "1.7rem", md: "2rem" },
            }}
          >
            <span style={{ color: "red" }}>C</span>arfix
          </Typography>
        </Box>

        {/* Desktop Navigation */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 4,
            alignItems: "center",
          }}
        >
          {navLinks.map((item) => (
            <Box
              key={item.label}
              sx={{
                position: "relative",
                "&:after": {
                  content: '""',
                  position: "absolute",
                  bottom: -2,
                  left: 0,
                  width: location.pathname === item.path ? "100%" : "0%",
                  height: "2px",
                  backgroundColor: "#d90429",
                  transition: "width 0.3s ease",
                },
                "&:hover:after": {
                  width: "100%",
                },
              }}
            >
              <Link
                to={item.path}
                style={{
                  textDecoration: "none",
                  color:
                    location.pathname === item.path ? "#d90429" : "#fff",
                  fontSize: "17px",
                  fontWeight: 500,
                  transition: "all 0.3s ease",
                }}
              >
                {item.label}
              </Link>
            </Box>
          ))}

          <Button
            variant="outlined"
            component={Link}
            to="/Appointment"
            sx={{
              border: "1px solid #d90429",
              borderRadius: "10px",
              color: "#fff",
              fontWeight: "700",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#d90429",
                color: "#fff",
                transform: "scale(1.05)",
              },
            }}
          >
            Book An Appointment
          </Button>
        </Box>

        {/* Mobile Hamburger */}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerToggle}
          sx={{ display: { md: "none" }, color: "#fff" }}
        >
          <MenuIcon sx={{ fontSize: "2rem" }} />
        </IconButton>
      </Box>
      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            width: "75%",
            maxWidth: "320px",
            backgroundColor: "#121212",
          },
        }}
      >
        {drawer}
      </Drawer>
    </Container>
  );
};

export default Header;
