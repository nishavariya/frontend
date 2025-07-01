import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  Box,
  Typography,
  Container,
  useMediaQuery,
  Divider,
} from "@mui/material";
import {
  CheckCircleOutline,
  BuildOutlined,
  WarningAmberOutlined,
  CalendarMonthOutlined,
} from "@mui/icons-material";
import bimg1 from "../image/bimg1.jpg";
import bimg2 from "../image/bimg2.jpg";
import bimg3 from "../image/bimg3.jpg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { motion } from "framer-motion";
import Footer from "../Component/Footer";

const blogData = {
  1: {
    title: "Time To Change Your Winter Tires",
    date: "April 25, 2015",
    category: "Belts, Steering",
    image: bimg1,
    intro: `Switching from winter to summer tires is essential for vehicle safety and performance when temperatures rise.`,
    points: [
      "Winter tires have softer rubber, which wears out quickly in summer heat.",
      "Summer tires improve handling and reduce braking distance on dry roads.",
      "Check tread depth and wheel alignment during the tire change.",
      "Store winter tires in a cool, dry place to extend their life.",
      "Consider rotating tires to ensure even wear before storage.",
    ],
    tips: [
      "Check tire pressure after seasonal change — temperature affects inflation.",
      "Inspect brake pads and rotors during tire change for early wear signs.",
    ],
  },
  2: {
    title: "Clunking Sound Under The Hood",
    date: "April 17, 2015",
    category: "Engine, Oils",
    image: bimg2,
    intro: `Unusual sounds under the hood can indicate underlying mechanical issues. Early inspection can prevent bigger problems.`,
    points: [
      "A clunking noise may come from a loose engine mount or damaged suspension parts.",
      "Low or dirty engine oil can increase engine noise and friction.",
      "Check for worn-out ball joints, control arms, or struts.",
      "Make sure the heat shield is tightly secured — a common noise source.",
    ],
    tips: [
      "Never ignore strange engine noises — they often signal urgent issues.",
      "Use manufacturer-recommended oil to protect engine life.",
    ],
  },
  3: {
    title: "Replacing a Timing Belt Service Cost",
    date: "April 12, 2015",
    category: "Brakes, Heating",
    image: bimg3,
    intro: `The timing belt is critical to engine function. Ignoring it can lead to total engine failure and high repair bills.`,
    points: [
      "Timing belts synchronize the crankshaft and camshaft.",
      "A snapped belt can bend engine valves and destroy pistons.",
      "Replacement costs vary between ₹5,000–₹20,000 depending on vehicle type.",
      "Most cars need timing belt replacement every 60,000–100,000 km.",
    ],
    tips: [
      "Replace water pump along with timing belt — it's often accessible during same repair.",
      "If your car uses a timing chain, it may not need frequent replacement but must still be monitored.",
    ],
  },
};

const fadeVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
    },
  }),
};

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogData[id];
  const isMobile = useMediaQuery("(max-width:600px)");

  if (!blog) {
    return (
      <Typography sx={{ padding: "80px", textAlign: "center" }}>
        Blog not found.
      </Typography>
    );
  }

  return (
    <Box sx={{ padding: { xs: "30px 20px", sm: "40px 0 0 0" }, backgroundColor: "#f9f9f9" }}>
      <Container maxWidth="md">
        <motion.div initial="hidden" animate="visible" variants={fadeVariant}>
          <Typography
            variant={isMobile ? "h5" : "h3"}
            sx={{ fontWeight: "bold", mb: 1, textAlign: "center" }}
          >
            {blog.title}
          </Typography>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={fadeVariant} custom={1}>
          <Typography sx={{ color: "gray", mb: 3, textAlign: "center", fontSize: "14px" }}>
            <CalendarMonthOutlined sx={{ fontSize: "18px", verticalAlign: "middle" }} />{" "}
            {blog.date} &nbsp;|&nbsp;
            <BuildOutlined sx={{ fontSize: "18px", verticalAlign: "middle" }} />{" "}
            {blog.category}
          </Typography>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={fadeVariant} custom={2}>
          <Box
            component="img"
            src={blog.image}
            alt={blog.title}
            sx={{
              width: "100%",
              maxWidth: "750px",
              display: "block",
              margin: "0 auto 30px auto",
              borderRadius: "12px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            }}
          />
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={fadeVariant} custom={3}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: "#333" }}>
            Overview:
          </Typography>
          <Typography sx={{ color: "#555", fontSize: "16px", mb: 3, lineHeight: 1.8 }}>
            {blog.intro}
          </Typography>
        </motion.div>

        <Divider sx={{ mb: 3 }} />

        <motion.div initial="hidden" animate="visible" variants={fadeVariant} custom={4}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: "#333" }}>
            Key Points:
          </Typography>
          <Box sx={{ pl: 1 }}>
            {blog.points.map((point, index) => (
              <motion.div key={index} custom={index + 5} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeVariant}>
                <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
                  <CheckCircleOutline sx={{ color: "#1976d2", mt: "3px", mr: 1, fontSize: "20px" }} />
                  <Typography sx={{ color: "#444", fontSize: "16px", lineHeight: 1.6 }}>
                    {point}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </Box>
        </motion.div>

        <Divider sx={{ mt: 4, mb: 3 }} />

        <motion.div initial="hidden" animate="visible" variants={fadeVariant} custom={6}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: "#333" }}>
            Expert Maintenance Tips:
          </Typography>
          <Box sx={{ pl: 1 }}>
            {blog.tips.map((tip, index) => (
              <motion.div key={index} custom={index + 10} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeVariant}>
                <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
                  <WarningAmberOutlined sx={{ color: "#ffa000", mt: "3px", mr: 1, fontSize: "20px" }} />
                  <Typography sx={{ color: "#555", fontSize: "16px", lineHeight: 1.6 }}>
                    {tip}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </Box>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={fadeVariant} custom={7}>
          <Box sx={{ textAlign: "center", mt: 4 }}>
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
          </Box>
        </motion.div>
      </Container>
      <Footer />
    </Box>
  );
};

export default BlogDetail;
