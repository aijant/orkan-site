import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

const plans = [
  {
    title: "Maintenance",
    code: "M",
    color: "#f5f5f5",
    features: [
      "DVIR",
      "Fault Codes",
      "Scorecards",
      "Mobile App (driver)",
      "Maintenance (history, schedule, ongoing)",
    ],
  },
  {
    title: "Accounting",
    code: "A",
    color: "#cf2e2e",
    textColor: "#fff",
    features: [
      "IFTA",
      "Fuel feature",
      "Reports",
      "Mileage",
      "Utilization",
      "Idling",
      "Inactivity",
      "Mobile App (driver)",
      "Scanning",
      "Documents",
    ],
  },
  {
    title: "Dispatch",
    code: "D",
    color: "#f5f5f5",
    features: [
      "Driver Ratings",
      "Load Board",
      "Live Share Link",
      "Mobile App Dispatch Mode (driver)",
      "Available Trucks",
      "Geofence",
    ],
  },
];

export const SubscriptionPlans = () => {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
    maintenance: false,
    accounting: false,
    dispatch: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleCheckbox = (name: string) => {
    setForm((prev) => ({ ...prev, [name]: !prev[name as keyof typeof prev] }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.company.trim()) newErrors.company = "Company name is required";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Please enter a valid email address";

    if (!form.maintenance && !form.accounting && !form.dispatch)
      newErrors.reason = "Please select at least one reason";

    if (!form.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;
    console.log("✅ Form Submitted:", form);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <Box
        sx={{
          minHeight: "calc(100vh - 200px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          px: 2,
          mt: 7,
        }}
      >
        <Typography variant="h4" fontWeight={700} sx={{ mb: 2 }}>
          🎉 Thank You!
        </Typography>
        <Typography variant="h6" sx={{ mb: 4 }}>
          We’ve received your message. <br /> Our team will reach out soon.
        </Typography>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#cf2e2e",
            px: 6,
            py: 1.5,
            "&:hover": { backgroundColor: "#b92424" },
          }}
          onClick={() => {
            setIsSubmitted(false);
            setShowForm(false);
            setForm({
              name: "",
              company: "",
              phone: "",
              email: "",
              message: "",
              maintenance: false,
              accounting: false,
              dispatch: false,
            });
            setErrors({});
          }}
        >
          Back to Plans
        </Button>
      </Box>
    );
  }

  if (showForm) {
    return (
      <Box
        sx={{
          py: 8,
          px: { xs: 2, md: 8 },
          maxWidth: "1000px",
          mx: "auto",
          mt: 12,
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 3,
            mb: 3,
          }}
        >
          <TextField
            placeholder="Your Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            fullWidth
            variant="filled"
            required
            error={!!errors.name}
            helperText={errors.name}
            sx={{ backgroundColor: "#f7f7f7" }}
          />
          <TextField
            placeholder="Company Name"
            name="company"
            value={form.company}
            onChange={handleChange}
            fullWidth
            variant="filled"
            required
            error={!!errors.company}
            helperText={errors.company}
            sx={{ backgroundColor: "#f7f7f7" }}
          />
          <TextField
            placeholder="Phone number"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            fullWidth
            variant="filled"
            required
            error={!!errors.phone}
            helperText={errors.phone}
            sx={{ backgroundColor: "#f7f7f7" }}
          />
          <TextField
            placeholder="Work email"
            name="email"
            value={form.email}
            onChange={handleChange}
            fullWidth
            variant="filled"
            required
            error={!!errors.email}
            helperText={errors.email}
            sx={{ backgroundColor: "#f7f7f7" }}
          />
        </Box>

        <Typography
          variant="h6"
          fontWeight={600}
          sx={{ mt: 2, mb: 2, textAlign: "left" }}
        >
          What is the reason for contacting us?
        </Typography>

        <Box sx={{ display: "flex", gap: 3, mb: 1 }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={form.maintenance}
                onChange={() => handleCheckbox("maintenance")}
              />
            }
            label={<Typography fontWeight={600}>Maintenance</Typography>}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={form.accounting}
                onChange={() => handleCheckbox("accounting")}
              />
            }
            label={<Typography fontWeight={600}>Accounting</Typography>}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={form.dispatch}
                onChange={() => handleCheckbox("dispatch")}
              />
            }
            label={<Typography fontWeight={600}>Dispatch</Typography>}
          />
        </Box>
        {errors.reason && (
          <Typography color="error" variant="body2" sx={{ mb: 2 }}>
            {errors.reason}
          </Typography>
        )}

        <TextField
          placeholder="Please briefly describe your needs:"
          name="message"
          value={form.message}
          onChange={handleChange}
          fullWidth
          multiline
          rows={6}
          variant="filled"
          required
          error={!!errors.message}
          helperText={errors.message}
          sx={{ backgroundColor: "#f7f7f7", mb: 4 }}
        />

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#cf2e2e",
            px: 5,
            py: 1.5,
            fontWeight: 600,
            "&:hover": { backgroundColor: "#b92424" },
          }}
          onClick={handleSubmit}
        >
          SUBMIT
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ py: 10, textAlign: "center", backgroundColor: "#fff", px: 2 }}>
      <Typography variant="h4" fontWeight={700} sx={{ mb: 6 }}>
        Subscription plans
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          gap: 4,
          maxWidth: "1200px",
          mx: "auto",
        }}
      >
        {plans.map((plan) => (
          <Box
            key={plan.title}
            sx={{
              backgroundColor: plan.color,
              color: plan.textColor || "#000",
              flex: 1,
              py: 6,
              px: 4,
              borderRadius: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              textAlign: "left",
              minHeight: "500px",
              position: "relative",
              boxShadow:
                plan.code === "A"
                  ? "0px 4px 12px rgba(0,0,0,0.15)"
                  : "0px 2px 8px rgba(0,0,0,0.05)",
              transition: "all .3s ease",
              cursor: "pointer",
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: "0px 8px 20px rgba(0,0,0,0.15)",
              },
            }}
          >
            <Box
              sx={{
                width: 40,
                height: 40,
                border: "2px solid currentColor",
                borderRadius: 1,
                mb: 1,
              }}
            ></Box>

            <Typography variant="subtitle1" sx={{ mb: 1 }}>
              {plan.title}
            </Typography>
            <Typography variant="h3" fontWeight={700} sx={{ mb: 3 }}>
              {plan.code}
            </Typography>

            <ul style={{ paddingLeft: "20px", margin: 0, flexGrow: 1 }}>
              {plan.features.map((feature) => (
                <li key={feature} style={{ marginBottom: "8px" }}>
                  {feature}
                </li>
              ))}
            </ul>
          </Box>
        ))}
      </Box>

      <Button
        variant="contained"
        sx={{
          mt: 6,
          backgroundColor: "#cf2e2e",
          px: 6,
          py: 1.5,
          "&:hover": { backgroundColor: "#b92424" },
        }}
        onClick={() => setShowForm(true)}
      >
        GET A QUOTE
      </Button>
    </Box>
  );
};
