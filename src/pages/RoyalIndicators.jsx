import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
} from "@mui/material";


export const RoyalIndicators = () => {

  const steps = [
    {
      no: "01",
      title: "Access Confirmation",
      desc: "Receive access confirmation linked to your TradingView username.",
    },
    {
      no: "02",
      title: "TradingView Login",
      desc: "Log in to TradingView and enter the trading arena.",
    },
    {
      no: "03",
      title: "Exclusive Indicator Access",
      desc: "Unlock INVIKINGS indicators through Invite-Only access.",
    },
    {
      no: "04",
      title: "Subscription Activation",
      desc: "Start using precision indicators tailored to your subscription.",
    },
  ];

  const benefits = [
    {
      title: "Precision Predictions",
      desc: "Identify key market levels with high accuracy.",
    },
    {
      title: "Profit While You Wait",
      desc: "Capitalize on fluctuations while waiting for setups.",
    },
    {
      title: "Strategic Synergy",
      desc: "Combine predictive and support systems effectively.",
    },
  ];

  return (
    <Box sx={{ background: "#0b0b0b", color: "#fff" }}>

      {/* 🔥 HERO */}
      <Box sx={{ py: 10, textAlign: "center" }}>
        <Typography variant="h3" fontWeight={700}>
          Royal Indicators
        </Typography>

        <Typography sx={{ color: "#aaa", mt: 2 }}>
          Precision Trading Meets Smart Strategy
        </Typography>
      </Box>

      {/* 🔥 STEP SECTION */}
      <Container sx={{ py: 10 }}>
        <Typography
          variant="h4"
          textAlign="center"
          sx={{ fontWeight: 700, mb: 2 }}
        >
          Easy & Simple To Use
        </Typography>

        <Typography
          textAlign="center"
          sx={{ color: "gold", mb: 8 }}
        >
          Step-by-Step Guideline
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))",
            gap: 4,
          }}
        >
          {steps.map((step, index) => (
            <Box
              key={index}
              sx={{
                p: 4,
                background: "#111",
                borderRadius: 4,
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-8px)",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: "3rem",
                  color: "gold",
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                {step.no}
              </Typography>

              <Typography
                sx={{
                  fontWeight: 600,
                  mb: 2,
                  fontSize: "1.2rem",
                }}
              >
                {step.title}
              </Typography>

              <Typography sx={{ color: "#aaa", lineHeight: 1.8 }}>
                {step.desc}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>

      {/* 🔥 PRICING */}
      <Container sx={{ py: 10 }}>
        <Typography
          variant="h4"
          textAlign="center"
          sx={{ fontWeight: 700, mb: 2 }}
        >
          Plans & Pricing
        </Typography>

        <Typography
          textAlign="center"
          sx={{ color: "gold", mb: 8 }}
        >
          Choose Your Trading Edge
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
         =
        </Box>
      </Container>

      {/* 🔥 MAGNETA SECTION */}
      <Container sx={{ py: 10 }}>
        <Box
          sx={{
            background: "#111",
            borderRadius: 4,
            p: { xs: 4, md: 6 },
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: 700, mb: 4 }}
          >
            How do Magneta & Magneta Support supercharge your strategy?
          </Typography>

          <Typography
            sx={{
              color: "#aaa",
              lineHeight: 2,
              mb: 5,
            }}
          >
            Introducing the Magneta and Magneta Support package —
            a powerful duo crafted to elevate your trading precision
            and profitability.
          </Typography>

          {/* MAGNETA */}
          <Box sx={{ mb: 5 }}>
            <Typography
              variant="h5"
              sx={{ color: "gold", mb: 2 }}
            >
              Magneta Indicator
            </Typography>

            <Typography sx={{ color: "#aaa", lineHeight: 2 }}>
              Unlock market movement foresight with Magneta.
              Identify where the market is likely to move and
              strategically wait for opportunities with confidence.
            </Typography>
          </Box>

          {/* SUPPORT */}
          <Box>
            <Typography
              variant="h5"
              sx={{ color: "gold", mb: 2 }}
            >
              Magneta Support Indicator
            </Typography>

            <Typography sx={{ color: "#aaa", lineHeight: 2 }}>
              While waiting for your predicted setup, Magneta Support
              helps capitalize on active market fluctuations for
              additional profitability.
            </Typography>
          </Box>
        </Box>
      </Container>

      {/* 🔥 HOW IT WORKS + BENEFITS */}
      <Container sx={{ py: 10 }}>
        <Box
          sx={{
            display: "flex",
            gap: 4,
            flexDirection: { xs: "column", md: "row" },
          }}
        >

          {/* LEFT */}
          <Box
            sx={{
              flex: 1,
              background: "#111",
              borderRadius: 4,
              p: 5,
            }}
          >
            <Typography
              variant="h5"
              sx={{ color: "gold", mb: 4 }}
            >
              How It Works?
            </Typography>

            {[
              "Magneta identifies key market points.",
              "Magneta Support capitalizes during waiting periods.",
              "Together they create a complete trading strategy.",
            ].map((item, i) => (
              <Typography
                key={i}
                sx={{ color: "#aaa", mb: 3, lineHeight: 1.8 }}
              >
                • {item}
              </Typography>
            ))}
          </Box>

          {/* RIGHT */}
          <Box
            sx={{
              flex: 1,
              background: "#111",
              borderRadius: 4,
              p: 5,
            }}
          >
            <Typography
              variant="h5"
              sx={{ color: "gold", mb: 4 }}
            >
              Benefits
            </Typography>

            {benefits.map((benefit, i) => (
              <Box key={i} sx={{ mb: 4 }}>
                <Typography
                  sx={{
                    fontWeight: 600,
                    mb: 1,
                  }}
                >
                  {benefit.title}
                </Typography>

                <Typography
                  sx={{
                    color: "#aaa",
                    lineHeight: 1.8,
                  }}
                >
                  {benefit.desc}
                </Typography>
              </Box>
            ))}
          </Box>

        </Box>
      </Container>

      {/* 🔥 FINAL CTA */}
      <Box sx={{ textAlign: "center", py: 10 }}>
        <Typography
          variant="h5"
          sx={{ mb: 3 }}
        >
          Elevate Your Trading Experience
        </Typography>

        <Typography
          sx={{
            color: "#aaa",
            maxWidth: 800,
            mx: "auto",
            mb: 5,
            lineHeight: 2,
          }}
        >
          Harness the power of anticipation and dynamic trading
          strategies to redefine your success in financial markets.
        </Typography>
      </Box>

    </Box>
  );
};