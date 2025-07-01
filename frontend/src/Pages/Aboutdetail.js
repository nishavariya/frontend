import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Box, Container, Typography } from "@mui/material";
import Footer from "../Component/Footer";
import { motion } from "framer-motion";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import InfoIcon from "@mui/icons-material/Info";
import BuildIcon from "@mui/icons-material/Build";
import EngineeringIcon from "@mui/icons-material/Engineering";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import detail1 from "../image/detail1.png";
import detail2 from "../image/detail2.png";
import detail3 from "../image/detail3.png";
import image3 from "../image/img3.jpg";
import about1 from "../image/about1.jpg";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const renderImage = (src, alt) => {
  const isPng = src.endsWith(".png");

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{
        width: "100%",
        maxWidth: "450px",
        margin: "0 auto 10px auto",
        borderRadius: "16px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {isPng ? (
        <motion.img
          src={src}
          alt={alt}
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: "100%",
            display: "block",
            borderRadius: "16px",
            filter: "brightness(1.02)",
          }}
        />
      ) : (
        <img
          src={src}
          alt={alt}
          style={{
            width: "100%",
            display: "block",
            borderRadius: "16px",
            filter: "brightness(1.02)",
          }}
        />
      )}

      <motion.div
        initial={{ left: "-100%" }}
        animate={{ left: ["-100%", "150%"] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: 0,
          height: "100%",
          width: "50%",
          background:
            "linear-gradient(120deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.05) 100%)",
          transform: "skewX(-25deg)",
          zIndex: 2,
        }}
      />
    </motion.div>
  );
};

