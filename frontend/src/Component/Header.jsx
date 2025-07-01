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
    ListItemText
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
                p: 2
            }}
        >




            <Typography variant="h5" sx={{ my: 2 }}>
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
                            }
                        }}
                    >
                        <ListItemText
                            primary={item.label}
                            primaryTypographyProps={{
                                sx: {
                                    color: location.pathname === item.path ? "#d90429" : "#fff",
                                    transition: "color 0.3s ease",
                                },
                            }}
                        />
                    </ListItem>
                ))}
            </List>

            {/* Drawer Button with scale effect */}
            <Button
                variant="outlined"
                sx={{
                    mt: 2,
                    border: "1px solid #d90429",
                    borderRadius: "10px",
                    color: "#fff",
                    fontWeight: "700",
                    transition: "all 0.3s ease",
                    transform: "scale(1)",
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
        <Container>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    py: 2,
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 1, // space between logo and text
                    }}
                >
                    <img
                        src={logo}
                        alt="logo"
                        style={{
                            width: "60px",
                            height: "60px",
                        }}
                    />
                    <Typography
                        variant="h4"
                        sx={{ fontFamily: "initial", color: "white", fontWeight: "bold" }}
                    >
                        <span style={{ color: "red" }}>C</span>arfix
                    </Typography>
                </Box>
                {/* Desktop Links */}
                <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4, alignItems: "center" }}>
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
                                }
                            }}
                        >
                            <Link
                                to={item.path}
                                style={{
                                    textDecoration: "none",
                                    color: location.pathname === item.path ? "#d90429" : "#fff",
                                    fontSize: "18px",
                                    transition: "all 0.3s ease",
                                }}
                            >
                                {item.label}
                            </Link>
                        </Box>
                    ))}
                    <Button
                        variant="outlined"
                        sx={{
                            border: "1px solid #d90429",
                            borderRadius: "10px",
                            color: "#fff",
                            fontWeight: "700",
                            transition: "all 0.3s ease",
                            transform: "scale(1)",
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

                {/* Mobile Hamburger Icon */}
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="end"
                    onClick={handleDrawerToggle}
                    sx={{ display: { md: "none" }, color: "#fff" }}
                >
                    <MenuIcon />
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
                        width: "70%",
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
