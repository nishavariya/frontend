import React from "react";
import { Box, Container, Typography, keyframes } from "@mui/material";
import image9 from "../image/img9.jpg";
import Button from "@mui/material/Button";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import image3 from "../image/img3.jpg";
import about1 from "../image/about1.jpg";
import about2 from "../image/about2.jpg";
import about3 from "../image/about3.jpg";
import about4 from "../image/about4.jpg";
import about5 from "../image/about5.jpg";
import about6 from "../image/about6.jpg";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GroupsIcon from "@mui/icons-material/Groups";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import HandshakeIcon from "@mui/icons-material/Handshake";
import { Link } from "react-router-dom";
import Top from "../Component/Top"

const fadeUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const scaleUp = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.05);
  }
`;


const aboutSections = [
  {
    id: "aboutCompany",
    title: "About Company",
    heading: "We are qualified & of experience in this field.",
    description:
      "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet.",
    image: image3,
    reverse: false,
  },
  {
    id: "whoWeAre",
    title: "Who We Are",
    heading: "Quality and performance",
    description:
      "Sed ut perspiciatis unde omnis iste natus ut perspiciatis unde omnis iste natus ut perspiciatis unde iste natus.",
    image: about1,
    reverse: true,
  },
];

const pulseColor = keyframes`
  0%, 100% {
    color: #d90429;
    box-shadow: 0 0 5px rgba(217, 4, 41, 0.6);
  }
  50% {
    color: #ff5151;
    box-shadow: 0 0 15px rgba(255, 81, 81, 0.9);
  }
`;
const fadeInShadowSlideUp = keyframes`
  0% {
    box-shadow: none;
    transform: translateY(10px);
    opacity: 0.7;
  }
  100% {
    box-shadow: 0 10px 20px rgba(119, 55, 66, 0.4);
    transform: translateY(0);
    opacity: 1;
  }
