import React from "react";
import { Box, Container, Grid, Typography, Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";
import { FiMail } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";

export const Footer = () => {
  return (
    <Box sx={{ background: "#0b0b0b", color: "#fff", pt: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>

          {/* Logo + Description */}
          <Grid item xs={12} md={3}>
            <Box component={Link} to="/" sx={{ display: "inline-block", mb: 2 }}>
              <img
                src="https://invikings.com/wp-content/uploads/2023/12/logo2.png"
                alt="logo"
                style={{ height: 45 }}
              />
            </Box>

            <Typography variant="body2" sx={{ color: "#aaa", lineHeight: 1.7 }}>
              We teach the necessary concepts, tools and techniques that enable you to start investing and earning from stock market.
            </Typography>
          </Grid>

          {/* Support Links */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Support
            </Typography>

            {[
              { label: "Home", path: "/" },
              { label: "Privacy Policy", path: "/privacyPolicy" },
              { label: "FAQ", path: "/faq" },
              { label: "Terms & Conditions", path: "/termsAndConditions" },
              { label: "Refund Policy", path: "/refundPolicy" },
              { label: "Shipping Policy", path: "/shippingPolicy" },
            ].map((item) => (
              <MuiLink
                key={item.path}
                component={Link}
                to={item.path}
                underline="none"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 1,
                  color: "#aaa",
                  transition: "0.3s",
                  "&:hover": {
                    color: "gold",
                    transform: "translateX(5px)",
                  },
                }}
              >
                <FaArrowRight size={12} style={{ marginRight: 8 }} />
                {item.label}
              </MuiLink>
            ))}
          </Grid>

          {/* Contact */}

        </Grid>
      </Container>

      {/* Bottom Bar */}
      <Box
        sx={{
          mt: 5,
          py: 2,
          textAlign: "center",
          borderTop: "1px solid #222",
          color: "#777",
          fontSize: 14,
        }}
      >
        © {new Date().getFullYear()} INVIKINGS. All Rights Reserved.
      </Box>
    </Box>
  );
};