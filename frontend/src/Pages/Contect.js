import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  InputBase,
  useMediaQuery,
  useTheme,
  Snackbar,
  Alert,
} from "@mui/material";
import Footer from "../Component/Footer";
import Header from "../Component/Header";
import image9 from "../image/img9.jpg";
import axios from "axios";
import { motion } from "framer-motion";
import Top from "../Component/Top";

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      await axios.post("https://full-stack-1-jmh6.onrender.com/api/contect", formData);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSnackbarOpen(true);
    } catch (error) {
      console.error("Error sending message", error);
      alert("Something went wrong!");
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* Header Section */}
      <Box
        sx={{
          backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.6), rgba(0,0,0,0.3)), url(${image9})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          minHeight: { xs: "180px", sm: "220px", md: "280px" },
          width: "100%",
          display: "flex",
          flexDirection: "column",
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
            variant={isMobile ? "h4" : "h3"}
            sx={{
              color: "#fff",
              textAlign: "center",
              mt: isMobile ? 6 : 10,
              fontWeight: "bold",
              textShadow: "1px 1px 4px rgba(0,0,0,0.4)",
            }}
          >
            Contact Us
          </Typography>
        </motion.div>
      </Box>

      {/* Form Section */}
      <Box sx={{ width: "100%", py: 6, backgroundColor: "#f9f9f9" }}>
        <Container maxWidth="sm">
          <Typography
            sx={{
              color: "#d90429",
              fontWeight: 600,
              fontSize: "1.1rem",
              textAlign: "center",
              mb: 1,
            }}
          >
            Get in Touch
          </Typography>

          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              mb: 4,
              color: "#333",
            }}
          >
            We'd love to hear from you
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            {["name", "email", "subject"].map((field, index) => (
              <InputBase
                key={index}
                name={field}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={formData[field]}
                onChange={handleChange}
                required
                sx={{
                  p: 1.5,
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  fontSize: "16px",
                  backgroundColor: "#fff",
                  transition: "all 0.3s ease",
                  '&:hover': {
                    borderColor: "#d90429",
                  },
                  '&:focus-within': {
                    borderColor: "#b40321",
                  },
                }}
              />
            ))}

            <Box
              component="textarea"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              required
              sx={{
                p: 1.5,
                border: "1px solid #ccc",
                borderRadius: "8px",
                fontSize: "16px",
                fontFamily: "inherit",
                resize: "vertical",
                backgroundColor: "#fff",
                transition: "all 0.3s ease",
                '&:hover': {
                  borderColor: "#d90429",
                },
                '&:focus': {
                  borderColor: "#b40321",
                },
              }}
            />

            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "#d90429",
                py: 1.5,
                fontSize: "16px",
                fontWeight: "bold",
                textTransform: "none",
                borderRadius: "8px",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#b40321",
                  transform: "scale(1.03)",
                },
              }}
            >
              Send A Message 🚀
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Snackbar for success message */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={() => setSnackbarOpen(false)} severity="success" sx={{ width: '100%' }}>
          Message sent successfully!
        </Alert>
      </Snackbar>

      <Footer />
    </>
  );
};

export default Contact;
