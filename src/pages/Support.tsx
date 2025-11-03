import React, { useRef, useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { keyframes } from "@mui/system";
import SupportImg from "../assets/support.jpg";
import { useNavigate } from "react-router-dom";

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

export default function Support() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);

  const goToSubscriptionPlans = () => {
    navigate("/subscription-plans");
  };

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
      {/* Support Section */}
      <Box
        sx={{
          backgroundColor: "#fafafa",
          py: { xs: 6, md: 10 },
          px: { xs: 3, md: 20 },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: { xs: 4, md: 8 },
        }}
      >
        {/* Text Content */}
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h4"
            fontWeight={700}
            sx={{
              mb: 3,
              fontSize: { xs: "2rem", md: "2.5rem" },
              textAlign: "left",
            }}
          >
            Customer Support
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              lineHeight: 1.8,
              fontSize: "1.1rem",
              textAlign: "left",
              maxWidth: 600,
            }}
          >
            You don’t have to navigate Orkan alone! Our customer support team is
            available 24/7 to assist you with any questions or issues that may
            arise. Having a reliable team by your side can make a big difference
            — especially for your drivers. Reach out to us to learn how we can
            help boost efficiency, increase profitability, and keep your
            business safe and compliant.
          </Typography>
        </Box>

        {/* Animated Image */}
        <Box
          component="img"
          ref={imgRef}
          src={SupportImg}
          alt="Customer Support"
          sx={{
            flex: 1,
            width: "100%",
            maxWidth: 500,
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            objectFit: "cover",
            borderRadius: 2,
            opacity: 0,
            transform: "translateX(100px)",
            animation: isVisible
              ? `${slideInFromRight} 1.2s ease-out forwards`
              : "none",
          }}
        />
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          backgroundColor: "#f63838",
          color: "#fff",
          py: { xs: 8, md: 12 },
          px: { xs: 3, md: 6 },
          textAlign: "center",
        }}
      >
        <Typography
          variant="h3"
          fontWeight={700}
          sx={{ mb: 4, fontSize: { xs: "1.6rem", md: "2rem" } }}
        >
          Transportation management solution
        </Typography>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#fff",
            color: "#f44336",
            fontWeight: 700,
            px: 4,
            py: 1.5,
            "&:hover": {
              backgroundColor: "#060101ff",
              color: "#fff",
            },
          }}
          onClick={goToSubscriptionPlans}
        >
          Find out more
        </Button>
      </Box>
    </>
  );
}
