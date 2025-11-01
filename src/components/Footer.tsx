import { Box, Typography } from "@mui/material";

export const Footer = () => (
  <Box
    sx={{
      bgcolor: "#000",
      color: "white",
      py: 8,
      textAlign: "center",
    }}
  >
    <Typography variant="body2">
      Copyright © {new Date().getFullYear()} Orkan ELD. All rights reserved.
    </Typography>
  </Box>
);
