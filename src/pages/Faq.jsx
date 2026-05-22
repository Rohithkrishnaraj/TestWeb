import React from "react";
import {
  Box,
  Container,
  Typography,
} from "@mui/material";

export const FAQ = () => {
  return (
    <Box
      sx={{
        background: "#0b0b0b",
        minHeight: "100vh",
        color: "#fff",
      }}
    >




      {/* 🔥 FAQ CONTENT */}
      <Container maxWidth="md" sx={{ py: 10 }}>

        {/* TOP HEADING */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: 6,
            textAlign: "center",
          }}
        >
          INVIKINGS Trading Courses FAQ
        </Typography>

        {/* 🔥 GENERAL QUESTIONS */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h5"
            sx={{
              color: "gold",
              fontWeight: 700,
              mb: 2,
            }}
          >
            General Questions
          </Typography>



          {[
            {
              q: "1. What is INVIKINGS?",
              a: "INVIKINGS is an online platform that offers high-quality trading courses designed to empower individuals with the knowledge and skills needed for successful trading in various financial markets.",
            },
            {
              q: "2. How can I contact INVIKINGS for support?",
              a: "You can reach our support team by emailing info@invikings.com or by filling out the contact form on our Contact Us page.",
            },
            {
              q: "3. Are the courses suitable for beginners?",
              a: "Yes, our courses cater to all levels of traders, including beginners. We provide comprehensive materials and resources to ensure a smooth learning experience for everyone.",
            },
          ].map((item, index) => (
            <Box
              key={index}
              sx={{
                background: "#111",
                p: 4,
                borderRadius: 4,
                mb: 3,
                border: "1px solid rgba(255,215,0,0.08)",
                transition: "0.3s",

                "&:hover": {
                  borderColor: "rgba(255,215,0,0.3)",
                  transform: "translateY(-4px)",
                },
              }}
            >
              <Typography
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  color: "#fff",
                  lineHeight: 1.7,
                }}
              >
                {item.q}
              </Typography>

              <Typography
                sx={{
                  color: "#aaa",
                  lineHeight: 2,
                }}
              >
                {item.a}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* 🔥 COURSE CONTENT */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h5"
            sx={{
              color: "gold",
              fontWeight: 700,
              mb: 2,
            }}
          >
            Course Content
          </Typography>



          {[
            {
              q: "4. What topics are covered in the trading courses?",
              a: "Our courses cover a wide range of topics, including but not limited to technical analysis, fundamental analysis, risk management, trading strategies, and market psychology.",
            },
            {
              q: "5. Are the courses updated regularly?",
              a: "Yes, we strive to keep our courses up-to-date with the latest market trends and industry developments. Updates and new content are regularly added to provide the most relevant information.",
            },
          ].map((item, index) => (
            <Box
              key={index}
              sx={{
                background: "#111",
                p: 4,
                borderRadius: 4,
                mb: 3,
                border: "1px solid rgba(255,215,0,0.08)",
                transition: "0.3s",

                "&:hover": {
                  borderColor: "rgba(255,215,0,0.3)",
                  transform: "translateY(-4px)",
                },
              }}
            >
              <Typography
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  lineHeight: 1.7,
                }}
              >
                {item.q}
              </Typography>

              <Typography
                sx={{
                  color: "#aaa",
                  lineHeight: 2,
                }}
              >
                {item.a}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* 🔥 ENROLLMENT */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h5"
            sx={{
              color: "gold",
              fontWeight: 700,
              mb: 2,
            }}
          >
            Enrollment and Payment
          </Typography>



          {[
            {
              q: "6. How do I enroll in a course?",
              a: "To enroll in a course, visit our website, select the desired course, and click on the Enroll button. Follow the instructions to complete the enrollment process.",
            },
            {
              q: "7. What payment methods are accepted?",
              a: "We accept major credit cards, debit cards, and PayPal for course payments. Secure payment processing is ensured to protect your financial information.",
            },
            {
              q: "8. Is there a refund policy?",
              a: "Yes, we offer a 30-day money-back guarantee. If you are not satisfied with the course within the first 30 days, you can request a full refund.",
            },
          ].map((item, index) => (
            <Box
              key={index}
              sx={{
                background: "#111",
                p: 4,
                borderRadius: 4,
                mb: 3,
                border: "1px solid rgba(255,215,0,0.08)",
                transition: "0.3s",

                "&:hover": {
                  borderColor: "rgba(255,215,0,0.3)",
                  transform: "translateY(-4px)",
                },
              }}
            >
              <Typography
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  lineHeight: 1.7,
                }}
              >
                {item.q}
              </Typography>

              <Typography
                sx={{
                  color: "#aaa",
                  lineHeight: 2,
                }}
              >
                {item.a}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* 🔥 TECHNICAL SUPPORT */}
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h5"
            sx={{
              color: "gold",
              fontWeight: 700,
              mb: 2,
            }}
          >
            Technical Support
          </Typography>


          {[
            {
              q: "9. I'm having technical issues accessing my course. What should I do?",
              a: "If you encounter technical issues, please contact our technical support team at info@invikings.com. Provide detailed information about the problem for a prompt resolution.",
            },
            {
              q: "10. Are the courses accessible on mobile devices?",
              a: "Yes, our platform is designed to be mobile-friendly. You can access the courses on your desktop, laptop, tablet, or smartphone.",
            },
          ].map((item, index) => (
            <Box
              key={index}
              sx={{
                background: "#111",
                p: 4,
                borderRadius: 4,
                mb: 3,
                border: "1px solid rgba(255,215,0,0.08)",
                transition: "0.3s",

                "&:hover": {
                  borderColor: "rgba(255,215,0,0.3)",
                  transform: "translateY(-4px)",
                },
              }}
            >
              <Typography
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  lineHeight: 1.7,
                }}
              >
                {item.q}
              </Typography>

              <Typography
                sx={{
                  color: "#aaa",
                  lineHeight: 2,
                }}
              >
                {item.a}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* 🔥 CERTIFICATION */}
        <Box>
          <Typography
            variant="h5"
            sx={{
              color: "gold",
              fontWeight: 700,
              mb: 2,
            }}
          >
            Certification
          </Typography>



          <Box
            sx={{
              background: "#111",
              p: 4,
              borderRadius: 4,
              border: "1px solid rgba(255,215,0,0.08)",
              transition: "0.3s",

              "&:hover": {
                borderColor: "rgba(255,215,0,0.3)",
                transform: "translateY(-4px)",
              },
            }}
          >
            <Typography
              sx={{
                fontWeight: 700,
                mb: 2,
                lineHeight: 1.7,
              }}
            >
              11. Do I receive a certificate upon course completion?
            </Typography>

            <Typography
              sx={{
                color: "#aaa",
                lineHeight: 2,
              }}
            >
              Yes, upon successful completion of a course, you will receive a
              personalized certificate recognizing your achievement. This
              certificate can be downloaded and shared on professional
              platforms.
            </Typography>
          </Box>
        </Box>

      </Container>
    </Box>
  );
};