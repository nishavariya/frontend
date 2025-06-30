import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import Footer from "../Component/Footer";
import Header from "../Component/Header";
import image9 from "../image/img9.jpg";
import ser1 from "../image/ser1.jpg";
import ser2 from "../image/ser2.jpg";
import ser3 from "../image/ser3.jpg";
import ser4 from "../image/ser4.jpg";
import ser5 from "../image/ser5.jpg";
import ser6 from "../image/ser6.jpg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Top from "../Component/Top"


const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Services = () => {
  const navigate = useNavigate();

  const services = [
    { id: 1, title: "ENGINE DIAGNOSTICS", image: ser1 },
    { id: 2, title: "LUBE, OIL AND FILTERS", image: ser2 },
    { id: 3, title: "BELTS AND HOSES", image: ser3 },
    { id: 4, title: "AIR CONDITIONING", image: ser4 },
    { id: 5, title: "BRAKE REPAIR", image: ser5 },
    { id: 6, title: "TIRE AND WHEEL SERVICES", image: ser6 },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url(${image9})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: { xs: "25vh", sm: "30vh" },
          width: "100%",
          minHeight: { xs: "180px", sm: "220px", md: "280px" },


        }}
      >
        <Header />
        <Top />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 1 }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "white",
              textAlign: "center",
              py: { xs: 5, sm: 7 },
              fontWeight: "bold",
              textShadow: "1px 1px 4px rgba(0,0,0,0.4)",
              fontSize: { xs: "1.9rem", sm: "2.9rem" },
            }}
          >
            Services
          </Typography>
        </motion.div>
      </Box>

      {/* Services Section */}
      <Box sx={{ py: { xs: 5, sm: 10 } }}>
        <Container maxWidth="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <Typography
              sx={{
                color: "red",
                textAlign: "left",
                fontSize: { xs: "1rem", sm: "1.2rem" },
              }}
            >
              Our Services
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                mb: 4,
                fontSize: { xs: "1.6rem", sm: "2.2rem" },
              }}
            >
              Great Services
            </Typography>
          </motion.div>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                md: "1fr 1fr 1fr",
              },
              gap: "30px",
              justifyItems: "center",
            }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Box
                  sx={{
                    width: "100%",
                    maxWidth: "360px",
                    minWidth: { xs: "250px", sm: "280px" },
                    backgroundColor: "#fff",
                    borderRadius: "12px",
                    overflow: "hidden",
                    boxShadow: 4,
                    textAlign: "center",
                  }}
                >
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                    }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  />

                  <Box sx={{ padding: "16px" }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        fontSize: { xs: "1rem", sm: "1.2rem" },
                        marginBottom: "16px",
                        color: "#333",
                      }}
                    >
                      {service.title}
                    </Typography>

                    <motion.div whileHover={{ scale: 1.05 }}>
                      <Button
                        onClick={() => navigate(`/services/${service.id}`)}
                        variant="contained"
                        sx={{
                          backgroundColor: "#d90429",
                          px: 3,
                          py: 1,
                          fontSize: { xs: "12px", sm: "14px" },
                          fontWeight: "bold",
                          borderRadius: "8px",
                          textTransform: "capitalize",
                          width: "100%",
                          '&:hover': {
                            backgroundColor: "#b80323",
                          },
                        }}
                      >
                        Read More
                      </Button>
                    </motion.div>
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Box>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default Services;
