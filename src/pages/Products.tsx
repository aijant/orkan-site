import { Box, Typography, Card, CardMedia, CardContent } from "@mui/material";
import { useState } from "react";
import GpsImg from "../assets/gps.jpg";
import EldImg from "../assets/eld.jpg";

const products = [
  {
    title: "GPS Devices – Feature-packed GPS fleet tracking",
    desc: "Live and historical GPS tracking, Geofence, and GPS reports",
    img: GpsImg,
  },
  {
    title:
      "ELD Devices – FMSCA-registered device fully compliant with the ELD mandate",
    desc: "Stay compliant and connected with our certified ELD devices.",
    img: EldImg,
  },
];

export default function Products() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <Box
      sx={{
        backgroundColor: "#e53935",
        color: "#fff",
        textAlign: "center",
        py: 10,
        px: 4,
      }}
    >
      <Typography
        variant="h3"
        fontWeight={700}
        sx={{ mb: 2, fontSize: { xs: "1.8rem", md: "2.5rem" } }}
      >
        All the necessary features few clicks away
      </Typography>
      <Typography
        variant="body1"
        sx={{
          maxWidth: 800,
          mx: "auto",
          lineHeight: 1.6,
          fontSize: "1.1rem",
          mb: 6,
        }}
      >
        Everything you need for the seamless running of your fleet. Our software
        is easy to set up, and even easier to use! Your managers will be able to
        focus on improving your business, while your drivers can focus on
        driving.
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 4,
        }}
      >
        {products.map((p, i) => (
          <Card
            key={i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            sx={{
              position: "relative",
              width: { xs: "100%", sm: "45%", md: "40%" },
            
              overflow: "hidden",
              cursor: "pointer",
              boxShadow: 5,
              transition: "transform 0.3s ease",
              transform: hovered === i ? "scale(1.03)" : "scale(1)",
            }}
          >
            {/* Product Image */}
            <CardMedia
              component="img"
              src={p.img}
              alt={p.title}
              sx={{
                height: 300,
                objectFit: "cover",
                transition: "all 0.4s ease",
              }}
            />

            {/* Gradient Overlay */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background:
                  hovered === i
                    ? "linear-gradient(to top, rgba(229,57,53,0.9), rgba(229,57,53,0.4))"
                    : "transparent",
                transition: "background 0.4s ease",
              }}
            />

            {/* Text */}
            <CardContent
              sx={{
                position: "absolute",
                bottom: hovered === i ? 40 : 20,
                left: 30,
                right: 30,
                color: "#fff",
                zIndex: 2,
                transition: "all 0.3s ease",
              }}
            >
              <Typography variant="h8" fontWeight={700}>
                {p.title}
              </Typography>
              {hovered === i && (
                <Typography
                  variant="body1"
                  sx={{
                    mt: 1,
                    opacity: hovered === i ? 1 : 0,
                    transition: "opacity 0.3s ease",
                  }}
                >
                  {p.desc}
                </Typography>
              )}
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
