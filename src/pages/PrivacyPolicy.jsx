import React from "react";
import {
  Box,
  Container,
  Typography,
  Breadcrumbs,
  Link as MuiLink,
} from "@mui/material";

import { Link } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";

export const PrivacyPolicy = () => {
  return (
    <Box
      sx={{
        background: "#0b0b0b",
        color: "#fff",
        minHeight: "100vh",
      }}
    >

      {/* 🔥 HERO */}


      {/* 🔥 CONTENT */}
      <Container maxWidth="md" sx={{ py: 3 }}>

        {/* CARD */}
        <Box
          sx={{
            background: "#111",
            borderRadius: 5,
            p: { xs: 4, md: 6 },
            border: "1px solid rgba(255,215,0,0.08)",
          }}
        >

          {/* HEADER */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              mb: 5,
            }}
          >
            <PrivacyTipIcon sx={{ color: "gold", fontSize: 35 }} />

            <Typography
              variant="h4"
              sx={{ fontWeight: 700 }}
            >
              Privacy Policy
            </Typography>
          </Box>

          {/* LAST UPDATED */}
          <Typography
            sx={{
              color: "gold",
              fontWeight: 600,
              mb: 4,
            }}
          >
            Last updated on MAY 11 2026
          </Typography>

          {/* INTRO */}
          <Typography
            sx={{
              color: "#aaa",
              lineHeight: 2,
              mb: 3,
            }}
          >
            This privacy policy sets out how INVIKINGS uses and protects
            any information that you give INVIKINGS when you use this website.
          </Typography>

          <Typography
            sx={{
              color: "#aaa",
              lineHeight: 2,
              mb: 3,
            }}
          >
            INVIKINGS is committed to ensuring that your privacy is protected.
            Any information collected through this website will only be used
            in accordance with this privacy statement.
          </Typography>

          <Typography
            sx={{
              color: "#aaa",
              lineHeight: 2,
              mb: 6,
            }}
          >
            INVIKINGS may update this policy periodically. Users are encouraged
            to review this page regularly to stay informed about any changes.
          </Typography>

          {/* SECTION */}
          <Box sx={{ mb: 7 }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                mb: 3,
                color: "gold",
              }}
            >
              Information We May Collect
            </Typography>

            {[
              "Name and job title",
              "Contact information including email address",
              "Demographic information such as postcode, preferences and interests",
              "Other information relevant to customer surveys and offers",
            ].map((item, index) => (
              <Typography
                key={index}
                sx={{
                  color: "#aaa",
                  mb: 2,
                  lineHeight: 2,
                }}
              >
                • {item}
              </Typography>
            ))}
          </Box>

          {/* SECTION */}
          <Box sx={{ mb: 7 }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                mb: 3,
                color: "gold",
              }}
            >
              How We Use The Information
            </Typography>

            <Typography
              sx={{
                color: "#aaa",
                lineHeight: 2,
                mb: 3,
              }}
            >
              We use the collected information to understand your needs
              and provide a better service experience.
            </Typography>

            {[
              "Internal record keeping",
              "Improving products and services",
              "Sending promotional emails and offers",
              "Market research and customer support",
              "Customizing website experience",
            ].map((item, index) => (
              <Typography
                key={index}
                sx={{
                  color: "#aaa",
                  mb: 2,
                  lineHeight: 2,
                }}
              >
                • {item}
              </Typography>
            ))}

            <Typography
              sx={{
                color: "#aaa",
                lineHeight: 2,
                mt: 4,
              }}
            >
              We are committed to ensuring that your information remains secure
              through suitable technical and organizational measures.
            </Typography>
          </Box>

          {/* SECTION */}
          <Box sx={{ mb: 7 }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                mb: 3,
                color: "gold",
              }}
            >
              Cookies Usage
            </Typography>

            <Typography
              sx={{
                color: "#aaa",
                lineHeight: 2,
                mb: 3,
              }}
            >
              Cookies are small files placed on your device to enhance
              website functionality and improve user experience.
            </Typography>

            <Typography
              sx={{
                color: "#aaa",
                lineHeight: 2,
                mb: 3,
              }}
            >
              We use cookies to analyze traffic, understand user behavior,
              and customize website features according to user preferences.
            </Typography>

            <Typography
              sx={{
                color: "#aaa",
                lineHeight: 2,
              }}
            >
              You may choose to accept or decline cookies through your
              browser settings. Disabling cookies may affect certain
              website functionalities.
            </Typography>
          </Box>

          {/* SECTION */}
          <Box>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                mb: 3,
                color: "gold",
              }}
            >
              Controlling Your Personal Information
            </Typography>

            <Typography
              sx={{
                color: "#aaa",
                lineHeight: 2,
                mb: 3,
              }}
            >
              Users may restrict the use of their personal information
              for direct marketing purposes by selecting appropriate
              preferences while filling forms on the website.
            </Typography>

            <Typography
              sx={{
                color: "#aaa",
                lineHeight: 2,
                mb: 3,
              }}
            >
              If you previously agreed to us using your information
              for marketing purposes, you may change your preference
              anytime by contacting us.
            </Typography>

            <Typography
              sx={{
                color: "#aaa",
                lineHeight: 2,
              }}
            >
              Contact us at{" "}
              <Box
                component="a"
                href="mailto:support@invikings.com"
                sx={{
                  color: "gold",
                  textDecoration: "none",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                support@invikings.com
              </Box>
            </Typography>
          </Box>

        </Box>
      </Container>
    </Box>
  );
};