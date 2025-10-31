import { Box, TextField, Button, Typography } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type ContactForm = {
  name: string;
  email: string;
  message: string;
};

const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  message: yup.string().required("Message is required"),
});

export const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<ContactForm> = (data) => {
    console.log("Contact form:", data);
    alert("Message sent!");
  };

  return (
    <Box sx={{ maxWidth: 500, mx: "auto", py: 8 }}>
      <Typography variant="h4" textAlign="center" mb={3} color="primary.main">
        Contact Us
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          fullWidth
          label="Full Name"
          margin="normal"
          {...register("name")}
          error={!!errors.name}
          helperText={errors.name?.message}
        />
        <TextField
          fullWidth
          label="Email"
          type="email"
          margin="normal"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          fullWidth
          label="Message"
          multiline
          rows={4}
          margin="normal"
          {...register("message")}
          error={!!errors.message}
          helperText={errors.message?.message}
        />
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Send Message
        </Button>
      </form>
    </Box>
  );
};
