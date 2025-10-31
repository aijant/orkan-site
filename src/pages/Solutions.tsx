import { Box, Typography, Paper } from "@mui/material";

const solutions = [
  { title: "ELD Compliance", desc: "Stay FMCSA compliant with ease." },
  {
    title: "GPS Tracking",
    desc: "Real-time location tracking for your fleet.",
  },
  { title: "IFTA Reporting", desc: "Automated mileage and fuel reports." },
];

export const Solutions = () => {
  return (
    <Box sx={{ py: 8, textAlign: "center" }}>
      <Typography variant="h4" fontWeight={600} gutterBottom>
        Our Solutions
      </Typography>

      <Box
        sx={{
          mt: 6,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 4,
        }}
      >
        {solutions.map((s, i) => (
          <Paper
            key={i}
            sx={{ width: 300, p: 4, textAlign: "center", height: "100%" }}
            elevation={3}
          >
            <Typography variant="h6" fontWeight={600}>
              {s.title}
            </Typography>
            <Typography sx={{ mt: 2 }}>{s.desc}</Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};
