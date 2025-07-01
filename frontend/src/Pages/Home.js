import React, { useState } from "react";
import Footer from "../Component/Footer";
import { Box, Container, Typography, Dialog, IconButton, Button, Modal } from "@mui/material";
import PlayArrowSharpIcon from "@mui/icons-material/PlayArrowSharp";
import CloseIcon from "@mui/icons-material/Close";
import image1 from "../image/img1.jpg";
import image2 from "../image/img2.jpg";
import home from "../image/home.jpg";
import image4 from "../image/img4.jpg";
import image5 from "../image/img5.jpg";
import image6 from "../image/img6.jpg";
import image7 from "../image/img7.jpg";
import image8 from "../image/img8.jpg";
import CheckIcon from "@mui/icons-material/Check";
import image9 from "../image/img9.jpg";
import Header from "../Component/Header";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Top from "../Component/Top";
import { Link } from "react-router-dom";
import merge from "../image/merged.mp4";

const lines = [
  ["We", "Are"],
  ["Qualified", "&"],
  ["Professional"],
];

const Home = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleOpenVideo = () => setOpen(true);
  const handleCloseVideo = () => setOpen(false);

  const packages = [
    {
      title: "Silver Package",
      price: "$35",
      color: "white",
      button: "Go Basic",
      slug: "silver",
    },
    {
      title: "Platinum Package",
      price: "$69",
      color: "rgb(241, 241, 255)",
      button: "Read Go Standard",
      slug: "platinum",
    },
    {
      title: "Gold Package",
      price: "$39",
      color: "white",
      button: "Go Premium",
      slug: "gold",
    },
  ];

  return (

    <Box>
      <Top />
      <Box
        sx={{
          backgroundImage: `linear-gradient(50deg, rgba(0,0,0,0.7) 10%, rgba(0,0,0,0.4) 80%), url(${image1})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "100vh",
          width: "100%",
          backgroundAttachment: "fixed",
          position: "relative",
          color: "white",
        }}
      >
        <Header />
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <Typography
            component="div"
            variant="h2"
            sx={{
              fontWeight: 850,
              pt: { xs: 10, sm: 10, md: 5 },
              fontSize: { xs: "2.5rem", sm: "4rem", md: "4.4rem", lg: "6rem" },
              lineHeight: 1.1,
              userSelect: "none",
              zIndex: 2,
            }}
          >
            {lines.map((lineWords, lineIndex) => (
              <Box
                key={lineIndex}
                sx={{
                  mb: lineIndex !== lines.length - 1 ? 1 : 0,
                  display: "flex",
                  gap: 3,
                  flexWrap: "wrap",
                }}
              >
                {lineWords.map((word, idx) => (
                  <Box
                    key={idx}
                    sx={{
                      display: "inline-block",
                      cursor: "pointer",
                      fontWeight: 900,
                      fontSize: "inherit",
                      color: "white",
                      position: "relative",
                      transition: "all 0.35s ease",
                      overflow: "hidden",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        width: "100%",
                        height: "2px",
                        bottom: 0,
                        left: 0,
                        backgroundColor: "white",
                        transform: "translateX(-100%)",
                        transition: "transform 0.35s ease",
                      },
                      "&:hover": {
                        letterSpacing: "2px",
                        transform: "translateY(-2px)",
                      },
                      "&:hover::after": {
                        transform: "translateX(0)",
                      },
                    }}
                  >
                    {word}
                  </Box>
                ))}
              </Box>
            ))}
          </Typography>

          <Box
            sx={{
              width: { xs: "100%", sm: "80%", md: "70%", lg: "60%", xl: "50%" },
              mt: 4,
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              gap: 2,
              zIndex: 2,
            }}
          >
            <Button
              onClick={() => navigate("/Appointment")}
              variant="contained"
              sx={{
                backgroundColor: "#d90429",
                px: 4,
                py: 1.5,
                fontWeight: 600,
                fontSize: "1rem",
                "&:hover": {
                  backgroundColor: "#b80322",
                  boxShadow: "0 0 15px #b80322",
                  transform: "scale(1.05)",
                },
                transition: "all 0.3s ease",
              }}
            >
              Book Now
            </Button>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                mt: { xs: 2, sm: 0 },
                cursor: "pointer",
                color: "white",
                "&:hover": {
                  color: "#d90429",
                  textShadow:
                    "0 0 0px #d90429, 0 0 2px #d90429, 0 0 2px #d90429",
                },
              }}
              onClick={handleOpenVideo}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "2px solid white",
                  padding: 1,
                  borderRadius: "50%",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#d90429",
                    borderColor: "#d90429",
                    color: "#fff",
                    boxShadow: "0 0 10px #d90429",
                    transform: "scale(1.1)",
                  },
                }}
              >
                <PlayArrowSharpIcon />
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 400 }}>
                How We Work
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Video Modal */}
      <Modal open={open} onClose={handleCloseVideo}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90%",
            maxWidth: 800,
            height: "50vh",
            bgcolor: "black",
            borderRadius: 2,
            overflow: "hidden"
          }}
        >
          <video
            controls
            autoPlay
            muted
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          >
            <source
              src={merge}
              type="video/mp4"
            />

            Your browser does not support HTML5 video.
          </video>
        </Box>
      </Modal>

      {/* 2nd section */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        {/* Text Box 1 */}
        <Box
          sx={{
            width: {
              xs: "100%",
              sm: "50%",
              md: "33.33%",
              lg: "25%",
              xl: "20%",
              xxl: "15%",
            },
            height: {
              xs: "150px",
              sm: "200px",
              md: "230px",
              lg: "270px",
              xl: "300px",
              xxl: "330px",
            },
            backgroundColor: "#14151f",
            perspective: "1000px",
            mb: { xs: 2, sm: 0 },
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            '&:hover': {
              transform: "scale(1.05) rotateY(10deg) rotateX(5deg)",
              boxShadow: "0 8px 30px rgba(6, 6, 6, 0.7)",
            },
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: "white",
              fontWeight: 700,
              fontFamily: "'Poppins', sans-serif",
              textAlign: "left",
              padding: {
                xs: "20px 20px",
                sm: "40px 30px",
                md: "60px 40px",
                lg: "80px 40px",
                xl: "90px 50px",
                xxl: "100px 60px",
              },

              animation: "pulseShadowBounce 5s infinite ease-in-out",
            }}
          >
            Satisfaction Guaranteed or Your Dent Back.
          </Typography>
        </Box>

        {/* Text Box 2 */}
        <Box
          sx={{
            width: {
              xs: "100%",
              sm: "50%",
              md: "33.33%",
              lg: "25%",
              xl: "20%",
              xxl: "15%",
            },
            height: {
              xs: "150px",
              sm: "200px",
              md: "230px",
              lg: "270px",
              xl: "300px",
              xxl: "330px",
            },
            backgroundColor: "black",
            mb: { xs: 2, sm: 0 },
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            '&:hover': {
              transform: "scale(1.05) translateY(-5px)",
              boxShadow: "0 8px 30px rgba(7, 7, 7, 0.7)",
            },
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: "white",
              fontWeight: 700,
              fontFamily: "'Poppins', sans-serif",
              textAlign: "left",
              padding: {
                xs: "20px 20px",
                sm: "40px 30px",
                md: "60px 40px",
                lg: "80px 40px",
                xl: "90px 50px",
                xxl: "100px 60px",
              },
              animation: "pulseShadowBounce 5s infinite ease-in-out",
            }}
          >
            Caring For Your Car The Way You Would.
          </Typography>
        </Box>

        {/* Image Box */}
        <Box
          sx={{
            width: {
              xs: "100%",
              sm: "100%",
              md: "33.33%",
              lg: "50%",
              xl: "60%",
              xxl: "70%",
            },
            height: {
              xs: "250px",
              sm: "250px",
              md: "270px",
              lg: "270px",
              xl: "300px",
              xxl: "330px",
            },
            overflow: "hidden",
            borderRadius: 2,
            boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
            transition: "transform 0.4s ease, box-shadow 0.4s ease",
            '&:hover': {
              transform: "scale(1) translateY(-5px)",
              boxShadow: "0 10px 40px rgba(54, 50, 51, 0.8)",
            },
          }}
        >
          <img
            src={image2}
            alt="car"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              animation: "zoomFade 8s infinite ease-in-out",
              transition: "transform 0.4s ease",
            }}
          />
        </Box>

        <style>{`
    @keyframes flipY {
      0%, 100% {
        transform: rotateY(0deg);
        color: white;
        text-shadow: 0 0 10px #d90429;
      }
      50% {
        transform: rotateY(180deg);
        color:rgb(0, 0, 0);
        text-shadow: 0 0 20px #d90429;
      }
    }
    @keyframes pulseShadowBounce {
      0%, 100% {
        transform: translateY(0);
        text-shadow: 0 0 5pxrgb(8, 8, 8);
        color: white;
      }
      50% {
        transform: translateY(-10px);
        text-shadow: 0 0 20pxrgb(10, 10, 10);
        color:rgb(255, 255, 255);
      }
    }
    @keyframes zoomFade {
      0%, 100% {
        transform: scale(1);
        opacity: 1;
      }
      50% {
        transform: scale(1.1);
        opacity: 0.8;
      }
    }
  `}</style>
      </Box>

      {/*3 section*/}
      <Box sx={{ width: "100%", py: { xs: 5, md: 7 } }}>
        <Container>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: { xs: "100%", md: "calc(50% - 30px)" },
                margin: "15px",
              }}
            >
              <img
                src={home}
                alt="home"
                style={{
                  width: "100%",
                  height: "100%",
                  maxHeight: "350px",
                  borderRadius: "10px",
                  objectFit: "cover",
                }}
              />
            </Box>

            <Box
              sx={{
                width: { xs: "100%", md: "calc(50% - 30px)" },
                margin: "15px",
                alignSelf: "center",
              }}
            >
              <Typography sx={{ color: "red" }}>Who We Are</Typography>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "1.8rem", md: "2.25rem" },
                }}
              >
                We have 25 years of experience in this field.
              </Typography>
              <Typography sx={{ color: "gray", mt: 2 }}>
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet.
              </Typography>
              <Button
                onClick={() => navigate("/homedetail", { state: { section: "mission" } })}

                sx={{
                  backgroundColor: "#d90429",
                  padding: "10px 25px",
                  mt: 4,
                  "&:hover": { backgroundColor: "#b40322" },
                }}
                variant="contained"
              >
                Read More
              </Button>


            </Box>
          </Box>
        </Container>
      </Box>

      {/* 4th section */}
      <Box
        sx={{
          width: "100%",
          py: { xs: 5, md: 12 },
          backgroundColor: "rgb(250, 250, 255)",
        }}
      >
        <Container>
          <Typography
            sx={{
              color: "#d90429",
              textAlign: "center",
              fontWeight: 600,
              fontSize: { xs: "1.1rem", md: "1.3rem" },
              mb: 1,
            }}
          >
            Why Choose Us
          </Typography>

          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              textAlign: "center",
              fontSize: { xs: "1.8rem", md: "2.5rem" },
              mb: 4,
            }}
          >
            Great Car Service
          </Typography>

          <Box
            sx={{
              display: "grid",
              gap: { xs: 3, sm: 3, md: 4 },
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                md: "repeat(4, 1fr)",
              },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {[image4, image5, image6, image7].map((img, index) => (
              <Box
                key={index}
                sx={{
                  width: { xs: "100%", sm: "100%", md: 280 },
                  maxWidth: "280px",
                  textAlign: "center",
                  cursor: "pointer",
                  position: "relative",
                  width: "180px",
                  height: "180px",
                  margin: "0 auto",
                  borderRadius: "50%",
                  overflow: "visible",
                  transition: "color 0.3s ease",
                  "&:hover img": {
                    transform: "scale(1.1)",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                  },
                  "&:hover h6": {
                    color: "#d90429",
                  },
                }}
              >
                <Box
                  className="borderRing"
                  sx={{
                    position: "absolute",
                    top: -8,
                    left: -8,
                    width: "calc(100% + 16px)",
                    height: "calc(100% + 16px)",
                    borderRadius: "50%",
                    border: "4px solid transparent",
                    borderTopColor: "#d90429",
                    borderRightColor: "#d90429",
                    animation: "rotateBorder 3s linear infinite",
                    boxShadow: "0 0 8px #d90429",
                    transition: "box-shadow 0.3s ease",
                  }}
                ></Box>

                <img
                  src={img}
                  alt={`service-${index}`}
                  style={{
                    width: "180px",
                    height: "180px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    position: "relative",
                    zIndex: 1,
                  }}
                />

                <Typography
                  variant="h6"
                  sx={{
                    mt: 2,
                    fontWeight: "bold",
                    fontSize: { xs: "1rem", md: "1.2rem" },
                    transition: "color 0.3s ease",
                    color: "black",
                  }}
                >
                  {[
                    "Engine Diagnostics",
                    "System Service",
                    "Electrical System",
                    "Tire and Wheel",
                  ][index]}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>

        <style>
          {`
      @keyframes rotateBorder {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `}
        </style>
      </Box>


      {/* 5th section */}

      <Box
        sx={{
          backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 0.1) 100%),url(${image8})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          py: 5,
        }}
      >
        <Container>
          <Typography sx={{ color: "red", textAlign: "center" }}>
            Our Organization
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 600,
              textAlign: "center",
              color: "white",
              fontSize: { xs: "1.6rem", sm: "2rem", md: "2.5rem" },
            }}
          >
            Car serving matched with great <br /> workmanship.
          </Typography>
          <Typography
            sx={{
              color: "white",
              textAlign: "center",
              fontSize: { xs: "0.95rem", sm: "1rem" },
            }}
          >
            We understand the deep connection you have with your car. That's why we treat it
            with the <br /> same level of care and attention as you do.
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {[
              { label: "Total projects", value: "65" },
              { label: "Transparency", value: "165" },
              { label: "Done projects", value: "463" },
              { label: "Get awards", value: "5063" },
            ].map((item, index) => (
              <Box
                key={index}
                sx={{
                  width: { xs: "100%", sm: "50%", md: "calc(25% - 20px)" },
                  padding: "10px",
                  textAlign: "center",
                }}
              >
                <Typography variant="h3" sx={{ color: "white", fontWeight: "bold" }}>
                  {item.value}
                </Typography>
                <Typography sx={{ color: "white" }}>{item.label}</Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* 6 Section */}
      <Box sx={{ width: "100%", py: 5 }}>
        <Container>
          <Typography sx={{ color: "red", textAlign: "center" }}>
            Best Packages
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              fontSize: { xs: "1.8rem", md: "2.5rem" },
            }}
          >
            Our Pricing Plans
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {packages.map((pkg, index) => (
              <Box
                key={index}
                sx={{
                  width: { xs: "100%", sm: "80%", md: "calc(33.33% - 40px)" },
                  margin: "20px",
                  textAlign: "center",
                  background: pkg.color,
                  boxShadow: "rgb(0 0 0 / 71%) 0px -3px 1px 0px",
                  borderRadius: "10px",
                }}
              >
                <Typography variant="h5" sx={{ paddingTop: "30px" }}>
                  {pkg.title}
                </Typography>
                <Typography
                  variant="h3"
                  sx={{ fontWeight: "bold", color: pkg.price === "$69" ? "red" : "black" }}
                >
                  {pkg.price}
                </Typography>
                <Box
                  sx={{
                    textAlign: "left",
                    margin: "30px",
                    color: "gray",
                    lineHeight: "30px",
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                  }}
                >
                  {[
                    "Conventional Oil Change",
                    "Fuel System Cleaning",
                    "Coolant Exchange",
                    "Transmission Fluid Service",
                    "Visual Brake Inspection",
                    "24/7 customer service",
                  ].map((item, i) => (
                    <Typography key={i}>
                      <CheckIcon sx={{ color: "red", fontSize: "15px" }} /> {item}
                    </Typography>
                  ))}

                  <Button
                    sx={{
                      backgroundColor: "#d90429",
                      padding: "10px 25px",
                      marginTop: "40px",
                    }}
                    variant="contained"
                    onClick={() => navigate(`/pricing/${pkg.slug}`)}
                  >
                    {pkg.button}
                  </Button>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>



      {/* 7th section */}

      <Box
        sx={{
          backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.7) 90%, rgba(0, 0, 0, 0.1) 100%),url(${image9})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
          paddingTop: "50px",
          marginBottom: "50px",
        }}
      >
        <Container>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              textAlign: "left",
            }}
          >
            <Box
              sx={{
                width: "calc(50% - 40px)",
                margin: "20px",
                textAlign: "center",
              }}
            ></Box>
            <Box
              sx={{
                width: "calc(50% - 40px)",
                margin: "20px",
                textAlign: "center",
              }}
            >
              <Typography sx={{ color: "red", textAlign: "left" }}>
                Call Us
              </Typography>
              <Typography
                variant="h3"
                sx={{ color: "white", textAlign: "left", fontWeight: "600" }}
              >
                Imagine Your Car Feeling New Again
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "gray", textAlign: "left", fontSize: "18px" }}
              >
                {" "}
                Questions? Give us a call today at{" "}
                <a style={{ color: "red" }}>+(91) 955 909 8899 </a>
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "left",
                }}
              >
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Button
                    onClick={() => navigate("/Services")}
                    variant="outlined"
                    sx={{
                      border: "1px solid rgb(255, 255, 255)",
                      borderRadius: "5px",
                      padding: "10px 30px ",
                      margin: "20px ",
                      color: "rgb(255, 255, 255)",
                      fontWeight: "700",
                      "&:hover": { backgroundColor: "white", color: "red" },
                      display: { xs: "none", sm: "block" },
                    }}

                  >
                    Our Services
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }}>
                  <Button
                    onClick={() => navigate("/Contect")}
                    variant="outlined"
                    sx={{
                      border: "0px solid rgb(255, 255, 255)",
                      borderRadius: "5px",
                      padding: "10px 30px ",
                      margin: "20px",
                      color: "rgb(255, 0, 0)",
                      backgroundColor: "white",
                      fontWeight: "700",
                      "&:hover": { backgroundColor: "red", color: "white" },
                      display: { xs: "none", sm: "block" },
                    }}
                  >
                    Contact Us
                  </Button>
                </motion.div>
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};
export default Home;
