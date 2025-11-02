import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
  Link,
} from "@mui/material";

const products = [
  "ELD Compliance",
  "GPS Tracking",
  "Dashcam",
  "Dispatch",
  "Tablets",
  "IFTA Reporting",
];

const fleetSizes = ["1–4", "5–19", "20–50", "51–99", "100+"];

export const Pricing = () => {
  const [step, setStep] = useState(1);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [selectedFleetSize, setSelectedFleetSize] = useState<string | null>(
    null
  );

  // Contact form values
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    agree: false,
  });

  const handleProductSelect = (item: string) =>
    setSelectedItems((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );

  const handleFleetSelect = (size: string) => setSelectedFleetSize(size);

  const handleInput = (e: any) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleCheckbox = (e: any) =>
    setForm({ ...form, agree: e.target.checked });

  const handleSubmit = () => {
    console.log({
      selectedProducts: selectedItems,
      fleetSize: selectedFleetSize,
      form,
    });

    alert("Form submitted!");
  };

  // ✅ STEP 3 — Contact Form
  if (step === 3) {
    const isValid =
      form.name &&
      form.company &&
      form.email &&
      form.phone &&
      form.message &&
      form.agree;

    return (
      <Box sx={{ py: 6,mt: 7, px: { xs: 2, md: 8 }, maxWidth: "1200px", mx: "auto" }}>
        <Typography variant="h4" fontWeight={700} textAlign="center" >
          Tell us how we can reach you
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 3,
            mt: 4,
            mb: 3,
          }}
        >
          <TextField
            name="name"
            label="Name*"
            value={form.name}
            onChange={handleInput}
            fullWidth
          />
          <TextField
            name="company"
            label="Company*"
            value={form.company}
            onChange={handleInput}
            fullWidth
          />
          <TextField
            name="email"
            label="Email Address*"
            value={form.email}
            onChange={handleInput}
            fullWidth
          />
          <TextField
            name="phone"
            label="Phone Number*"
            value={form.phone}
            onChange={handleInput}
            fullWidth
          />
        </Box>

        <TextField
          name="message"
          label="Your Message*"
          value={form.message}
          onChange={handleInput}
          fullWidth
          multiline
          rows={6}
          sx={{ mb: 2 }}
        />

        <FormControlLabel
          control={<Checkbox checked={form.agree} onChange={handleCheckbox} />}
          label={
            <>
              I accept the{" "}
              <Link href="#" color="error">
                Terms & Conditions
              </Link>{" "}
              and{" "}
              <Link href="#" color="error">
                Privacy Policy
              </Link>
              . I agree to receive emails, calls, or other related promotional
              messages.
            </>
          }
        />

        <Box textAlign="center" mt={3}>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#cf2e2e", px: 6, py: 1.5, mb: 2 }}
            disabled={!isValid}
            onClick={handleSubmit}
          >
            SUBMIT
          </Button>

          <br />

          <Button
            variant="outlined"
            sx={{ px: 6, py: 1.2 }}
            onClick={() => setStep(2)}
          >
            Back
          </Button>
        </Box>
      </Box>
    );
  }

  // ✅ STEP 2 — Fleet size selection
  if (step === 2) {
    return (
      <Box textAlign="center" sx={{ py: 10 }}>
        <Typography variant="h4" fontWeight={700} sx={{ mb: 8 }}>
          Awesome. How many vehicles or assets do you operate?
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 4,
            maxWidth: "1100px",
            mx: "auto",
            mb: 8,
          }}
        >
          {fleetSizes.map((size) => {
            const isSelected = selectedFleetSize === size;

            return (
              <Box
                key={size}
                onClick={() => handleFleetSelect(size)}
                sx={{
                  width: { xs: "90%", sm: "30%" },
                  height: 140,
                  borderRadius: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: isSelected ? "#cf2e2e" : "#f5f5f5",
                  color: isSelected ? "#fff" : "#333",
                  fontSize: "1.25rem",
                  fontWeight: 500,
                  cursor: "pointer",
                  transition: "all .3s",
                  "&:hover": {
                    transform: "scale(1.02)",
                    backgroundColor: isSelected ? "#b92424" : "#eaeaea",
                  },
                }}
              >
                {size}
              </Box>
            );
          })}
        </Box>

        <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
          <Button variant="outlined" sx={{ px: 5 }} onClick={() => setStep(1)}>
            Back
          </Button>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#cf2e2e", px: 5 }}
            disabled={!selectedFleetSize}
            onClick={() => setStep(3)}
          >
            Next
          </Button>
        </Box>
      </Box>
    );
  }

  // ✅ STEP 1 — Product selection
  return (
    <Box sx={{ py: 10, textAlign: "center", px: 2 }}>
      <Typography variant="h4" fontWeight={700} sx={{ mb: 8 }}>
        Which products are you interested in?
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 4,
          maxWidth: "1100px",
          mx: "auto",
          mb: 8,
        }}
      >
        {products.map((product) => {
          const isSelected = selectedItems.includes(product);
          return (
            <Box
              key={product}
              onClick={() => handleProductSelect(product)}
              sx={{
                width: { xs: "90%", sm: "30%" },
                height: 140,
                borderRadius: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: isSelected ? "#cf2e2e" : "#f5f5f5",
                color: isSelected ? "#fff" : "#333",
                fontSize: "1.25rem",
                fontWeight: 500,
                cursor: "pointer",
                transition: ".3s",
                "&:hover": {
                  transform: "scale(1.02)",
                  backgroundColor: isSelected ? "#b92424" : "#eaeaea",
                },
              }}
            >
              {product}
            </Box>
          );
        })}
      </Box>

      <Button
        variant="contained"
        sx={{ backgroundColor: "#cf2e2e", px: 5 }}
        disabled={selectedItems.length === 0}
        onClick={() => setStep(2)}
      >
        Next
      </Button>
    </Box>
  );
};
