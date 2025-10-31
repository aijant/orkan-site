import { Box, Typography, Card, CardContent, Button } from "@mui/material";

const plans = [
  { title: "Basic", price: "$19/mo", features: ["GPS Tracking", "1 Vehicle"] },
  {
    title: "Pro",
    price: "$49/mo",
    features: ["GPS + ELD", "5 Vehicles", "Reports"],
  },
  {
    title: "Enterprise",
    price: "$99/mo",
    features: ["Fleet Management", "Unlimited Vehicles"],
  },
];

export const Pricing = () => {
  return (
    <Box sx={{ py: 8, textAlign: "center" }}>
      <Typography variant="h4" fontWeight={600} gutterBottom>
        Pricing Plans
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
        {plans.map((plan, i) => (
          <Card key={i} sx={{ width: 300, p: 2, textAlign: "center" }}>
            <CardContent>
              <Typography variant="h6" fontWeight={600}>
                {plan.title}
              </Typography>
              <Typography variant="h4" color="primary" sx={{ my: 2 }}>
                {plan.price}
              </Typography>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {plan.features.map((f, i) => (
                  <li key={i}>
                    <Typography>{f}</Typography>
                  </li>
                ))}
              </ul>
              <Button variant="contained" sx={{ mt: 2 }}>
                Choose Plan
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};
