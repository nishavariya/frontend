import React, { useState } from "react";
import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import detailImage from "../image/home.jpg";
import Footer from "../Component/Footer";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BuildIcon from "@mui/icons-material/Build";
import VerifiedIcon from "@mui/icons-material/Verified";
import HandymanIcon from "@mui/icons-material/Handyman";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { keyframes } from "@emotion/react";


const shineAnim = keyframes`
  0% { left: -75%; }
  100% { left: 125%; }
`;

const HomeDetail = () => {
  const [hovered, setHovered] = useState(false);
  
  return (
    <Box sx={{ backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
      {/* Banner Image with Shine */}
      <Box
        sx={{
          width: "100%",
          height: { xs: "180px", sm: "240px", md: "320px" },
          position: "relative",
          overflow: "hidden",
          borderRadius: "0 0 20px 20px",
          cursor: "pointer",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Background Image */}
        <Box
          sx={{
            width: "100%",
            height: "100%",
            backgroundImage: `url(${detailImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transition: "transform 0.5s ease",
          }}
        />

        {/* Shine Effect */}
        {hovered && (
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: "-75%",
              width: "50%",
              height: "100%",
              background:
                "linear-gradient(120deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0.1) 100%)",
              transform: "skewX(-20deg)",
              animation: `${shineAnim} 1s ease-in-out forwards`,
              zIndex: 2,
            }}
          />
        )}
      </Box> 
      {/* About Section */}
      <Box sx={{ px: { xs: 2, md: 6 }, py: 6 }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
          About Carfix
        </Typography>
        <Typography sx={{ color: "gray", fontSize: "1.1rem", mb: 3 }}>
          Carfix has been delivering exceptional car repair and maintenance
          services for over 25 years. Our team of skilled professionals ensures
          top-notch service, from regular checkups to complex engine repairs.
          We take pride in our advanced diagnostic tools and expert mechanics.
        </Typography>

        {/* Bullet Points */}
        <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
          Why Choose Us?
        </Typography>
        <List>
          {[{
            icon: <VerifiedIcon color="success" />,
            text: "25+ Years of Trusted Experience"
          }, {
            icon: <BuildIcon color="primary" />,
            text: "State-of-the-art Equipment and Tools"
          }, {
            icon: <HandymanIcon color="warning" />,
            text: "Skilled & Certified Technicians"
          }, {
            icon: <CheckCircleIcon color="secondary" />,
            text: "100% Customer Satisfaction Guarantee"
          }].map((item, i) => (
            <ListItem
              key={i}
              sx={{
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "translateX(8px)",
                  backgroundColor: "#f1f1f1",
                  borderRadius: "10px"
                },
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Box>

      {/* How to Service Your Car Section */}
      <Box
        sx={{
          py: 6,
          px: { xs: 2, md: 6 },
          backgroundColor: "#0a0a0a",
          color: "#fff",
          borderRadius: 4,
          mt: 6,
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
          HOW TO SERVICE YOUR CAR
        </Typography>
        <Typography sx={{ color: "#ccc", fontSize: "1.1rem", mb: 4 }}>
          Rather than letting your services go by, take these steps to keep your car in good shape
          until you can afford a full service.
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 4,
          }}
        >
          {[
            {
              title: "01 MAKE AN APPOINTMENT",
              description:
                "Promotors has made it easy to schedule an appointment online at a location near you in a few simple steps, easy schedule for customers.",
            },
            {
              title: "02 SELECT SERVICE",
              description:
                "We specialize in car services and have more than 20 years of experience in cars. We are car guys from day one. We love and respect cars.",
            },
            {
              title: "03 CONFIRM REQUEST",
              description:
                "Has your request been confirmed? Reduce no-shows, save time, and focus on serving clients is our top criterion.",
            },
            {
              title: "04 GET YOUR CAR",
              description:
                "It is a vehicle inspection that keeps your car in a reliable, safe and fully-functioning condition based on guidelines set out by the vehicle.",
            },
          ].map((step, idx) => (
            <Box
              key={idx}
              sx={{
                p: 3,
                border: "1px solid #333",
                borderRadius: "12px",
                transition: "transform 0.3s ease, background 0.3s ease",
                "&:hover": {
                  transform: "translateY(-6px)",
                  backgroundColor: "#1a1a1a",
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: "#d90429", fontWeight: "bold", mb: 1 }}
              >
                {step.title}
              </Typography>
              <Typography sx={{ color: "#ccc" }}>{step.description}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Divider sx={{ mt: 6 }} />

      {/* Back Button */}
      <Box sx={{ textAlign: "center", mt: 4, mb: 6 }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              backgroundColor: "#d90429",
              color: "white",
              px: 3,
              py: 1.2,
              borderRadius: "8px",
              fontWeight: "bold",
              transition: "background 0.3s, transform 0.2s",
              "&:hover": {
                backgroundColor: "#b40321",
                transform: "translateY(-2px)",
              },
            }}
          >
            <ArrowBackIcon sx={{ mr: 1 }} />
            Back to Home 🏡
          </Box>
        </Link>
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default HomeDetail;
