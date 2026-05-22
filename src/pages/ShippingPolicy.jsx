import React from "react";
import {
  Box,
  Container,
  Typography,
} from "@mui/material";

import SchoolIcon from '@mui/icons-material/School';

export const ShippingPolicy = () => {
  return (
    <Box
      sx={{
        background: "#0b0b0b",
        minHeight: "100vh",
        color: "#fff",
      }}
    >


      {/* 🔥 CONTENT */}
      <Container maxWidth="md" sx={{ py: 10 }}>

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
            <SchoolIcon
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
              Online Trading Coaching Class 
            </Typography>
          </Box>

          {/* SUBTITLE */}
          <Typography
              variant="h5"
              sx={{
                color: "gold",
                fontWeight: 700,
                mb: 2,
              }}
          >
            Delivery Policy
          </Typography>

          {/* 🔥 POLICY ITEMS */}
          {[
            {
              title: "1. Introduction",
              content:
                "Welcome to our Online Trading Coaching Class! This Delivery Policy outlines the terms and conditions regarding the delivery of our online trading education services. Please read this policy carefully before enrolling in our courses.",
            },

            {
              title: "2. Course Access",
              content:
                "Upon successful enrollment and payment, students will receive immediate access to the course materials via our online learning platform. Access credentials will be provided to the email address used during registration.",
            },

            {
              title: "3. Course Content",
              content:
                "Our courses consist of pre-recorded video lectures, reading materials, quizzes, assignments, and additional resources necessary for effective learning. The content is designed to provide comprehensive guidance on various aspects of online trading.",
            },

            {
              title: "4. Duration of Access",
              content:
                "Students will have unlimited access to the course content for the duration specified at the time of enrollment. Any updates or additions to the course materials during this period will be accessible at no additional cost.",
            },

            {
              title: "5. Technical Requirements",
              content:
                "To access the course content, students must have a stable internet connection and compatible devices such as a computer, tablet, or smartphone. It is the responsibility of the student to ensure that their devices meet the minimum technical requirements.",
            },

            {
              title: "6. Support and Assistance",
              content:
                "We are committed to providing support and assistance throughout the learning journey. Students can contact our customer support team via email for technical or administrative queries related to the course.",
            },

            {
              title: "7. Refund Policy",
              content:
                "Refunds are subject to the terms outlined in our Refund Policy. Please refer to the Refund Policy document for detailed information regarding eligibility criteria and refund procedures.",
            },

            {
              title: "8. Amendments to the Delivery Policy",
              content:
                "We reserve the right to modify or update this Delivery Policy at any time without prior notice. Any changes become effective immediately upon posting on our website. Students are encouraged to review the policy periodically for updates.",
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
                transition: "0.3s",

                "&:hover": {
                  borderColor: "rgba(255,215,0,0.25)",
                  transform: "translateY(-4px)",
                },
              }}
            >
              <Typography
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  color: "#fff",
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

          {/* 🔥 FINAL NOTE */}
          <Box
            sx={{
              mt: 6,
              background:
                "linear-gradient(to right, rgba(255,215,0,0.08), transparent)",
              p: 5,
              borderRadius: 4,
            }}
          >
            <Typography
              sx={{
                color: "#ddd",
                lineHeight: 2,
                fontStyle: "italic",
              }}
            >
              By enrolling in our online trading coaching class,
              you acknowledge that you have read, understood,
              and agreed to abide by the terms and conditions
              outlined in this Delivery Policy.
            </Typography>
          </Box>

        </Box>
      </Container>
    </Box>
  );
};