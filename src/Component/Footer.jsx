import React, { useState } from "react";
import { Box, Container, Typography, Button, Input } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { motion } from "framer-motion";
import axios from "axios";

// Framer Motion animations
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const hoverScale = {
  whileHover: { scale: 1.1, transition: { duration: 0.3 } },
  whileTap: { scale: 0.95 },
};

// Keyframes inline
const animatedBackgroundKeyframes = `
  @keyframes animatedFooterBG {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

// Inject keyframes into the document only once
if (!document.getElementById("animated-footer-bg-keyframes")) {
  const styleTag = document.createElement("style");
  styleTag.id = "animated-footer-bg-keyframes";
  styleTag.innerHTML = animatedBackgroundKeyframes;
  document.head.appendChild(styleTag);
}

const Footer = () => {
  const [formData, setFormData] = useState({ email: "" });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const subscribedEmails = JSON.parse(localStorage.getItem("subscribedEmails") || "[]");

    if (subscribedEmails.includes(formData.email)) {
      alert("You have already subscribed with this email.");
      return;
    }

    try {
      await axios.post("http://localhost:5000/footer", formData);
      alert("✅ Subscription successful!");
      subscribedEmails.push(formData.email);
      localStorage.setItem("subscribedEmails", JSON.stringify(subscribedEmails));
      setFormData({ email: "" });
    } catch (error) {
      console.error("Error sending message", error);
      alert("Something went wrong!");
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        py: 5,
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(-45deg, #1e1e1e, #121212, #333, #111)",
        backgroundSize: "400% 400%",
        animation: "animatedFooterBG 15s ease infinite",
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 4 } }}>
        {/* Newsletter Section */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
            justifyContent: "center",
            alignItems: "center",
            mb: 4,
          }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            style={{ flex: 1 }}
          >
            <Typography
              variant="h5"
              sx={{
                color: "white",
                fontWeight: "bold",
                fontSize: { xs: "1.2rem", sm: "1.5rem" },
              }}
            >
              Newsletter
            </Typography>
            <Typography
              sx={{
                color: "#aaa",
                mt: 1,
                fontSize: { xs: "0.8rem", sm: "1rem" },
              }}
            >
              Sign up for our monthly newsletter to get the latest news, volunteer opportunities,
            </Typography>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            style={{ flex: 1 }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: "center",
                gap: 2,
                width: "100%",
              }}
            >
              <Input
                onChange={handleChange}
                name="email"
                value={formData.email}
                type="email"
                placeholder="Enter Your Email..."
                fullWidth
                sx={{
                  p: "10px",
                  bgcolor: "white",
                  borderRadius: "6px",
                  fontSize: { xs: "0.8rem", sm: "1rem" },
                }}
                required
              />
              <motion.div {...hoverScale}>
                <Button
                  type="submit"
                  sx={{
                    px: 3,
                    py: 1.5,
                    fontSize: { xs: "0.8rem", sm: "1rem" },
                    bgcolor: "red",
                    color: "white",
                    whiteSpace: "nowrap",
                  }}
                >
                  Subscribe
                </Button>
              </motion.div>
            </Box>
          </motion.div>
        </Box>

        <Box sx={{ height: "1px", bgcolor: "#40434c", my: 3 }} />

        {/* Footer Sections */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {/* Logo and Socials */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            style={{ flex: 1, minWidth: "230px" }}
          >
            <Typography
              variant="h6"
              sx={{ color: "white", fontSize: { xs: "1.2rem", sm: "1.5rem" } }}
            >
              <span style={{ color: "red" }}>C</span>arfix
            </Typography>
            <Box sx={{ color: "white", pt: 2 }}>
              {[FacebookIcon, TwitterIcon, GoogleIcon, GitHubIcon].map((Icon, i) => (
                <motion.span
                  key={i}
                  whileHover={{
                    scale: 1.3,
                    rotate: 15,
                    color: "#ff1744",
                    transition: { type: "spring", stiffness: 300, damping: 10 },
                  }}
                  whileTap={{ scale: 0.95, rotate: 0 }}
                  style={{
                    display: "inline-block",
                    marginRight: "15px",
                    cursor: "pointer",
                    color: "white",
                  }}
                >
                  <Icon />
                </motion.span>
              ))}
            </Box>
          </motion.div>

          {/* Services */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
            style={{ flex: 1, minWidth: "230px" }}
          >
            <Typography
              variant="h6"
              sx={{ color: "white", fontSize: { xs: "1rem", sm: "1.2rem" } }}
            >
              Our Services
            </Typography>
            <Box sx={{ display: "flex", mt: 2 }}>
              <Box>
                {["About", "Services", "Car Wash", "Electrical system"].map((text, i) => (
                  <Typography key={i} sx={{ color: "#aaa", mb: 1, fontSize: "14px" }}>
                    <KeyboardDoubleArrowRightIcon sx={{ color: "white", fontSize: "1rem" }} />
                    {text}
                  </Typography>
                ))}
              </Box>
              <Box sx={{ ml: 3 }}>
                {["Tire and wheel", "Help Orphan", "Career", "Contact US"].map((text, i) => (
                  <Typography key={i} sx={{ color: "#aaa", mb: 1, fontSize: "14px" }}>
                    <KeyboardDoubleArrowRightIcon sx={{ color: "white", fontSize: "1rem" }} />
                    {text}
                  </Typography>
                ))}
              </Box>
            </Box>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            style={{ flex: 1, minWidth: "230px" }}
          >
            <Typography
              variant="h6"
              sx={{ color: "white", fontSize: { xs: "1rem", sm: "1.2rem" } }}
            >
              Contact Info
            </Typography>
            <Typography sx={{ color: "#aaa", py: 2, fontSize: "14px" }}>
              Address: A-436 Jaidham Parkway, Mountain View, CA 84043, India.
            </Typography>
            <Typography sx={{ color: "#aaa", pb: 1, fontSize: "14px" }}>
              Phone: <span style={{ color: "white" }}>+91 1600-33-999</span>
            </Typography>
            <Typography sx={{ color: "#aaa", fontSize: "14px" }}>
              Email: <span style={{ color: "white" }}>carfix@gmail.com</span>
            </Typography>
          </motion.div>
        </Box>

        <Typography color="white" align="center" paddingTop={3}>
          Developed By Nisha Variya 
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
