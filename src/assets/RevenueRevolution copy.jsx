import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { SiTradingview } from "react-icons/si";

import classPic from "../../assets/classPic.png";
import PicOne from "../../assets/BootCampPicOne.png";
import PicTwo from "../../assets/BootCampPicTwo.png";

import icon1 from "../../assets/ConfusionAndOverwhelming.png";
import icon2 from "../../assets/ContinuousLoss.png";
import icon3 from "../../assets/IneffectiveStrategies.png";
import icon4 from "../../assets/TimeConsumingResearch.png";
import icon5 from "../../assets/StressAndAnxiety.png";
import icon6 from "../../assets/LackOfConfidence.png";
import icon7 from "../../assets/Isolation.png";
import icon8 from "../../assets/MissedOpportunities.png";
import icon9 from "../../assets/FearOfFailure.png";

export const RevenueRevolution = () => {

  const challenges = [
    { title: "Confusion and Overwhelm", desc: "Are you struggling with trading analysis paralysis?", icon: icon1 },
    { title: "Frequent Losses", desc: "Experiencing frequent trading losses?", icon: icon2 },
    { title: "Ineffective Strategies", desc: "Strategies not delivering profits?", icon: icon3 },
    { title: "Time Consuming Research", desc: "Too much time spent researching?", icon: icon4 },
    { title: "Stress and Anxiety", desc: "Stress affecting your trading?", icon: icon5 },
    { title: "Lack of Confidence", desc: "Lack confidence in decisions?", icon: icon6 },
    { title: "Isolation", desc: "Trading alone without guidance?", icon: icon7 },
    { title: "Missed Opportunities", desc: "Missing profitable trades?", icon: icon8 },
    { title: "Fear of Failure", desc: "Fear holding you back?", icon: icon9 },
  ];

  return (
    <Box sx={{ background: "#0b0b0b", color: "#fff" }}>

      {/* 🔥 HERO */}
      <Box sx={{ py: 10, textAlign: "center" }}>
        <Typography variant="h3" fontWeight={700}>Revenue Revolution</Typography>
        <Typography sx={{ mt: 2, color: "#aaa" }}>
          Your Epic Trading Journey Begins Here!
        </Typography>
      </Box>

      {/* 🔥 INTRO */}
      <Container sx={{ textAlign: "center", py: 6 }}>
        <Typography variant="h5" sx={{ color: "gold" }}>
          Revenue Revolution Bootcamp
        </Typography>

        <Typography sx={{ mt: 3, color: "#aaa", maxWidth: 900, mx: "auto" }}>
          Welcome to the Revenue Revolution Bootcamp, an immersive two-day event designed to
          transform your trading mindset and equip you with powerful, high-accuracy strategies.
        </Typography>
      </Container>

      {/* 🔥 MAIN CARD */}
      <Container sx={{ py: 6 }}>
        <Box sx={{ display: "flex", gap: 4, flexDirection: { xs: "column", md: "row" } }}>
          
          {/* LEFT */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h4">Revenue Revolution</Typography>

            <Typography sx={{ mt: 2, color: "#aaa" }}>
              Double your monthly network without complex techniques by spending just 10 minutes per day.
            </Typography>

            <Typography sx={{ mt: 3, fontWeight: 600 }}>
              How will this workshop help?
            </Typography>

            {[
              "Unleash the Potential of Simplicity",
              "Transform Your Mindset",
              "Implement Effective Strategies",
              "Minimize Losses, Maximize Profits",
            ].map((item, i) => (
              <Typography key={i} sx={{ mt: 1 }}>
                <FaArrowAltCircleRight color="gold" /> {item}
              </Typography>
            ))}
          </Box>

          {/* RIGHT */}
          <Box sx={{ flex: 1 }}>
            <Box component="img" src={classPic} sx={{ width: "100%", borderRadius: 3 }} />

            <Box sx={{ mt: 3 }}>
              <Typography>Duration: 2 Days</Typography>
              <Typography>Skill Level: Expert</Typography>
              <Typography>Language: English</Typography>

              <Button
                fullWidth
                sx={{ mt: 2, background: "gold", color: "#000" }}
              >
                Register Now
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>

      {/* 🔥 CHALLENGES */}
      <Container sx={{ py: 10 }}>
        <Typography variant="h4" textAlign="center" mb={6}>
          Are you facing these challenges?
        </Typography>

        <Box sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))",
          gap: 4,
        }}>
          {challenges.map((c, i) => (
            <Box key={i} sx={{ p: 3, background: "#111", borderRadius: 3, textAlign: "center" }}>
              <img src={c.icon} width={50} />
              <Typography sx={{ mt: 2 }}>{c.title}</Typography>
              <Typography sx={{ color: "#aaa" }}>{c.desc}</Typography>
            </Box>
          ))}
        </Box>
      </Container>

      {/* 🔥 COURSE DAYS */}
      <Container sx={{ py: 10 }}>
        <Typography variant="h4" textAlign="center" mb={6}>
          What Will You Learn?
        </Typography>

        {/* DAY 1 */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5">
            <SiTradingview /> Day 1 - Trading Psychology
          </Typography>

          <Typography sx={{ color: "#aaa", mt: 2 }}>
            Master trading psychology, control emotions, and set realistic goals.
          </Typography>
        </Box>

        {/* DAY 2 */}
        <Box>
          <Typography variant="h5">
            <SiTradingview /> Day 2 - Advanced Strategies
          </Typography>

          <Typography sx={{ color: "#aaa", mt: 2 }}>
            Learn SMC concepts, price action, and real-time trading execution.
          </Typography>
        </Box>
      </Container>

      {/* 🔥 BENEFITS TEXT */}
      <Container sx={{ py: 10 }}>
        <Typography variant="h4" textAlign="center" mb={6}>
          Benefits
        </Typography>

        {[
          "65% Accuracy Trading Tool",
          "Trading Psychology Mastery",
          "Proven Trading Strategies",
          "Goal-Oriented Approach",
        ].map((b, i) => (
          <Typography key={i} sx={{ mb: 2 }}>
            <FaArrowAltCircleRight color="gold" /> {b}
          </Typography>
        ))}
      </Container>

      {/* 🔥 FINAL CTA */}
      <Box sx={{ textAlign: "center", py: 10 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Don’t Miss Out !!!
        </Typography>

        <Typography sx={{ color: "#aaa", mb: 4 }}>
          Take the first step toward becoming a confident, profitable trader.
        </Typography>

        <Button sx={{ background: "gold", color: "#000", px: 5 }}>
          Join Now
        </Button>
      </Box>

    </Box>
  );
};