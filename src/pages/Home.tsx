import { Box, Typography, Button, Container } from "@mui/material";
import { Solutions } from "./Solutions";
import { Contact } from "./Contact";
import Products from "./Products";
import ClientStories from "./ClientStories";
import { Pricing } from "./Pricing";
import Support from "./Support";

export const Home = () => (
  <Box sx={{ textAlign: "center", py: 10 }}>
    <Container maxWidth="md">
      <Typography variant="h3" fontWeight={700} color="primary.main" mb={2}>
        Reliable ELD & GPS Tracking
      </Typography>
      <Typography variant="h6" mb={4}>
        Manage your fleet effortlessly and stay compliant.
      </Typography>
      <Button variant="contained" color="secondary" size="large">
        Request a Demo
      </Button>
        </Container>
        <Solutions />
        <Products />
        <Pricing />
        <ClientStories />
        <Support/>
        <Contact/>
  </Box>
);
