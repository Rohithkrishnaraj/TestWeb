import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
} from "@mui/material";

import classPic from "../../assets/classPic.png";
import icon1 from "../../assets/ConfusionAndOverwhelming.png";
import icon2 from "../../assets/ContinuousLoss.png";
import icon3 from "../../assets/IneffectiveStrategies.png";

export const RevenueRevolution = () => {

  const challenges = [
    {
      title: "Confusion & Overwhelm",
      desc: "Struggling with analysis paralysis?",
      icon: icon1,
    },
    {
      title: "Frequent Losses",
      desc: "Losing consistency in trading?",
      icon: icon2,
    },
    {
      title: "Ineffective Strategies",
      desc: "Strategies not delivering profits?",
      icon: icon3,
    },
  ];

  const benefits = [
    "Master Trading Psychology",
    "High Accuracy Strategies",
    "Reduce Losses",
    "Increase Confidence",
  ];

  return (
    <Box sx={{ background: "#0b0b0b", color: "#fff" }}>

      {/* 🔥 HERO */}
      <Box sx={{ py: 10, textAlign: "center" }}>
        <Typography variant="h3" sx={{ fontWeight: 700 }}>
          Revenue Revolution
        </Typography>
        <Typography sx={{ color: "#aaa", mt: 2 }}>
          Your 2-Day Trading Transformation Bootcamp
        </Typography>
      </Box>

      {/* 🔥 PROGRAM */}
      <Container sx={{ py: 6 }}>
        <Box
          sx={{
            display: "flex",
            gap: 4,
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography variant="h4" sx={{ mb: 2 }}>
              Boost Your Trading Success
            </Typography>

            <Typography sx={{ color: "#aaa", mb: 3 }}>
              Learn powerful strategies, psychology, and real-world execution
              techniques in this 2-day bootcamp.
            </Typography>

            <Button
              variant="contained"
              sx={{
                background: "gold",
                color: "#000",
                fontWeight: 600,
              }}
            >
              Register Now
            </Button>
          </Box>

          <Box
            component="img"
            src={classPic}
            sx={{
              width: "100%",
              maxWidth: 400,
              borderRadius: 3,
            }}
          />
        </Box>
      </Container>

      {/* 🔥 CHALLENGES */}
      <Container sx={{ py: 10 }}>
        <Typography variant="h4" sx={{ textAlign: "center", mb: 6 }}>
          Are you facing these challenges?
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))",
            gap: 4,
          }}
        >
          {challenges.map((c, i) => (
            <Box
              key={i}
              sx={{
                p: 3,
                background: "#111",
                borderRadius: 3,
                textAlign: "center",
                "&:hover": { transform: "translateY(-5px)" },
              }}
            >
              <img src={c.icon} width={50} />
              <Typography sx={{ mt: 2, fontWeight: 600 }}>
                {c.title}
              </Typography>
              <Typography sx={{ color: "#aaa", mt: 1 }}>
                {c.desc}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>

      {/* 🔥 COURSE DAYS */}
      <Container sx={{ py: 10 }}>
        <Typography variant="h4" sx={{ textAlign: "center", mb: 6 }}>
          What You Will Learn
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <Box>
            <Typography variant="h5">Day 1</Typography>
            <Typography sx={{ color: "#aaa" }}>
              Trading psychology, mindset, and strategies.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h5">Day 2</Typography>
            <Typography sx={{ color: "#aaa" }}>
              Advanced trading strategies and live market examples.
            </Typography>
          </Box>
        </Box>
      </Container>

      {/* 🔥 BENEFITS */}
      <Container sx={{ py: 10 }}>
        <Typography variant="h4" sx={{ textAlign: "center", mb: 6 }}>
          Benefits
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))",
            gap: 4,
          }}
        >
          {benefits.map((b, i) => (
            <Box
              key={i}
              sx={{
                p: 4,
                borderRadius: 3,
                background: "#111",
                textAlign: "center",
              }}
            >
              <Typography>{b}</Typography>
            </Box>
          ))}
        </Box>
      </Container>

      {/* 🔥 CTA */}
      <Box sx={{ textAlign: "center", py: 10 }}>
        <Button
          variant="contained"
          sx={{
            background: "gold",
            color: "#000",
            fontSize: 18,
            px: 5,
          }}
        >
          Join Now
        </Button>
      </Box>

    </Box>
  );
};