import { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { motion, AnimatePresence } from "framer-motion";

const stories = [
  {
    name: "Eve Crawford",
    title: "Fleet Manager",
    text: "Orkan ELD has greatly reduced the time I used to spend on paperwork and simplified managing a fleet. It offers full insight into all the crucial data I need to successfully manage fleet operations.",
  },
  {
    name: "Michael Foster",
    title: "Operations Director",
    text: "The platform made ELD compliance effortless and gave us better control over our drivers and vehicles. Highly reliable and user-friendly.",
  },
  {
    name: "Sophia Ramirez",
    title: "Logistics Supervisor",
    text: "Real-time GPS and automated reports helped us save fuel and improve routing. Fantastic support and seamless onboarding.",
  },
];

export default function ClientStories() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % stories.length);
  const prev = () =>
    setIndex((prev) => (prev === 0 ? stories.length - 1 : prev - 1));

  return (
    <Box sx={{ py: 10, backgroundColor: "#fafafa", textAlign: "center" }}>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        Client Testimonial
      </Typography>
      <Box
        sx={{ width: 80, height: 3, mx: "auto", background: "#e53935", mb: 4 }}
      />

      <Box sx={{ position: "relative", maxWidth: 900, mx: "auto", px: 2 }}>
        <IconButton
          onClick={prev}
          sx={{
            position: "absolute",
            left: 0,
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <ChevronLeftIcon />
        </IconButton>

        <IconButton
          onClick={next}
          sx={{
            position: "absolute",
            right: 0,
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <ChevronRightIcon />
        </IconButton>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              sx={{
                maxWidth: 750,
                mx: "auto",
                fontSize: "1.15rem",
                mb: 4,
                fontStyle: "italic",
                lineHeight: 1.7,
                color: "#333",
              }}
            >
              “{stories[index].text}”
            </Typography>

            <Typography fontWeight={600}>{stories[index].name}</Typography>
            <Typography color="text.secondary" fontStyle="italic">
              {stories[index].title}
            </Typography>
          </motion.div>
        </AnimatePresence>

        {/* Pagination */}
        <Typography mt={4} fontSize="0.9rem" color="text.secondary">
          {index + 1} / {stories.length}
        </Typography>
      </Box>
    </Box>
  );
}