const AboutDetail = () => {
  const location = useLocation();
  const section = location.state?.section;

  const renderContent = () => {
    switch (section) {
      case "aboutCompany":
        return (
          <motion.div variants={fadeUpVariant} initial="hidden" animate="visible">
            <Typography variant="h4" textAlign="center" fontWeight="bold" mb={3}>
              <InfoIcon sx={{ mr: 1 }} />
              About Our Company
            </Typography>
            {renderImage(image3, "About Our Car Service")}
            <Typography component="ul" sx={{ color: "#555", lineHeight: 1.8, textAlign: "justify", pl: 3 }}>
              <li>At <strong>Carfix</strong>, we are dedicated to delivering world-class automotive care with unmatched precision and professionalism.</li>
              <li>Our workshops are equipped with cutting-edge technology and tools to ensure top-notch diagnosis and repairs.</li>
              <li>We take pride in offering:
                <ul>
                  <li>✅ Quick and clean oil changes using premium oils</li>
                  <li>✅ Brake pad and disc inspections with real-time diagnostics</li>
                  <li>✅ Precision tire alignment using 3D sensors</li>
                  <li>✅ Reliable battery health checks and replacements</li>
                  <li>✅ Comprehensive engine diagnostics for all major brands</li>
                  <li>✅ Comfort-enhancing AC tune-ups and servicing</li>
                </ul>
              </li>
              <li>Every customer gets a transparent quote, live service status updates, and post-service follow-up.</li>
              <li>We don’t just fix cars — we build long-term relationships with our clients.</li>
            </Typography>
          </motion.div>
        );

      case "whoWeAre":
        return (
          <motion.div variants={fadeUpVariant} initial="hidden" animate="visible">
            <Typography variant="h4" textAlign="center" fontWeight="bold" mb={3}>
              <EngineeringIcon sx={{ mr: 1 }} />
              Who We Are
            </Typography>
            {renderImage(about1, "Who We Are")}
            <Typography component="ul" sx={{ color: "#555", lineHeight: 1.8, textAlign: "justify", pl: 3 }}>
              <li>Carfix was founded by a team of auto engineers with a shared passion for performance and safety.</li>
              <li>We blend hands-on mechanical experience with modern automotive education to deliver excellence.</li>
              <li>Our mission includes:
                <ul>
                  <li>⭐ Elevating automotive service standards</li>
                  <li>⭐ Empowering customers with transparent information</li>
                  <li>⭐ Creating a stress-free service experience</li>
                </ul>
              </li>
              <li>We believe in:
                <ul>
                  <li>🛠 Ethical workmanship with integrity</li>
                  <li>🛠 Respect for every client and vehicle</li>
                  <li>🛠 Continuous improvement through training</li>
                </ul>
              </li>
              <li>Our staff is not just trained — they are certified and passionate.</li>
            </Typography>
          </motion.div>
        );

      case "brakeFluid":
        return (
          <motion.div variants={fadeUpVariant} initial="hidden" animate="visible">
            <Typography variant="h4" textAlign="center" fontWeight="bold" mb={2}>
              <BuildIcon sx={{ mr: 1 }} />
              Brake Fluid Exchange
            </Typography>
            {renderImage(detail1, "Brake Fluid")}
            <Typography sx={{ color: "#555", textAlign: "justify", lineHeight: 1.8, mb: 2 }}>
              Brake fluid plays a critical role in transferring force into pressure, making your brakes function properly. It absorbs moisture over time, lowering efficiency and increasing risk.
            </Typography>
            <Typography sx={{ color: "#555", textAlign: "justify", lineHeight: 1.8 }}>
              Our complete service includes:
              <ul>
                <li>✔ Draining old, contaminated fluid</li>
                <li>✔ Refilling with high-performance DOT-approved brake fluid</li>
                <li>✔ Bleeding the brake system to remove air bubbles</li>
              </ul>
              Benefits:
              <ul>
                <li>✅ Maintains stopping power</li>
                <li>✅ Extends brake system lifespan</li>
                <li>✅ Enhances driving safety</li>
                <li>✅ Prevents internal rust and corrosion</li>
              </ul>
            </Typography>
          </motion.div>
        );

      case "wheelAlignment":
        return (
          <motion.div variants={fadeUpVariant} initial="hidden" animate="visible">
            <Typography variant="h4" textAlign="center" fontWeight="bold" mb={2}>
              <BuildIcon sx={{ mr: 1 }} />
              Wheel Alignment
            </Typography>
            {renderImage(detail2, "Wheel Alignment")}
            <Typography sx={{ color: "#555", textAlign: "justify", lineHeight: 1.8, mb: 2 }}>
              Misaligned wheels can lead to poor handling, rapid tire wear, and reduced fuel efficiency. We ensure precise alignment using computer-guided calibration.
            </Typography>
            <Typography sx={{ color: "#555", textAlign: "justify", lineHeight: 1.8 }}>
              What we correct:
              <ul>
                <li><strong>Camber:</strong> Inward/outward tilt of tires</li>
                <li><strong>Toe:</strong> Direction tires point compared to straight ahead</li>
                <li><strong>Caster:</strong> Angle that helps steering return to center</li>
              </ul>
              Results:
              <ul>
                <li>✅ Smoother ride</li>
                <li>✅ Reduced steering effort</li>
                <li>✅ Balanced tire wear</li>
                <li>✅ Increased suspension life</li>
              </ul>
            </Typography>
          </motion.div>
        );

      case "maintenancePackages":
        return (
          <motion.div variants={fadeUpVariant} initial="hidden" animate="visible">
            <Typography variant="h4" textAlign="center" fontWeight="bold" mb={2}>
              <LocalOfferIcon sx={{ mr: 1 }} />
              Maintenance Packages
            </Typography>
            {renderImage(detail3, "Maintenance Packages")}
            <Typography sx={{ color: "#555", textAlign: "justify", lineHeight: 1.8, mb: 2 }}>
              Our packages are built to simplify car ownership with scheduled care, reliable performance, and cost-effective solutions.
            </Typography>
            <Typography sx={{ color: "#555", textAlign: "justify", lineHeight: 1.8 }}>
              Choose from:
              <ul>
                <li><strong>Basic:</strong> Oil + Air Filter + Tire Rotation</li>
                <li><strong>Standard:</strong> Basic + Brake Check + Coolant Top-Up</li>
                <li><strong>Premium:</strong> Standard + Full Diagnostic Scan + Battery Test + Wiper Check</li>
              </ul>
              Features:
              <ul>
                <li>🚗 Free pickup and drop</li>
                <li>🚗 Exclusive loyalty discounts</li>
                <li>🚗 Early warning notifications</li>
              </ul>
              Stay ahead of breakdowns and enjoy peace of mind every drive.
            </Typography>
          </motion.div>
        );

      default:
        return (
          <Typography variant="h5" textAlign="center" mt={5}>
            No detail selected.
          </Typography>
        );
    }
  };

  return (
    <Box sx={{ backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
      <Container maxWidth="md" sx={{ py: { xs: 4, sm: 6 } }}>
        {renderContent()}

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Box textAlign="center" mt={6}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  backgroundColor: "#d90429",
                  color: "white",
                  px: 4,
                  py: 1.5,
                  borderRadius: "12px",
                  fontWeight: "bold",
                  fontSize: { xs: "0.9rem", sm: "1.05rem" },
                  boxShadow: "0 5px 15px rgb(32, 31, 31)",
                  transition: "all 0.3s",
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
        </motion.div>
      </Container>
      <Footer />
    </Box>
  );
};

export default AboutDetail;
