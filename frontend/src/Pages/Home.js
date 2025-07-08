import React, { useState } from "react";
import Footer from "../Component/Footer";
import { Box, Container, Typography, Button, Modal } from "@mui/material";
import PlayArrowSharpIcon from "@mui/icons-material/PlayArrowSharp";
// import CloseIcon from "@mui/icons-material/Close";
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
// import { Link } from "react-router-dom";
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
   const images = [image4, image5, image6, image7];
  const titles = [
    "Engine Diagnostics",
    "System Service",
    "Electrical System",
    "Tire and Wheel",
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
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header />
        <Container
          maxWidth="lg"
          sx={{
            position: "relative",
            zIndex: 2,
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            px: 2,
          }}
        >
          <Typography
            component="div"
            variant="h2"
            sx={{
              fontWeight: 850,
              fontSize: {
                xs: "2rem",
                sm: "3rem",
                md: "4rem",
                lg: "5rem",
              },
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
                  gap: 2,
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
              width: "100%",
              maxWidth: 500,
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
                width: { xs: "100%", sm: "auto" },
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
              onClick={handleOpenVideo}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                mt: { xs: 1, sm: 0 },
                cursor: "pointer",
                color: "white",
                "&:hover": {
                  color: "#d90429",
                  textShadow: "0 0 2px #d90429, 0 0 2px #d90429",
                },
              }}
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
              <Typography
                variant="h6"
                sx={{ fontWeight: 400, fontSize: { xs: "1rem", sm: "1.1rem" } }}
              >
                How We Work
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      <Modal open={open} onClose={handleCloseVideo}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "90vw", sm: "80vw", md: "700px" },
            height: { xs: "40vh", sm: "50vh" },
            bgcolor: "black",
            borderRadius: 2,
            overflow: "hidden",
            outline: "none",
          }}
        >
          <video
            controls
            autoPlay
            muted
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          >
            <source src={merge} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        </Box>
      </Modal>

      {/* Responsive Text & Image Section */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
          flexDirection: { xs: "column", sm: "row" },
          px: 2,
          py: 0,
          gap: 3,
          bgcolor: "#0e0e0e",
        }}
      >
        {/* Text Box 1 */}
        <Box
          sx={{
            flex: { xs: "1 1 100%", sm: "1 1 45%", md: "1 1 30%", lg: "1 1 20%" },
            height: { xs: "100px", sm: "100px", md: "180px", lg: "250px" },
            backgroundColor: "#14151f",
            perspective: "1000px",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
              transform: "scale(1.05) rotateY(10deg) rotateX(5deg)",
              boxShadow: "0 8px 30px rgba(6, 6, 6, 0.7)",
            },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 2,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "white",
              fontWeight: 700,
              fontFamily: "'Poppins', sans-serif",
              animation: "pulseShadowBounce 5s infinite ease-in-out",
            }}
          >
            Satisfaction Guaranteed or Your Dent Back.
          </Typography>
        </Box>

        {/* Text Box 2 */}
        <Box
          sx={{
            flex: { xs: "1 1 100%", sm: "1 1 45%", md: "1 1 30%", lg: "1 1 20%" },
            height: { xs: "100px", sm: "100px", md: "180px", lg: "250px" },
            backgroundColor: "#000",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
              transform: "scale(1.05) translateY(-5px)",
              boxShadow: "0 8px 30px rgba(7, 7, 7, 0.7)",
            },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 2,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "white",
              fontWeight: 700,
              fontFamily: "'Poppins', sans-serif",
              animation: "pulseShadowBounce 5s infinite ease-in-out",
            }}
          >
            Caring For Your Car The Way You Would.
          </Typography>
        </Box>

        {/* Image Box */}
        <Box
          sx={{
            flex: { xs: "1 1 100%", sm: "1 1 100%", md: "1 1 100%", lg: "1 1 50%" },
            height: { xs: "200px", sm: "250px", md: "280px", lg: "300px" },
            overflow: "hidden",
            borderRadius: 2,
            boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
            transition: "transform 0.4s ease, box-shadow 0.4s ease",
            "&:hover": {
              transform: "scale(1.03) translateY(-5px)",
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
            }}
          />
        </Box>

        <style>{`
          @keyframes pulseShadowBounce {
            0%, 100% {
              transform: translateY(0);
              text-shadow: 0 0 5px #d90429;
            }
            50% {
              transform: translateY(-10px);
              text-shadow: 0 0 20px #d90429;
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
        backgroundColor: "#f8f9fa",
      }}
    >
      <Container>
        {/* Section Header */}
        <Typography
          sx={{
            color: "red",
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
            mb: 6,
          }}
        >
          Great Car Service
        </Typography>

        {/* Grid of Cards */}
        <Box
          sx={{
            display: "grid",
            gap: { xs: 5, sm: 5, md: 6 },
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "repeat(4, 1fr)",
            },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {images.map((img, index) => (
            <Box
              key={index}
              className="hoverCard"
              sx={{
                textAlign: "center",
                mx: "auto",
                width: 180,
                height: 180,
                borderRadius: "50%",
                position: "relative",
                transition: "all 0.4s ease",
                boxShadow: "0 0 0 rgba(0,0,0,0)",
                "&:hover": {
                  transform: "translateY(-12px) scale(1.05)",
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
                },
              }}
            >
              <Box
                sx={{
                  width: "180px",
                  height: "180px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <img
                  src={img}
                  alt={`service-${index}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.4s ease",
                  }}
                />
              </Box>

              <Typography
                variant="h6"
                sx={{
                  mt: 2,
                  fontWeight: "bold",
                  fontSize: { xs: "1rem", md: "1.2rem" },
                  color: "#111",
                  transition: "color 0.3s ease",
                }}
              >
                {titles[index]}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
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
          py: { xs: 6, sm: 8 },
          mb: 6,
        }}
      >
        <Container>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "space-between",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            {/* Left Empty Box (You can put image or content here if needed) */}
            <Box
              sx={{
                width: { xs: "100%", md: "50%" },
                mb: { xs: 4, md: 0 },
              }}
            ></Box>

            {/* Text Section */}
            <Box
              sx={{
                width: { xs: "100%", md: "50%" },
              }}
            >
              <Typography sx={{ color: "red", mb: 1 }}>Call Us</Typography>

              <Typography
                variant="h4"
                sx={{ color: "white", fontWeight: "600", mb: 2 }}
              >
                Imagine Your Car Feeling New Again
              </Typography>

              <Typography
                variant="h6"
                sx={{ color: "gray", fontSize: "18px", mb: 3 }}
              >
                Questions? Give us a call today at{" "}
                <a style={{ color: "red", textDecoration: "none" }}>
                  +(91) 955 909 8899
                </a>
              </Typography>

              {/* Buttons */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: 2,
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Button
                    onClick={() => navigate("/Services")}
                    variant="outlined"
                    sx={{
                      border: "1px solid white",
                      borderRadius: "5px",
                      px: 4,
                      py: 1.5,
                      color: "white",
                      fontWeight: "700",
                      "&:hover": {
                        backgroundColor: "white",
                        color: "red",
                      },
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
                      border: "none",
                      borderRadius: "5px",
                      px: 4,
                      py: 1.5,
                      color: "red",
                      backgroundColor: "white",
                      fontWeight: "700",
                      "&:hover": {
                        backgroundColor: "red",
                        color: "white",
                      },
                    }}
                  >
                    Contact Us
                  </Button>
                </motion.div>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};
export default Home;
