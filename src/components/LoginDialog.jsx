import React, { useState } from "react";

import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
  IconButton,
} from "@mui/material";

import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import CloseIcon from "@mui/icons-material/Close";
import api from "../api/axios";
import { useAuth } from "../context/AuthContext";

export const LoginDialog = ({
  open,
  handleClose,
}) => {

  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] =
    useState(false);

  // 🔥 HANDLE INPUT CHANGE
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  // 🔥 VALIDATION
  const validate = () => {
    let newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email =
        "Email is required";
    }

    if (!formData.password.trim()) {
      newErrors.password =
        "Password is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // 🔥 SUBMIT
  const handleSubmit = async (e) => {

  e.preventDefault();

  if (!validate()) return;

  try {

    const response = await api.post(
      "/auth/login",
      {
        email: formData.email,
        password: formData.password,
      }
    );

    const data = response.data;

    login(data.token, data.user);

    handleClose();

  } catch (error) {

    console.error(error);

    setErrors({
      api:
        error.response?.data?.error ||
        "Login failed",
    });

  }
};

  return (
    <Dialog
      open={open}
        onClose={(event, reason) => {
    if (
      reason === "backdropClick" ||
      reason === "escapeKeyDown"
    ) {
      return;
    }

    handleClose();
  }}
      fullWidth
      maxWidth="sm"
      PaperProps={{
        sx: {
          background: "#111",
          borderRadius: 5,
          border:
            "1px solid rgba(255,215,0,0.08)",
          overflow: "hidden",
        },
      }}
    >

      <DialogContent sx={{ p: 0 }}>

        {/* 🔥 TOP BAR */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 2,
          }}
        >
          <IconButton onClick={handleClose}>
            <CloseIcon sx={{ color: "#888" }} />
          </IconButton>
        </Box>

        {/* 🔥 CONTENT */}
        <Box
          sx={{
            px: { xs: 4, md: 6 },
            pb: 6,
          }}
        >

          {/* 🔥 ICON */}
          <Box
            sx={{
              width: 75,
              height: 75,
              borderRadius: "50%",
              background:
                "rgba(255,215,0,0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mx: "auto",
              mb: 3,
            }}
          >
            <AccountBoxIcon
              sx={{
                color: "gold",
                fontSize: 38,
              }}
            />
          </Box>

          {/* 🔥 HEADING */}
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              fontWeight: 700,
              mb: 1,
              color: "#fff",
            }}
          >
            Member Login
          </Typography>

          <Typography
            sx={{
              textAlign: "center",
              color: "#888",
              mb: 5,
              lineHeight: 1.8,
            }}
          >
            Login using your Invi-TJ credentials
            to access One-on-One mentor booking.
          </Typography>

          {errors.api && (
  <Typography
    sx={{
      color: "#ff6b6b",
      mb: 2,
      textAlign: "center",
    }}
  >
    {errors.api}
  </Typography>
)}

          {/* 🔥 FORM */}
          <Box
            component="form"
            onSubmit={handleSubmit}
          >

            {/* EMAIL */}
            <TextField
              fullWidth
              name="email"
              label="Email"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonOutlineIcon
                      sx={{ color: "gold" }}
                    />
                  </InputAdornment>
                ),
              }}
              sx={{
                mb: 2,

                "& .MuiOutlinedInput-root": {
                  color: "#fff",
                  borderRadius: 3,

                  "& fieldset": {
                    borderColor: "#333",
                  },

                  "&:hover fieldset": {
                    borderColor: "gold",
                  },

                  "&.Mui-focused fieldset": {
                    borderColor: "gold",
                  },
                },

                "& .MuiInputLabel-root": {
                  color: "#888",
                },

                "& .MuiInputLabel-root.Mui-focused":
                  {
                    color: "gold",
                  },

                "& .MuiFormHelperText-root": {
                  color: "#ff6b6b",
                },
              }}
            />

            {/* PASSWORD */}
            <TextField
              fullWidth
              name="password"
              label="Password"
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              value={formData.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOutlinedIcon
                      sx={{ color: "gold" }}
                    />
                  </InputAdornment>
                ),

                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() =>
                        setShowPassword(
                          !showPassword
                        )
                      }
                    >
                      {showPassword ? (
                        <Visibility
                          sx={{ color: "#888" }}
                        />
                      ) : (
                        <VisibilityOff
                          sx={{ color: "#888" }}
                        />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                mb: 4,

                "& .MuiOutlinedInput-root": {
                  color: "#fff",
                  borderRadius: 3,

                  "& fieldset": {
                    borderColor: "#333",
                  },

                  "&:hover fieldset": {
                    borderColor: "gold",
                  },

                  "&.Mui-focused fieldset": {
                    borderColor: "gold",
                  },
                },

                "& .MuiInputLabel-root": {
                  color: "#888",
                },

                "& .MuiInputLabel-root.Mui-focused":
                  {
                    color: "gold",
                  },

                "& .MuiFormHelperText-root": {
                  color: "#ff6b6b",
                },
              }}
            />

            {/* LOGIN BUTTON */}
            <Button
              type="submit"
              fullWidth
              sx={{
                py: 1.6,
                borderRadius: 3,
                background: "gold",
                color: "#000",
                fontWeight: 700,
                fontSize: "1rem",
                textTransform: "none",

                "&:hover": {
                  background: "#e6c200",
                },
              }}
            >
              Login
            </Button>

          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};