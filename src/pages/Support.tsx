import { Box, Typography, Button } from "@mui/material";
import SupportImg from "../assets/support.jpg";
import { useNavigate } from "react-router-dom";

export default function Support() {
  const navigate = useNavigate();

   const goToSubscriptionPlans = () => {
     navigate("/subscription-plans");
   };
  return (
    <>
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
        <Box
          component="img"
          src={SupportImg}
          alt="Customer Support"
          sx={{
            flex: 1,
            width: "100%",
            maxWidth: 500,
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            objectFit: "cover",
          }}
        />
      </Box>

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
          sx={{ mb: 4, fontSize: { xs: "1rem", md: "2rem" } }}
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
