import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../Component/Footer";
import ser1 from "../image/ser1.jpg";
import ser2 from "../image/ser2.jpg";
import ser3 from "../image/ser3.jpg";
import ser4 from "../image/ser4.jpg";
import ser5 from "../image/ser5.jpg";
import ser6 from "../image/ser6.jpg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const shineStyle = {
  position: "absolute",
  top: 0,
  left: "-75%",
  width: "50%",
  height: "100%",
  background:
    "linear-gradient(120deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 100%)",
  transform: "skewX(-20deg)",
  animation: "shine 2s infinite",
  zIndex: 3,
};

const shineKeyframes = `
@keyframes shine {
  0% {
    left: -75%;
  }
  50% {
    left: 125%;
  }
  100% {
    left: 125%;
  }
}
`;

const serviceDetails = {
  1: {
    title: "ENGINE DIAGNOSTICS",
    image: ser1,
    highlights: [
      "Complete engine performance analysis",
      "OBD-II scan and error code interpretation",
      "Fuel system, spark, and sensor checks",
      "Expert recommendations with no-pressure consultation",
    ],
    description: `Our engine diagnostics service uses advanced computerized systems to evaluate your engine's performance, check emissions, and identify any potential problems.

Whether you're experiencing check engine lights, reduced fuel economy, or unusual noises, our tools and trained technicians can pinpoint the issue quickly.

Regular engine diagnostics help prevent small issues from turning into major repairs. We’ll provide a comprehensive report and walk you through any recommended fixes.`,
    whyChoose: `Why choose us? Our technicians are ASE-certified and use dealership-level diagnostic tools to provide you with fast, honest answers.`,
  },
  2: {
    title: "LUBE, OIL AND FILTERS",
    image: ser2,
    highlights: [
      "High-quality synthetic and conventional oil options",
      "Oil filter replacement with every oil change",
      "Lubrication of chassis and suspension components",
      "Fluid level checks and top-offs included",
    ],
    description: `Regular oil changes are one of the most important services for extending your vehicle’s life and keeping your engine running smoothly.

Our lube, oil, and filter service includes draining old engine oil, replacing the oil filter, and refilling with premium-grade oil. We also lubricate key components and check all fluid levels to ensure your car is fully road-ready.

This routine maintenance improves fuel efficiency, reduces wear on engine components, and helps prevent overheating or engine failure.`,
    whyChoose: `We only use top-rated brands and follow manufacturer specifications. Our experienced technicians ensure a quick and clean service every time, with a full vehicle check included.`,
  },
  3: {
    title: "BELTS AND HOSES",
    image: ser3,
    highlights: [
      "Inspection of serpentine belts, timing belts, and V-belts",
      "Radiator and heater hose inspection for cracks or leaks",
      "Tension testing and alignment adjustments",
      "OEM-quality replacements for long-lasting performance",
    ],
    description: `Belts and hoses may seem like minor components, but they play a major role in your vehicle's operation and reliability. From powering your alternator and A/C to circulating coolant through your engine, these parts must be in top condition to avoid breakdowns.

Our belts and hoses service includes a detailed inspection for wear, cracking, leaks, or fraying. We test tension, alignment, and connections to ensure optimal performance.

Replacing worn belts and hoses on time can prevent overheating, engine damage, and roadside emergencies.`,
    whyChoose: `Our technicians use factory-grade diagnostic tools to spot issues before they become problems. We only install high-quality parts that meet or exceed OEM standards — keeping your vehicle safe and reliable.`,
  },
  4: {
    title: "AIR CONDITIONING",
    image: ser4,
    highlights: [
      "Full system diagnostics and leak detection",
      "Refrigerant recovery and recharge (R-134a & R-1234yf)",
      "Inspection of compressors, condensers, and evaporators",
      "Cabin air filter replacement and system sanitization",
    ],
    description: `Your vehicle’s air conditioning system is essential for comfort, defogging, and air quality — especially during extreme weather. Over time, A/C systems can lose efficiency due to leaks, low refrigerant, or worn components.

Our air conditioning service includes a complete inspection of the system’s pressure, temperature, and components. We identify any leaks, check compressor performance, and recharge refrigerant as needed.

We also replace cabin air filters and clean the ventilation system to ensure you're breathing fresh, cool air every time you drive.`,
    whyChoose: `We use advanced A/C service equipment and refrigerants compatible with today’s vehicles. Whether it's a quick recharge or a full-system repair, our certified technicians deliver clean, cold air—fast.`,
  },
  5: {
    title: "BRAKE REPAIR",
    image: ser5,
    highlights: [
      "Brake pad and rotor inspection or replacement",
      "Brake fluid flush and leak checks",
      "Caliper, drum, and ABS system diagnostics",
      "OEM-quality parts for quiet and reliable braking",
    ],
    description: `Your brakes are your vehicle’s most important safety system. If you hear squealing, feel vibration, or notice longer stopping distances, it’s time to get your brakes checked.

Our brake repair service covers a full system inspection — from pads and rotors to brake lines and fluid. We measure pad thickness, check rotor condition, test caliper function, and ensure your ABS system is working properly.

Timely brake service helps prevent expensive repairs and ensures your vehicle stops safely and smoothly every time.`,
    whyChoose: `We use high-quality brake components designed to meet or exceed manufacturer standards. Our technicians ensure precise installation and testing for your peace of mind — all backed by service warranties.`,
  },
  6: {
    title: "TIRE AND WHEEL SERVICES",
    image: ser6,
    highlights: [
      "Tire inspection, rotation, balancing, and replacement",
      "Wheel alignment to improve handling and tire life",
      "Flat tire repair and emergency roadside assistance",
      "Use of advanced alignment and balancing equipment",
    ],
    description: `Proper tire and wheel maintenance is crucial for your vehicle’s safety, fuel efficiency, and smooth driving experience.

Our tire and wheel services include comprehensive tire inspections for tread wear, pressure, and damage. We perform tire rotations to ensure even wear and extend tire life. Our precision wheel balancing and alignment services optimize your vehicle’s handling and prevent premature tire wear.

Whether you need new tires, flat repair, or alignment, we use the latest technology to get you back on the road safely and confidently.`,
    whyChoose: `Our technicians are trained to work with all tire brands and vehicle types. We prioritize safety and precision, using state-of-the-art tools to deliver reliable, long-lasting results you can trust.`,
  },
};

