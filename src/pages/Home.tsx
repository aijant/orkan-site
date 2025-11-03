import React, { useRef, useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { keyframes } from "@mui/system";
import { useNavigate, useLocation } from "react-router-dom";

import { Solutions } from "./Solutions";
import { Contact } from "./Contact";
import Products from "./Products";
import ClientStories from "./ClientStories";
import { Pricing } from "./Pricing";
import Support from "./Support";

import bgImage from "../assets/truck-bg.jpg";
import run from "../assets/run.jpg";

const slideInFromBottom = keyframes`
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideInFromRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 200);
      }
    }
  }, [location]);

  const goToPricing = () => navigate("/pricing");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Box
        sx={{
          height: "100vh",
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "#fff",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            zIndex: 1,
          }}
        />

        <Box
          sx={{
            zIndex: 2,
            maxWidth: "900px",
            px: 2,
            opacity: 0,
            transform: "translateY(40px)",
            animation: `${slideInFromBottom} 1.2s ease-out 0.2s forwards`,
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 700,
              mb: 3,
              fontSize: { xs: "2rem", sm: "2.8rem", md: "3.2rem" },
            }}
          >
            No road is unknown with <br />
            <Box component="span" color="#fff">
              Orkan ELD
            </Box>
          </Typography>

          <Typography
            variant="h6"
            sx={{
              mb: 4,
              lineHeight: 1.6,
              color: "#f0f0f0",
              fontSize: { xs: "1rem", sm: "1.2rem" },
            }}
          >
            Orkan ELD is a straightforward fleet management solution offering
            everything you need to run your fleet smoothly and efficiently. Our
            software comes with ELD Compliance, GPS Tracking, IFTA Reporting,
            and Electronic DVIR. Join thousands of satisfied clients and start
            ORKANING TODAY!
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "center", gap: 3 }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#cf2e2e",
                color: "#fff",
                px: 4,
                py: 1.5,
                fontWeight: 600,
                "&:hover": { backgroundColor: "#b92929" },
              }}
              onClick={goToPricing}
            >
              GET PRICING
            </Button>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#cf2e2e",
                color: "#fff",
                px: 4,
                py: 1.5,
                fontWeight: 600,
                "&:hover": { backgroundColor: "#b92929" },
              }}
              onClick={() =>
                window.scrollTo({
                  top: document.body.scrollHeight,
                  behavior: "smooth",
                })
              }
            >
              REQUEST A DEMO
            </Button>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          my: 4,
          mt: 12,
          overflow: "hidden",
        }}
      >
        <Box
          ref={imgRef}
          component="img"
          src={run}
          alt="Orkan run"
          sx={{
            width: { xs: "80%", md: "50%" },
            height: "auto",
            objectFit: "contain",
            opacity: 0,
            transform: "translateX(100px)",
            animation: isVisible
              ? `${slideInFromRight} 1.2s ease-out forwards`
              : "none",
          }}
        />
      </Box>

      <Box
        sx={{
          textAlign: "center",
          py: { xs: 6, md: 4 },
          px: 2,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            mb: 2,
            fontSize: { xs: "2rem", md: "2.8rem" },
          }}
        >
          All-in-one ELD solution
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            gap: { xs: 6, md: 12 },
            mb: 6,
          }}
        >
          <Box>
            <Box sx={{ fontSize: "60px", color: "#cf2e2e", mb: 2 }}>🗺️</Box>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
              GPS Devices
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 500, mb: 1 }}>
              Stay up-to-date with the location of your vehicles
            </Typography>
            <Typography sx={{ color: "#555" }}>
              Real-time updates, Location History, Geofence, and GPS Reports.
            </Typography>
          </Box>

          <Box>
            <Box sx={{ fontSize: "60px", color: "#cf2e2e", mb: 2 }}>💡</Box>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
              ELD Device
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 500, mb: 1 }}>
              Stay fully compliant with the ELD mandate
            </Typography>
            <Typography sx={{ color: "#555" }}>
              FMCSA-approved device compatible with any vehicle type.
            </Typography>
          </Box>
        </Box>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#cf2e2e",
            color: "#fff",
            fontSize: "1.1rem",
            px: 5,
            py: 1.8,
            fontWeight: 600,
            "&:hover": { backgroundColor: "#b92929" },
          }}
          onClick={() =>
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: "smooth",
            })
          }
        >
          REQUEST A DEMO
        </Button>
      </Box>

      <Box id="solutions-section">
        <Solutions />
      </Box>
      <Box id="stories-section">
        <ClientStories />
      </Box>
      <Box id="products-section">
        <Products />
      </Box>
      <Box id="support-section">
        <Support />
      </Box>
      <Contact />
    </>
  );
};
