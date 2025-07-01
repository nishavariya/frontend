import React from 'react';
import Header from "../Component/Header";
import Footer from '../Component/Footer';
import { Box, Container, Typography, Button, Input } from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PercentIcon from '@mui/icons-material/Percent';
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import image9 from "../image/img9.jpg";
import bimg1 from "../image/bimg1.jpg";
import bimg2 from "../image/bimg2.jpg";
import bimg3 from "../image/bimg3.jpg";
import Top from "../Component/Top"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Blog = () => {
  const navigate = useNavigate();

  const blogPosts = [
    {
      id: 1,
      title: "Time To Change Your Winter Tires",
      image: bimg1,
      date: "April 25, 2015",
      category: "Belts, Steering",
      excerpt:
        "Paetos dignissim at cursus elefeind norma arcu. Pellentesque mode accumsan est...",
    },
    {
      id: 2,
      title: "Clunking Sound Under The Hood",
      image: bimg2,
      date: "April 17, 2015",
      category: "Engine, Oils",
      excerpt:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium...",
    },
    {
      id: 3,
      title: "Replacing a Timing Belt Service Cost",
      image: bimg3,
      date: "April 12, 2015",
      category: "Brakes, Heating",
      excerpt:
        "Fermentum viverra eros. Praesent neque purus, rhoncus nec nibh non, mollis sodales...",
    },
  ];

  return (
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
      <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 1 }}>
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
          Blog
        </Typography>
      </motion.div>

      <Box sx={{ width: "100%", pt: "90px" }}>
        <Container>
          <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            <Box sx={{ width: "calc(75% - 20px)", m: "10px" }}>
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                <Typography sx={{ color: "red" }}>Single Page</Typography>
                <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                  Blog Single Post
                </Typography>
              </motion.div>

              {blogPosts.map((post) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  style={{ marginTop: "24px" }}
                >
                  <motion.img
                    src={post.image}
                    alt="Blog"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                    style={{ width: "100%", borderRadius: "10px" }}
                  />
                  <Typography sx={{ color: "gray", mt: 1 }}>
                    {post.date} | By admin | In {post.category}
                  </Typography>
                  <Box sx={{ width: "100%", height: "1px", backgroundColor: "gray", my: 1 }} />
                  <Typography variant="h5" sx={{ textTransform: "uppercase", pt: 2, pb: 1 }}>
                    {post.title}
                  </Typography>
                  <Box sx={{ width: "10%", height: "2px", backgroundColor: "red", mb: 1 }} />
                  <Typography sx={{ color: "gray" }}>{post.excerpt}</Typography>

                  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                    <Button
                      onClick={() => navigate(`/Blogdetail/${post.id}`)}
                      sx={{
                        backgroundColor: "#d90429",
                        padding: "10px 25px",
                        mt: 3,
                        transition: "all 0.3s ease",
                        "&:hover": {
                          backgroundColor: "#b40321",
                        },
                      }}
                      variant="contained"
                    >
                      Read More
                    </Button>
                  </motion.div>
                </motion.div>
              ))}
            </Box>
            {/* RIGHT SIDEBAR */}
            <Box
              sx={{
                width: { xs: "100%", md: "calc(25% - 20px)" },
                m: { xs: "10px auto", md: "10px" },
                alignSelf: "flex-start",
              }}
            >
              {/* ONLINE APPOINTMENT */}
              <Box sx={{ border: "1px solid gray", borderRadius: "6px", mb: 5, pb: 3 }}>
                <Typography
                  sx={{
                    width: "80px",
                    height: "80px",
                    backgroundColor: "rgb(255, 219, 219)",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "red",
                    lineHeight: "80px",
                    margin: "25px auto",
                  }}
                >
                  <PercentIcon sx={{ fontSize: "50px" }} />
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 500, textAlign: "center" }}>
                  ONLINE APPOINTMENT
                </Typography>
                <Typography variant="h6" sx={{ color: "gray", textAlign: "center", px: 2 }}>
                  Book your appointment now and get $5 discount.
                </Typography>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Button
                    onClick={() => navigate("/Appointment")}
                    variant="contained"
                    sx={{
                      backgroundColor: "#d90429",
                      margin: "10px auto",
                      display: "block",
                      fontSize: "14px",
                      fontWeight: "bold",
                      borderRadius: "8px",
                      textTransform: "capitalize",
                      "&:hover": {
                        backgroundColor: "#b80323",
                      },
                    }}
                  >
                    MAKE APPOINTMENT
                  </Button>
                </motion.div>
              </Box>

              {/* SEARCH */}
              <Box
                sx={{
                  border: "1px solid gray",
                  borderRadius: "6px",
                  mb: 5,
                  overflow: "hidden", 
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    fontFamily: "'Poppins', sans-serif",
                    padding: "16px",
                    borderBottom: "1px solid gray",
                    backgroundColor: "#f9f9f9",
                  }}
                >
                  Search🔍
                </Typography>

                <Box sx={{ px: 2, py: 2 }}>
                  <Input
                    type="search"
                    placeholder="Search here"
                    fullWidth
                    disableUnderline
                    sx={{
                      padding: "10px 12px",
                      border: "1px solid #ccc",
                      borderRadius: "6px",
                      fontSize: "16px",
                      backgroundColor: "#fff",
                      "&::placeholder": {
                        color: "#888",
                      },
                    }}
                  />
                </Box>
              </Box>


              {/* ALL CATEGORIES */}
              <Box sx={{ border: "1px solid gray", borderRadius: "6px", mb: 5 }}>
                <Typography variant="h5" sx={{ fontWeight: 600, p: 2 }}>All Categories</Typography>
                {["All", "Repairs", "Car Tunning", "Engin Care", "Road Assistance", "Tyre Care", "Workshop"].map((item, idx) => (
                  <Box key={idx}>
                    <Typography sx={{ color: "gray", pl: 2 }}>
                      <ChevronRightIcon sx={{ color: "red", fontSize: "1rem" }} /> {item}
                    </Typography>
                    {idx !== 6 && (
                      <Box sx={{ width: "90%", height: "1px", backgroundColor: "gray", m: "12px auto" }} />
                    )}
                  </Box>
                ))}
              </Box>

              {/* POPULAR TAGS */}
              <Box sx={{ border: "1px solid gray", borderRadius: "6px", mb: 5 }}>
                <Typography variant="h5" sx={{ fontWeight: 600, p: 2 }}>Popular Tags</Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", p: 1 }}>
                  {["Car", "Engine", "Oil", "Tyre", "Brake", "Steering", "Tunning", "Road", "Assistance"].map((tag, idx) => (
                    <Button
                      key={idx}
                      sx={{
                        border: "1px solid gray",
                        color: "black",
                        margin: "5px",
                        fontSize: "0.8rem",
                      }}
                    >
                      {tag}
                    </Button>
                  ))}
                </Box>
              </Box>

              {/* TEXT WIDGET */}
              <Box sx={{ border: "1px solid gray", borderRadius: "6px", mb: 5 }}>
                <Typography variant="h5" sx={{ fontWeight: 600, p: 2 }}>Text Widget</Typography>
                <Typography sx={{ color: "gray", px: 2, pb: 2 }}>
                  Here is a text widget settings ipsum lore tora dolor sit amet velum. Maecenas est velum, gravida vehicula dolor
                </Typography>
              </Box>

              {/* RECENT POSTS */}
              <Box sx={{ border: "1px solid gray", borderRadius: "6px", mb: 5 }}>
                <Typography variant="h5" sx={{ fontWeight: 600, p: 2 }}>Recent Posts</Typography>
                {blogPosts.map((post, idx) => (
                  <Box key={idx} sx={{ display: "flex", p: 1 }}>
                    <Box sx={{ width: "40%" }}>
                      <img src={post.image} alt="post" style={{ width: "100%" }} />
                    </Box>
                    <Box sx={{ width: "60%" }}>
                      <Typography sx={{ color: "gray", fontSize: "14px", p: 1 }}>
                        {post.title}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>

              {/* ARCHIVES */}
              <Box sx={{ border: "1px solid gray", borderRadius: "6px", mb: 5 }}>
                <Typography variant="h5" sx={{ fontWeight: 600, p: 2 }}>Archives🥇</Typography>
                {["April 2015", "March 2015", "January 2015"].map((date, i) => (
                  <Box key={i}>
                    <Typography sx={{ color: "gray", pl: 2 }}>{date}</Typography>
                    <Box sx={{ width: "90%", height: "1px", backgroundColor: "gray", m: "10px auto" }} />
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Container>
        <Footer />
      </Box>
    </Box>
  );
};

export default Blog;
