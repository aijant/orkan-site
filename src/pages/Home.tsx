import { Box, Typography, Button } from "@mui/material";
import { useRef } from "react";
import { Solutions } from "./Solutions";
import { Contact } from "./Contact";
import Products from "./Products";
import ClientStories from "./ClientStories";
import { Pricing } from "./Pricing";
import Support from "./Support";
import bgImage from "../assets/truck-bg.jpg";
import run from "../assets/run.jpg";

export const Home = () => {
  const pricingRef = useRef<HTMLDivElement>(null);

  const scrollToPricing = () => {
    if (pricingRef.current) {
      pricingRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

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
        <Box sx={{ zIndex: 2, maxWidth: "900px", px: 2 }}>
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
              onClick={scrollToPricing}
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
          my: 4,
          mt: 12,
        }}
      >
        <Box
          component="img"
          src={run}
          alt="Orkan run"
          sx={{
            width: "50%",
            height: "auto",
            objectFit: "contain",
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

      <Solutions />
      <Products />

      {/* Add ref to Pricing component wrapper */}
      <Box ref={pricingRef}>
        <Pricing />
      </Box>

      <ClientStories />
      <Support />
      <Contact />
    </>
  );
};
