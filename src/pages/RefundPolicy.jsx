import React from "react";
import {
  Box,
  Container,
  Typography,
} from "@mui/material";

import AutorenewIcon from "@mui/icons-material/Autorenew";

export const RefundPolicy = () => {
  return (
    <Box
      sx={{
        background: "#0b0b0b",
        minHeight: "100vh",
        color: "#fff",
      }}
    >

      {/* 🔥 CONTENT */}
      <Container maxWidth="md" sx={{ py: 5 }}>

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
            <AutorenewIcon
              sx={{
                color: "gold",
                fontSize: 35,
              }}
            />

            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
              }}
            >
              Refund & Cancellation Policy
            </Typography>
          </Box>

          {/* TOP CONTENT */}
          <Typography
            sx={{
              color: "#ddd",
              lineHeight: 2,
              fontSize: "1.1rem",
              mb: 8,
            }}
          >
            INVIKINGS is committed to providing high-quality trading
            courses to empower individuals in their journey toward
            successful trading and financial growth.
          </Typography>

          {/* 🔥 REFUND POLICY */}
          <Box sx={{ mb: 8 }}>
            <Typography
              variant="h5"
              sx={{
                color: "gold",
                fontWeight: 700,
                mb: 2,
              }}
            >
              Refund Policy
            </Typography>



            {/* ELIGIBILITY */}
            <Box
              sx={{
                background: "#161616",
                p: 4,
                borderRadius: 4,
                mb: 4,
                border: "1px solid rgba(255,215,0,0.08)",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                Eligibility for Refund
              </Typography>

              <Typography
                sx={{
                  color: "#aaa",
                  lineHeight: 2,
                }}
              >
                Refund requests will only be considered within a
                specified period after the purchase of a course.
                This period may vary depending on the specific
                course and details provided during the purchase process.
              </Typography>
            </Box>

            {/* PROCESS */}
            <Box
              sx={{
                background: "#161616",
                p: 4,
                borderRadius: 4,
                mb: 4,
                border: "1px solid rgba(255,215,0,0.08)",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                Refund Process
              </Typography>

              {[
                "To request a refund, customers must contact our support team through the designated channels provided on our website.",
                "Refund requests will be processed within a reasonable time frame.",
              ].map((item, index) => (
                <Typography
                  key={index}
                  sx={{
                    color: "#aaa",
                    lineHeight: 2,
                    mb: 2,
                  }}
                >
                  • {item}
                </Typography>
              ))}
            </Box>

            {/* CONDITIONS */}
            <Box
              sx={{
                background: "#161616",
                p: 4,
                borderRadius: 4,
                mb: 4,
                border: "1px solid rgba(255,215,0,0.08)",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                Conditions for Refund
              </Typography>

              <Typography
                sx={{
                  color: "#aaa",
                  lineHeight: 2,
                  mb: 2,
                }}
              >
                Refunds will be considered under the following conditions:
              </Typography>

              {[
                "The request is made within the eligible refund period.",
                "The course content has not been extensively accessed or downloaded.",
              ].map((item, index) => (
                <Typography
                  key={index}
                  sx={{
                    color: "#aaa",
                    lineHeight: 2,
                    mb: 2,
                  }}
                >
                  • {item}
                </Typography>
              ))}
            </Box>

            {/* NON REFUNDABLE */}
            <Box
              sx={{
                background: "#161616",
                p: 4,
                borderRadius: 4,
                border: "1px solid rgba(255,215,0,0.08)",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                Non-Refundable Items
              </Typography>

              <Typography
                sx={{
                  color: "#aaa",
                  lineHeight: 2,
                }}
              >
                Certain items, such as downloadable materials,
                may not be eligible for a refund unless there
                is a technical issue preventing access.
              </Typography>
            </Box>
          </Box>

          {/* 🔥 CANCELLATION POLICY */}
          <Box sx={{ mb: 8 }}>
            <Typography
              variant="h5"
              sx={{
                color: "gold",
                fontWeight: 700,
                mb: 2,
              }}
            >
              Cancellation Policy
            </Typography>



            {[
              {
                title: "Cancellation by the User",
                content:
                  "Users may cancel their enrollment in a course within a specific period after purchase, as indicated during the course enrollment process.",
              },

              {
                title: "Cancellation Process",
                content:
                  "Users can initiate the cancellation process by contacting our support team through the provided communication channels.",
              },

              {
                title: "Refund after Cancellation",
                content:
                  "Cancellation may entitle users to a refund based on the conditions outlined in the refund policy.",
              },
            ].map((item, index) => (
              <Box
                key={index}
                sx={{
                  background: "#161616",
                  p: 4,
                  borderRadius: 4,
                  mb: 4,
                  border: "1px solid rgba(255,215,0,0.08)",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    color: "#aaa",
                    lineHeight: 2,
                  }}
                >
                  {item.content}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* 🔥 CONTACT */}
          <Box
            sx={{
              background:
                "linear-gradient(to right, rgba(255,215,0,0.08), transparent)",
              p: 5,
              borderRadius: 4,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: "gold",
                fontWeight: 700,
                mb: 3,
              }}
            >
              Contact Us
            </Typography>

            <Typography
              sx={{
                color: "#ddd",
                lineHeight: 2,
                mb: 3,
              }}
            >
              For any questions or concerns regarding our Refund and
              Cancellation Policy, please contact our support team at{" "}
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

            <Typography
              sx={{
                color: "#aaa",
                lineHeight: 2,
                fontStyle: "italic",
              }}
            >
              Note: INVIKINGS reserves the right to modify this
              Refund and Cancellation Policy at any time. Users
              are encouraged to review this policy periodically
              for updates.
            </Typography>
          </Box>

        </Box>
      </Container>
    </Box>
  );
};