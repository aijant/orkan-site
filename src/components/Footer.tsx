import { Box, Typography } from "@mui/material";

export const Footer = () => (
  <Box
    sx={{
      bgcolor: "primary.main",
      color: "white",
      py: 3,
      mt: 8,
      textAlign: "center",
    }}
  >
    <Typography variant="body2">
      © {new Date().getFullYear()} Xplore Clone. All rights reserved.
    </Typography>
  </Box>
);
