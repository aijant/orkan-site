import {
  Box,
  TextField,
  Button,
  Typography,
  MenuItem,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

type ContactForm = {
  name: string;
  company: string;
  phone: string;
  email: string;
  reason: string;
  fleetSize: string;
  message: string;
};

const schema = yup.object({
  name: yup.string().required("Your name is required"),
  company: yup.string().required("Company name is required"),
  phone: yup.string().required("Phone number is required"),
  email: yup.string().email("Invalid email").required("Work email is required"),
  reason: yup.string().required("Select a reason"),
  fleetSize: yup.string().required("Select your fleet size"),
  message: yup.string().required("Please describe your needs"),
});

export const Contact = () => {
  const [isSent, setIsSent] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<ContactForm> = (data) => {
    console.log("Contact form:", data);
    setIsSent(true);
    reset(); 
  };

  return (
    <Box
      sx={{
        backgroundColor: "#2b0000",
        color: "#fff",
        py: { xs: 8, md: 10 },
        px: { xs: 3, md: 20 },
      }}
    >
      <Box textAlign="center" mb={6}>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Contact Us
        </Typography>
        <Typography sx={{ maxWidth: 600, mx: "auto", color: "#d3d3d3" }}>
          Let our team assist you in getting a better understanding of how our
          Orkan ELD can fulfill your needs and requirements.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 30,
          mb: 8,
          flexWrap: "wrap",
          textAlign: "center",
        }}
      >
        <Box>
          <IconButton
            sx={{
              backgroundColor: "#4a0a0a",
              color: "#fff",
              mb: 2,
              "&:hover": { backgroundColor: "#6b0f0f" },
            }}
          >
            <PhoneIcon />
          </IconButton>
          <Typography fontWeight={600}>Phone</Typography>
          <Typography>773-572-5627</Typography>
        </Box>

        <Box>
          <IconButton
            sx={{
              backgroundColor: "#4a0a0a",
              color: "#fff",
              mb: 2,
              "&:hover": { backgroundColor: "#6b0f0f" },
            }}
          >
            <EmailIcon />
          </IconButton>
          <Typography fontWeight={600}>Email</Typography>
          <Typography>office@orkaneld.com</Typography>
        </Box>
      </Box>

      {/* ✅ Form */}
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          maxWidth: 1100,
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
          <Box sx={{ flex: 1, minWidth: "300px" }}>
            <TextField
              fullWidth
              label="Your Name"
              {...register("name")}
              error={!!errors.name}
              helperText={errors.name?.message}
              variant="filled"
              InputProps={{
                disableUnderline: true,
                style: { color: "#fff", backgroundColor: "#3b0000" },
              }}
              InputLabelProps={{ style: { color: "#ccc" } }}
            />
          </Box>

          <Box sx={{ flex: 1, minWidth: "300px" }}>
            <TextField
              fullWidth
              label="Company Name"
              {...register("company")}
              error={!!errors.company}
              helperText={errors.company?.message}
              variant="filled"
              InputProps={{
                disableUnderline: true,
                style: { color: "#fff", backgroundColor: "#3b0000" },
              }}
              InputLabelProps={{ style: { color: "#ccc" } }}
            />
          </Box>
        </Box>

        <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
          <Box sx={{ flex: 1, minWidth: "300px" }}>
            <TextField
              fullWidth
              label="Phone number"
              {...register("phone")}
              error={!!errors.phone}
              helperText={errors.phone?.message}
              variant="filled"
              InputProps={{
                disableUnderline: true,
                style: { color: "#fff", backgroundColor: "#3b0000" },
              }}
              InputLabelProps={{ style: { color: "#ccc" } }}
            />
          </Box>

          <Box sx={{ flex: 1, minWidth: "300px" }}>
            <TextField
              fullWidth
              label="Work email"
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}
              variant="filled"
              InputProps={{
                disableUnderline: true,
                style: { color: "#fff", backgroundColor: "#3b0000" },
              }}
              InputLabelProps={{ style: { color: "#ccc" } }}
            />
          </Box>
        </Box>

        <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
          <Box sx={{ flex: 1, minWidth: "300px" }}>
            <TextField
              select
              fullWidth
              label="What is the reason for contacting us?"
              {...register("reason")}
              error={!!errors.reason}
              helperText={errors.reason?.message}
              variant="filled"
              InputProps={{
                disableUnderline: true,
                style: { color: "#fff", backgroundColor: "#3b0000" },
              }}
              InputLabelProps={{ style: { color: "#ccc" } }}
            >
              <MenuItem value="Request a demo">Request a demo</MenuItem>
              <MenuItem value="Sales inquiry">Sales inquiry</MenuItem>
              <MenuItem value="Customer support">Customer support</MenuItem>
              <MenuItem value="Contact sales">Contact sales</MenuItem>
              <MenuItem value="Partnership inquiry">
                Partnership inquiry
              </MenuItem>
              <MenuItem value="General inquiry">General inquiry</MenuItem>
            </TextField>
          </Box>

          <Box sx={{ flex: 1, minWidth: "300px" }}>
            <TextField
              select
              fullWidth
              label="Please select your fleet size"
              {...register("fleetSize")}
              error={!!errors.fleetSize}
              helperText={errors.fleetSize?.message}
              variant="filled"
              InputProps={{
                disableUnderline: true,
                style: { color: "#fff", backgroundColor: "#3b0000" },
              }}
              InputLabelProps={{ style: { color: "#ccc" } }}
            >
              <MenuItem value="1-4">1–4</MenuItem>
              <MenuItem value="5-19">5–19</MenuItem>
              <MenuItem value="20-50">20–50</MenuItem>
              <MenuItem value="51-99">51–99</MenuItem>
              <MenuItem value="100+">100+</MenuItem>
            </TextField>
          </Box>
        </Box>

        <Box sx={{ flex: 1 }}>
          <TextField
            fullWidth
            multiline
            rows={4}
            label="Please briefly describe your needs:"
            {...register("message")}
            error={!!errors.message}
            helperText={errors.message?.message}
            variant="filled"
            InputProps={{
              disableUnderline: true,
              style: { color: "#fff", backgroundColor: "#3b0000" },
            }}
            InputLabelProps={{ style: { color: "#ccc" } }}
          />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#e53935",
              "&:hover": { backgroundColor: "#b71c1c" },
              color: "#fff",
              px: 5,
              py: 1.5,
              borderRadius: "6px",
            }}
          >
            SUBMIT
          </Button>
        </Box>

        {isSent && (
          <Typography
            variant="h6"
            sx={{
              color: "#4caf50",
              textAlign: "center",
              mt: 4,
              fontWeight: 600,
            }}
          >
            Thank you for your message. It has been sent.
          </Typography>
        )}
      </Box>
    </Box>
  );
};
