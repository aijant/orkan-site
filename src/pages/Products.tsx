import { Box, Typography, Card, CardContent, Button } from "@mui/material";

const products = [
  {
    title: "Xplore ELD Device",
    desc: "Plug-and-play ELD hardware ensuring FMCSA compliance.",
    img: "https://via.placeholder.com/300x180?text=ELD+Device",
  },
  {
    title: "Xplore GPS Tracker",
    desc: "Advanced GPS tracking with real-time location updates.",
    img: "https://via.placeholder.com/300x180?text=GPS+Tracker",
  },
  {
    title: "Xplore Dashboard",
    desc: "Powerful fleet management dashboard for web and mobile.",
    img: "https://via.placeholder.com/300x180?text=Dashboard",
  },
];

export default function Products() {
  return (
    <Box sx={{ py: 8, textAlign: "center" }}>
      <Typography variant="h4" fontWeight={600} gutterBottom>
        Our Products
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
        {products.map((product, i) => (
          <Card key={i} sx={{ width: 300, p: 2 }}>
            <img
              src={product.img}
              alt={product.title}
              style={{
                width: "100%",
                height: 180,
                objectFit: "cover",
                borderRadius: 8,
              }}
            />
            <CardContent>
              <Typography variant="h6" fontWeight={600}>
                {product.title}
              </Typography>
              <Typography sx={{ mt: 1, minHeight: 50 }}>
                {product.desc}
              </Typography>
              <Button variant="outlined" sx={{ mt: 2 }}>
                Learn More
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
