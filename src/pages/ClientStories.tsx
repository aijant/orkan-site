import { Box, Typography, Paper, Avatar } from "@mui/material";

const stories = [
  {
    name: "John Miller",
    company: "Miller Transport",
    text: "Since switching to Xplore ELD, our compliance and reporting have never been easier.",
  },
  {
    name: "Sarah Lopez",
    company: "Lopez Logistics",
    text: "The GPS tracking system helped us cut idle times by 20%. Highly recommend!",
  },
  {
    name: "Raj Patel",
    company: "Patel Freight Co.",
    text: "Xplore’s dashboard gives us total visibility over our fleet operations in real time.",
  },
];

export default function ClientStories() {
  return (
    <Box sx={{ py: 8, textAlign: "center" }}>
      <Typography variant="h4" fontWeight={600} gutterBottom>
        Client Stories
      </Typography>
      <Typography sx={{ maxWidth: 600, mx: "auto", mt: 2 }}>
        Hear how businesses improved their operations with Xplore ELD.
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
        {stories.map((story, i) => (
          <Paper
            key={i}
            sx={{
              width: 300,
              p: 4,
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}
            elevation={3}
          >
            <Avatar sx={{ width: 56, height: 56 }}>{story.name[0]}</Avatar>
            <Typography variant="h6">{story.name}</Typography>
            <Typography variant="subtitle2" color="text.secondary">
              {story.company}
            </Typography>
            <Typography sx={{ mt: 1, fontStyle: "italic" }}>
              “{story.text}”
            </Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}
