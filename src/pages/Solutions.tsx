import { Box, Typography } from "@mui/material";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import LocalGasStationOutlinedIcon from "@mui/icons-material/LocalGasStationOutlined";
import { motion } from "framer-motion";

import GpsImg from "../assets/solutions-gps.jpg";
import EldImg from "../assets/solutions-eld.jpg";
import IftaImg from "../assets/solutions-ifta.jpg";
import DvirImg from "../assets/solutions-dvir.jpg";

const solutionItems = [
  {
    title: "ELD Compliance",
    desc: "Streamline ELD compliance and keep your attention on expanding your business",
    img: EldImg,
    icon: <FactCheckOutlinedIcon sx={{ fontSize: 36, color: "#fff" }} />,
    gradient: true,
  },
  {
    title: "GPS Tracking",
    desc: "View every asset in real time from a single GPS-powered dashboard",
    img: GpsImg,
    icon: <FmdGoodOutlinedIcon sx={{ fontSize: 36, color: "#fff" }} />,
    gradient: true,
  },
  {
    title: "IFTA Reporting",
    desc: "Track fuel costs accurately with detailed fuel usage calculations",
    img: IftaImg,
    icon: <LocalGasStationOutlinedIcon sx={{ fontSize: 36, color: "#fff" }} />,
    gradient: true,
  },
  {
    title: "Electronic DVIR",
    desc: "Create complete inspection reports for all your vehicles and equipment",
    img: DvirImg,
    icon: <FactCheckOutlinedIcon sx={{ fontSize: 36, color: "#fff" }} />,
    gradient: true,
  },
];

export const Solutions = () => {
  return (
    <Box sx={{ py: 10, backgroundColor: "#f4f4f4" }}>
      <Box textAlign="center" sx={{ mb: 5 }}>
        <Typography variant="h4" fontWeight="700">
          Orkan ELD Solutions
        </Typography>
        <Typography sx={{ mt: 1, maxWidth: 600, mx: "auto", color: "#555" }}>
          Grow your fleet with Orkan ELD. Get the tools you need to stay
          compliant and keep your customers satisfied.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 3,
          maxWidth: "1100px",
          mx: "auto",
          px: 2,
        }}
      >
        {solutionItems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <Box
              sx={{
                position: "relative",
                height: 330,
                borderRadius: 1.5,
                overflow: "hidden",
                cursor: "pointer",

                "&:hover .img": { transform: "scale(1.08)" },
                "&:hover .overlay": { opacity: 1 },
                "&:hover .text-box": { opacity: 1, transform: "translateY(0)" },
              }}
            >
              <Box
                component="img"
                src={item.img}
                alt={item.title}
                className="img"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform .5s ease",
                  ...(item.gradient && {
                    filter: "brightness(0.8) saturate(1.3)",
                  }),
                }}
              />
              <Box
                className="overlay"
                sx={{
                  position: "absolute",
                  inset: 0,
                  background: item.gradient
                    ? "linear-gradient(rgba(255,80,80,0.9), rgba(255,60,60,0.65))"
                    : "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.35))",
                  opacity: 0,
                  transition: "0.4s ease",
                }}
              />
              <Box
                className="text-box"
                sx={{
                  position: "absolute",
                  bottom: 25,
                  left: 25,
                  color: "#fff",
                  opacity: 0,
                  transform: "translateY(20px)",
                  transition: "0.4s ease",
                }}
              >
                {item.icon}
                <Typography variant="h6" fontWeight={600} sx={{ mt: 1 }}>
                  {item.title}
                </Typography>
                {item.desc && (
                  <Typography sx={{ mt: 1, fontSize: "0.9rem", maxWidth: 240 }}>
                    {item.desc}
                  </Typography>
                )}
              </Box>
            </Box>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};
