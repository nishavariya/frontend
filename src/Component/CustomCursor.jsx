import React, { useEffect } from "react";
import { Box, GlobalStyles } from "@mui/material";
import { gsap } from "gsap";

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const follower = document.querySelector(".cursor-follower");

    let posX = 0,
      posY = 0;
    let mouseX = 0,
      mouseY = 0;

    gsap.to({}, {
      duration: 0.016,
      repeat: -1,
      onRepeat: () => {
        posX += (mouseX - posX) / 9;
        posY += (mouseY - posY) / 9;

        gsap.set(follower, {
          css: {
            left: posX - 12,
            top: posY - 12,
          },
        });

        gsap.set(cursor, {
          css: {
            left: mouseX,
            top: mouseY,
          },
        });
      },
    });

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseEnter = () => {
      cursor.classList.add("active");
      follower.classList.add("active");
    };

    const handleMouseLeave = () => {
      cursor.classList.remove("active");
      follower.classList.remove("active");
    };

    document.addEventListener("mousemove", handleMouseMove);

    const links = document.querySelectorAll("a, button, .link");
    links.forEach((link) => {
      link.addEventListener("mouseenter", handleMouseEnter);
      link.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleMouseEnter);
        link.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Hide default system cursor globally */}
      <GlobalStyles styles={{ "*": { cursor: "none" }, body: { cursor: "none" } }} />

      {/* Small red dot */}
      <Box
        className="cursor"
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          backgroundColor: "red",
          pointerEvents: "none",
          zIndex: 10000,
          transform: "scale(1)",
          transition:
            "0.3s cubic-bezier(0.75, -1.27, 0.3, 2.33) transform, 0.2s cubic-bezier(0.75, -0.27, 0.3, 1.33) opacity",
          "&.active": {
            opacity: 0.5,
            transform: "scale(0)",
          },
        }}
      />

      {/* Large fading follower */}
      <Box
        className="cursor-follower"
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          backgroundColor: "rgba(255, 0, 0, 0.3)",
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate(5px, 5px)",
          transition:
            "0.6s cubic-bezier(0.75, -1.27, 0.3, 2.33) transform, 0.2s cubic-bezier(0.75, -0.27, 0.3, 1.33) opacity",
          "&.active": {
            opacity: 0.7,
            transform: "scale(3)",
          },
        }}
      />
    </>
  );
};

export default CustomCursor;
