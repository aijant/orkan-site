import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqs = [
  {
    question: "How do I install my ELD device?",
    answer:
      "Simply plug the ELD device into your vehicle’s diagnostic port (usually under the steering wheel). Then, pair it with the Xplore mobile app.",
  },
  {
    question: "How do I access my reports?",
    answer:
      "Login to the Xplore Dashboard using your account credentials. Go to ‘Reports’ in the sidebar to view or download compliance, fuel, or trip reports.",
  },
  {
    question: "What if my device stops working?",
    answer:
      "Check your connection first. If the device still doesn’t respond, contact our support team — we’ll replace it if necessary.",
  },
  {
    question: "Is there a mobile app for drivers?",
    answer:
      "Yes. The Xplore Driver App is available for both iOS and Android. It syncs automatically with your ELD device.",
  },
];

export default function Support() {
  return (
    <Box sx={{ py: 8, textAlign: "center" }}>
      <Typography variant="h4" fontWeight={600} gutterBottom>
        Support Center
      </Typography>
      <Typography sx={{ maxWidth: 600, mx: "auto", mt: 2 }}>
        Find answers to common questions or contact our team for help.
      </Typography>

      <Box
        sx={{
          mt: 6,
          maxWidth: 700,
          mx: "auto",
          textAlign: "left",
        }}
      >
        {faqs.map((faq, i) => (
          <Accordion key={i} sx={{ mb: 2 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle1" fontWeight={600}>
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="text.secondary">{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

      <Box sx={{ mt: 6 }}>
        <Typography variant="h6" gutterBottom>
          Still have questions?
        </Typography>
        <Button variant="contained" size="large" href="/contact">
          Contact Support
        </Button>
      </Box>
    </Box>
  );
}
