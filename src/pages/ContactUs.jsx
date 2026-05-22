import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";

export const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    whatsappNo: "",
    yrsOfTrading: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!/^\d{10}$/.test(form.whatsappNo))
      newErrors.whatsappNo = "Enter valid 10 digit number";
    if (!form.email.includes("@")) newErrors.email = "Invalid email";
    if (!form.message.trim()) newErrors.message = "Message required";

    return newErrors;
  };

  const handleSubmit = () => {
    const err = validate();
    if (Object.keys(err).length > 0) {
      setErrors(err);
      return;
    }

    console.log("Submitting:", form);
  };

  const inputStyles = {
    mb: 3,
    input: { color: "#fff" },
    label: { color: "#aaa" },
    "& .MuiOutlinedInput-root": {
      "& fieldset": { borderColor: "#333" },
      "&:hover fieldset": { borderColor: "gold" },
      "&.Mui-focused fieldset": { borderColor: "gold" },
    },
  };

  return (
    <Box sx={{ background: "#0b0b0b", color: "#fff", minHeight: "100vh" }}>
      
      {/* HERO */}
      <Box sx={{ py: 10, textAlign: "center" }}>
        <Typography variant="h3" sx={{ fontWeight: 700 }}>
          Contact Us
        </Typography>
        <Typography sx={{ color: "#aaa", mt: 2 }}>
          We’re here to help you in your trading journey
        </Typography>
      </Box>

      {/* MAIN */}
      <Container sx={{ pb: 10, maxWidth: "1200px" }}>

        <Box
          sx={{
            display: "flex",
            gap: 4,
            flexDirection: { xs: "column", md: "row" }, // 🔥 THIS FIXES EVERYTHING
          }}
        >

          {/* LEFT → FORM */}
          <Paper
            sx={{
              flex: 1,
              p: 4,
              background: "#151515",
              borderRadius: 3,
            }}
          >
            <Typography variant="h5" sx={{ mb: 3, fontWeight: 600,color: "#fff" }}>
              Send us a message
            </Typography>

            <TextField
              fullWidth
              label="Name"
              value={form.name}
              onChange={handleChange("name")}
              error={!!errors.name}
              helperText={errors.name}
              sx={inputStyles}
            />

            <TextField
              fullWidth
              label="WhatsApp Number"
              value={form.whatsappNo}
              onChange={handleChange("whatsappNo")}
              error={!!errors.whatsappNo}
              helperText={errors.whatsappNo}
              sx={inputStyles}
            />

            <TextField
              fullWidth
              label="Years of Trading"
              value={form.yrsOfTrading}
              onChange={handleChange("yrsOfTrading")}
              sx={inputStyles}
            />

            <TextField
              fullWidth
              label="Email"
              value={form.email}
              onChange={handleChange("email")}
              error={!!errors.email}
              helperText={errors.email}
              sx={inputStyles}
            />

            <TextField
              fullWidth
              multiline
              rows={4}
              label="Message"
              value={form.message}
              onChange={handleChange("message")}
              error={!!errors.message}
              helperText={errors.message}
              sx={inputStyles}
            />

            <Button
              fullWidth
              variant="contained"
              onClick={handleSubmit}
              sx={{
                mt: 2,
                background: "gold",
                color: "#000",
                fontWeight: 600,
                "&:hover": { background: "#e6c200" },
              }}
            >
              Submit
            </Button>
          </Paper>

          {/* RIGHT → INFO */}
          <Paper
            sx={{
              flex: 1,
              p: 4,
              background: "#151515",
              borderRadius: 3,
            }}
          >
            <Typography variant="h5" sx={{ mb: 3, fontWeight: 600,color: "#fff" }}>
              Get in touch
            </Typography>

            <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
  <LocationOnIcon sx={{ color: "gold", mr: 1, mt: "4px" }} />
  <Typography sx={{ color: "#aaa" }}>
    8/16p, G3, 3rd Street, Krishnamachari Nagar,
    Alapakkam, Chennai – 600116.
  </Typography>
</Box>

<Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
  <PhoneIcon sx={{ color: "gold", mr: 1 }} />
  <Typography sx={{ color: "#aaa" }}>
    +91 98765 43210
  </Typography>
</Box>

            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
  <EmailIcon sx={{ color: "gold", mr: 1 }} />
  <Typography sx={{ color: "#aaa" }}>
    support@invikings.com
  </Typography>
</Box>

            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
  <EmailIcon sx={{ color: "gold", mr: 1 }} />
  <Typography sx={{ color: "#aaa" }}>
    info@invikings.com
  </Typography>
</Box>

            <Box sx={{ borderRadius: 2, overflow: "hidden" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.817529812906!2d80.16557628283168!3d13.047283880422965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52613c7c09e209%3A0x2879d6f79afb8f47!2sg3%203rd%2C%2016%2C%208th%20St%2C%20Ashtalakshmi%20Nagar%2C%20Valasaravakkam%2C%20Chennai%2C%20Tamil%20Nadu%20600095!5e0!3m2!1sen!2sin!4v1723123868264!5m2!1sen!2sin"
                width="100%"
                height="260"
                style={{ border: 0 }}
                loading="lazy"
              />
            </Box>
          </Paper>

        </Box>
      </Container>
    </Box>
  );
};