const ServiceDetail = () => {
  const { id } = useParams();
  const service = serviceDetails[id];

  if (!service) {
    return (
      <Box>
        <Container sx={{ mt: 10 }}>
          <Typography variant="h4" align="center">
            Service Not Found
          </Typography>
        </Container>
        <Footer />
      </Box>
    );
  }

  return (
    <>
      <style>{shineKeyframes}</style>
      <Box sx={{ backgroundColor: "#f9f9f9", py: 4 }}>
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                mb: 1,
                textAlign: "center",
                color: "#d90429",
                textTransform: "uppercase",
              }}
            >
              {service.title}
            </Typography>

            {/* Star Rating */}
            <Box sx={{ textAlign: "center", mb: 3 }}>
              <Typography variant="body2" sx={{ color: "#777" }}>
                Customer Rating
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                ⭐⭐⭐⭐⭐
              </Box>
            </Box>
            
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{
              width: "70%",
              margin: "0 auto 30px auto",
              borderRadius: "12px",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
              overflow: "hidden",
              position: "relative",
              cursor: "pointer",
            }}
          >
            <img
              src={service.image}
              alt={service.title}
              style={{
                width: "100%",
                display: "block",
                borderRadius: "12px",
              }}
            />
            <div style={shineStyle}></div>
          </motion.div>

          <Typography
            variant="body1"
            sx={{ color: "#555", mb: 3, whiteSpace: "pre-line" }}
          >
            {service.description}
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
            Key Features:
          </Typography>
          <List>
            {service.highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <ListItem sx={{ pl: 0 }}>
                  <ListItemIcon>
                    <CheckCircleIcon sx={{ color: "#d90429" }} />
                  </ListItemIcon>
                  <ListItemText primary={item} />
                </ListItem>
              </motion.div>
            ))}
          </List>

          <Typography variant="body1" sx={{ color: "#444", mt: 4 }}>
            {service.whyChoose}
          </Typography>

          {/* Buttons */}
          <Box
            sx={{
              textAlign: "center",
              mt: 5,
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "center",
              gap: 2,
            }}
          >
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
                  '&:hover': {
                    backgroundColor: "#b40321",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <ArrowBackIcon sx={{ mr: 1 }} />
                Back to Home 🏡
              </Box>
            </Link>

            <Link to="/appointment" style={{ textDecoration: "none" }}>
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  backgroundColor: "#0077cc",
                  color: "white",
                  px: 3,
                  py: 1.2,
                  borderRadius: "8px",
                  fontWeight: "bold",
                  '&:hover': {
                    backgroundColor: "#005fa3",
                    transform: "translateY(-2px)",
                  },
                }}
              >
              📝 Book Appointment
              </Box>
            </Link>
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default ServiceDetail;