`;

const About = () => {
  return (

    <Box
      sx={{
        backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.6) 90%, rgba(0, 0, 0, 0.2) 100%), url(${image9})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: { xs: "25vh", md: "30vh" },
        width: "100%",
        minHeight: { xs: "180px", sm: "220px", md: "280px" },


      }}
    >
      <Header />
      <Top />


      <Typography
        variant="h3"
        sx={{
          color: "white",
          textAlign: "center",
          padding: "60px 0",
          fontWeight: "bold",
          textShadow: "1px 1px 4px rgba(0,0,0,0.4)",
          animation: `${fadeUp} 1s ease forwards`,
        }}
      >
        About Us
      </Typography>

      {/* 1 & 2 sections with fadeUp animation */}
      {aboutSections.map((section, index) => (
        <Box
          key={section.id}
          sx={{ width: "100%", padding: index === 0 ? "80px 0 0 0" : "60px 0" }}
        >
          <Container>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                flexDirection: {
                  xs: "column",
                  md: section.reverse ? "row-reverse" : "row",
                },
              }}
            >
              <Box
                sx={{
                  width: { xs: "100%", md: "calc(50% - 30px)" },
                  margin: "15px",
                  animation: `${fadeUp} 1s ease forwards`,
                  transition: "transform 0.3s ease",
                  "&:hover img": {
                    animation: `${scaleUp} 0.3s forwards`,
                    transformOrigin: "center",
                    cursor: "pointer",
                  },
                }}
              >
                <img
                  src={section.image}
                  alt={section.title}
                  style={{ width: "100%", height: "100%", borderRadius: "10px" }}
                />
              </Box>
              <Box
                sx={{
                  width: { xs: "100%", md: "calc(50% - 30px)" },
                  margin: "15px",
                  alignSelf: "center",
                  animation: `${fadeUp} 1s ease forwards`,
                }}
              >
                <Typography sx={{ color: "red" }}>{section.title}</Typography>
                <Typography variant="h3" sx={{ fontWeight: 700, mt: 1 }}>
                  {section.heading}
                </Typography>
                <Typography sx={{ color: "gray", marginTop: "20px" }}>
                  {section.description}
                </Typography>
                <Button
                  component={Link}
                  to="/aboutdetail"
                  state={{ section: section.id }}
                  sx={{
                    backgroundColor: "#d90429",
                    padding: "10px 25px",
                    marginTop: "40px",
                    "&:hover": {
                      backgroundColor: "#b40321",
                      transform: "scale(1.05)",
                    },
                    transition: "all 0.3s ease",
                  }}
                  variant="contained"
                >
                  Read More
                </Button>
              </Box>
            </Box>
          </Container>
        </Box>
      ))}

      {/* 3rd section */}
      <Box sx={{ width: "100%", padding: "60px 0 60px 0", background: "rgb(244, 241, 248)" }}>
        <Container>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: { xs: "100%", md: "calc(50% - 30px)" },
                margin: "15px 0",
                animation: `${fadeUp} 1s ease forwards`,
                "& img": {
                  borderRadius: "10px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    animation: `${fadeInShadowSlideUp} 0.4s forwards`,
                  },
                },
              }}
            >
              <img src={about2} alt="image" style={{ width: "100%", height: "100%" }} />
            </Box>
            <Box
              sx={{
                width: { xs: "100%", md: "calc(50% - 30px)" },
                margin: "15px",
                alignSelf: "center",
                animation: `${fadeUp} 1s ease forwards`,
              }}
            >
              <Typography sx={{ color: "red" }}>Reable Features</Typography>
              <Typography variant="h3" sx={{ fontWeight: 550 }}>
                All our technicians are equipped with the latest portable technology
              </Typography>
              <Typography sx={{ color: "gray", marginTop: "15px" }}>
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ipsum suspendisse
                ultrices gravida risus commodo viverra maecenas accumsan lacus vel facilisis.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>


      {/* 4th section */}
      <Box sx={{ width: "100%", padding: "50px 0" }}>
        <Container>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {[
              {
                icon: <GroupsIcon sx={{ fontSize: "50px" }} />,
                title: "Brake fluid exchange",
                desc: "We are a friendly and professional group of people.",
                state: "brakeFluid",
              },
              {
                icon: <FavoriteBorderIcon sx={{ fontSize: "50px" }} />,
                title: "Wheel alignment",
                desc: "We handle a wide range of car services and alignment",
                state: "wheelAlignment",
              },
              {
                icon: <HandshakeIcon sx={{ fontSize: "50px" }} />,
                title: "Maintenance packages",
                desc: "Same day service for most repairs and maintenance.",
                state: "maintenancePackages",
              },
            ].map(({ icon, title, desc, state }) => (
              <Box
                key={title}
                sx={{
                  width: { xs: "100%", sm: "calc(50% - 20px)", md: "calc(33.33% - 20px)" },
                  margin: "10px",
                  animation: `${fadeUp} 1s ease forwards`,
                  textAlign: "center",
                }}
              >
                <Typography
                  sx={{
                    width: "80px",
                    height: "80px",
                    backgroundColor: "rgb(255, 219, 219)",
                    borderRadius: "100%",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "red",
                    lineHeight: 1,
                    fontSize: "50px",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      animation: `${pulseColor} 1.2s infinite ease-in-out`,
                      transform: "scale(1.1)",
                      cursor: "pointer",
                    },
                  }}
                >
                  {icon}
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 640, margin: "10px 0" }}>
                  {title}
                </Typography>
                <Typography sx={{ color: "#40434c", fontWeight: 300 }}>{desc}</Typography>
                <Link to="/aboutdetail" state={{ section: state }} style={{ textDecoration: "none" }}>
                  <Button
                    sx={{
                      backgroundColor: "#d90429",
                      padding: "10px 25px",
                      marginTop: "30px",
                      "&:hover": {
                        backgroundColor: "#b40321",
                        transform: "scale(1.05)",
                      },
                      transition: "all 0.3s ease",
                    }}
                    variant="contained"
                  >
                    Read More
                  </Button>
                </Link>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
      {/* 5th section - Technicians */}
      <Box sx={{ width: "100%", padding: "50px 0" }}>
        <Container>
          <Typography sx={{ color: "red", textAlign: "center" }}>Our Technicians</Typography>
          <Typography variant="h3" sx={{ fontWeight: "bold", textAlign: "center" }}>
            Meet Our Leadership
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: { xs: 2, md: 3 },
            }}
          >
            {[
              { img: about3, name: "Dan Jones", role: "Technician" },
              { img: about4, name: "Zara Conner", role: "Technician" },
              { img: about5, name: "John Chater", role: "Technician" },
              { img: about6, name: "June Smith", role: "Technician" },
            ].map(({ img, name, role }) => (
              <Box
                key={name}
                sx={{
                  width: { xs: "100%", sm: "calc(50% - 20px)", md: "calc(25% - 20px)" },
                  margin: "10px 0",
                  animation: `${fadeUp} 1s ease forwards`,
                }}
              >
                <Box
                  sx={{
                    overflow: "hidden",
                    borderRadius: "10px",
                    "& img": {
                      width: "100%",
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.05)",
                        cursor: "pointer",
                      },
                    },
                  }}
                >
                  <img src={img} alt={name} />
                </Box>
                <Typography sx={{ fontWeight: 600, mt: 1 }}>{name}</Typography>
                <Typography sx={{ fontSize: "14px" }}>{role}</Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    mt: 1,
                    gap: 1,
                  }}
                >
                  {[FacebookIcon, TwitterIcon].map((IconComp, idx) => (
                    <Box
                      key={idx}
                      sx={{
                        width: "38px",
                        height: "38px",
                        backgroundColor: "rgb(67, 73, 88)",
                        borderRadius: "50%",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        transition: "transform 0.3s ease, background-color 0.3s ease",
                        "&:hover": {
                          animation: `${pulseColor} 1.2s infinite ease-in-out`,
                          backgroundColor: "rgb(90, 96, 115)",
                          transform: "scale(1.1)",
                        },
                      }}
                    >
                      <IconComp />
                    </Box>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default About;
