import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { SiTradingview } from "react-icons/si";

import classPic from "../assets/classPic.png";
import PicOne from "../assets/BootCampPicOne.png";
import PicTwo from "../assets/BootCampPicTwo.png";

import icon1 from "../assets/ConfusionAndOverwhelming.png";
import icon2 from "../assets/ContinuousLoss.png";
import icon3 from "../assets/IneffectiveStrategies.png";
import icon4 from "../assets/TimeConsumingResearch.png";
import icon5 from "../assets/StressAndAnxiety.png";
import icon6 from "../assets/LackOfConfidence.png";
import icon7 from "../assets/Isolation.png";
import icon8 from "../assets/MissedOpportunities.png";
import icon9 from "../assets/FearOfFailure.png";

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
          Whether you're a seasoned trader looking to refine your approach or a beginner wanting to break into the trading world, this bootcamp offers the tools and knowledge to accelerate your success
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
  component="a"
  href="https://live.invikings.com/webinar#submit"
  target="_blank"
  rel="noopener noreferrer"
  sx={{
    mt: 2,
    background: "gold",
    color: "#000",
    fontWeight: 700,
    py: 1.5,
    borderRadius: 3,
    textTransform: "none",
    fontSize: "1rem",
    transition: "0.3s",
    "&:hover": {
      background: "#e6c200",
      transform: "translateY(-2px)",
    },
  }}
>

 Register Now !!!
 
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
  <Typography
    variant="h4"
    textAlign="center"
    mb={2}
    sx={{ fontWeight: 700 }}
  >
    What Will You Learn In This Webinar?
  </Typography>

  <Typography
    textAlign="center"
    sx={{ color: "gold", mb: 6 }}
  >
    Journey into Knowledge
  </Typography>

  {/* 🔥 DAY 1 */}
  <Box
    sx={{
      display: "flex",
      gap: 6,
      mb: 10,
      flexDirection: { xs: "column", md: "row" },
      alignItems: "flex-start",
      background: "#111",
      p: 4,
      borderRadius: 4,
    }}
  >
    {/* IMAGE */}
    <Box
      component="img"
      src={PicOne}
      sx={{
        width: "100%",
        maxWidth: 400,
        borderRadius: 3,
        objectFit: "cover",
      }}
    />

    {/* CONTENT */}
    <Box sx={{ flex: 1 }}>
      <Typography
        variant="h4"
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          mb: 3,
          color: "gold",
        }}
      >
        Day - 1
      </Typography>

      <Typography
        variant="h5"
        sx={{ mb: 3, fontWeight: 600 }}
      >
        "Mastering Trading Psychology and Goal Setting"
      </Typography>

      <Typography sx={{ color: "#aaa", lineHeight: 1.8, mb: 4 }}>
        Success in trading starts with mastering your mind. On Day 1,
        we delve deep into the psychology of trading, offering you
        the tools and techniques to not only understand your emotions
        but to control and channel them into a winning mindset.
        Here's a detailed breakdown of the topics covered:
      </Typography>

      {/* POINTS */}
      {[
        {
          title: "1. Understanding Trading Psychology",
          desc: "Your trading psychology plays a critical role in your decision-making process. On Day 1, we explore how emotions such as fear, greed, and overconfidence can impact your trading performance. You will learn to identify these psychological patterns and discover techniques to overcome them, ensuring that your mind is always working in your favor.",
        },
        {
          title: "2. Your Psychology Test",
          desc: "We provide a custom trading psychology test that allows you to identify your behavioral strengths and weaknesses. This personalized assessment helps tailor the bootcamp to your specific needs, enabling you to focus on the areas that require improvement. It will be a game-changer for traders who are unaware of the psychological traps they might be falling into.",
        },
        {
          title: "3. Candle Stick Pattern Strategy",
          desc: "Candle stick patterns are crucial for reading price action. We'll explore the most effective candlestick patterns that reveal potential market moves. You will learn how to spot these patterns in real-time and use them as the foundation of your trading strategy",
        },
        {
          title: "4. How To Overcome Failing Trading Psychology",
          desc: "A lot of traders fall into common psychological traps that lead to poor decision-making and financial losses. This session will guide you on overcoming these psychological barriers, including strategies for dealing with losing trades, maintaining discipline, and developing emotional resilience in volatile markets.",
        },
        {
          title: "5. Setting Realistic Trading Goals",
          desc: " Goal setting is essential for long-term success in trading. This part of the bootcamp will help you define clear, achievable trading goals, whether you’re aiming for daily targets, monthly returns, or long-term financial freedom. We'll teach you how to align your goals with your trading plan and strategies, keeping you on the right track.",
        },
      ].map((item, index) => (
        <Box key={index} sx={{ mb: 4 }}>
          <Typography
            sx={{
              color: "gold",
              fontWeight: 600,
              mb: 1,
            }}
          >
            {item.title}
          </Typography>

          <Typography
            sx={{
              color: "#aaa",
              lineHeight: 1.8,
            }}
          >
            {item.desc}
          </Typography>
        </Box>
      ))}
    </Box>
  </Box>

  {/* 🔥 DAY 2 */}
  <Box
    sx={{
      display: "flex",
      gap: 6,
      flexDirection: { xs: "column", md: "row" },
      alignItems: "flex-start",
      background: "#111",
      p: 4,
      borderRadius: 4,
    }}
  >
    {/* IMAGE */}
    <Box
      component="img"
      src={PicTwo}
      sx={{
        width: "100%",
        maxWidth: 400,
        borderRadius: 3,
        objectFit: "cover",
      }}
    />

    {/* CONTENT */}
    <Box sx={{ flex: 1 }}>
      <Typography
        variant="h4"
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          mb: 3,
          color: "gold",
        }}
      >
        Day - 2
      </Typography>

      <Typography
        variant="h5"
        sx={{ mb: 3, fontWeight: 600 }}
      >
        "Advanced Trading Strategies and Live Market Examples"
      </Typography>

      <Typography sx={{ color: "#aaa", lineHeight: 1.8, mb: 4 }}>
        Day 2 is all about taking your trading to the next level. We’ll cover advanced strategies and show you how
        to execute them in live market scenarios. This is where theory meets practical application, allowing you to
        walk away with actionable strategies that you can implement immediately.
      </Typography>

      {/* POINTS */}
      {[
        {
          title:
            "1. SMC Concept (Smart Money Concept) with Live Market Examples",
          desc: `Understanding how the "smart money" (institutional traders) operates can significantly improve your trading performance. We'll teach you the Smart Money Concept (SMC), a strategy that helps you identify when large institutions are entering or exiting the market. You will learn to track their activity and trade alongside them for higher accuracy and profitability. Live market examples will make this concept easy to understand and apply in real-time.`,
        },
        {
          title: "2. Price Action Trading",
          desc: "Price action is one of the most powerful tools in a trader’s arsenal. We’ll show you how to read pure price action—free from technical indicators—giving you an edge in understanding market sentiment and momentum. This session will cover key price action strategies like breakouts, pullbacks, and trend continuations, providing you with the tools to make confident trading decisions.",
        },
        {
          title: "3. How To Take Entry and Exit?",
          desc: "Knowing when to enter and exit a trade is vital for maximizing profits and minimizing losses. We’ll guide you through the best techniques for timing your trades. You'll learn how to set precise entry points, manage risk with stop-loss orders, and plan profitable exits.",
        },
      ].map((item, index) => (
        <Box key={index} sx={{ mb: 4 }}>
          <Typography
            sx={{
              color: "gold",
              fontWeight: 600,
              mb: 1,
            }}
          >
            {item.title}
          </Typography>

          <Typography
            sx={{
              color: "#aaa",
              lineHeight: 1.8,
            }}
          >
            {item.desc}
          </Typography>
        </Box>
      ))}
    </Box>
  </Box>
</Container>

      
      {/* 🔥 BENEFITS TEXT */}
<Container sx={{ py: 10 }}>

  {/* HEADING */}
  <Typography
    variant="h4"
    textAlign="center"
    sx={{ fontWeight: 700, mb: 2 }}
  >
    What Benefits Do Our Sessions Provide For You?
  </Typography>

  <Typography
    textAlign="center"
    sx={{ color: "gold", mb: 8 }}
  >
    Transformative Learning
  </Typography>

  {/* BENEFITS POINTS */}
  <Box
    sx={{
      maxWidth: 1000,
      mx: "auto",
      mb: 10,
    }}
  >
    {[
      {
        title: "65% Accuracy Trading Tool",
        desc: "Every attendee will receive access to a 65% accuracy trading tool. This tool has been designed to enhance your trading decisions by offering real-time market analysis and insights, helping you execute more profitable trades.",
      },
      {
        title: "Trading Psychology Mastery",
        desc: "By understanding your unique psychological profile, you'll walk away with the knowledge to improve your trading habits, conquer emotional pitfalls, and make decisions based on logic, not emotions.",
      },
      {
        title: "Proven Trading Strategies",
        desc: "With the SMC concept and price action methods, you’ll have two robust strategies that can be applied across different markets and time frames.",
      },
      {
        title: "Goal-Oriented Trading Approach",
        desc: "Leave the bootcamp with a clear trading plan and set of goals. You’ll know exactly how to measure your progress and keep improving as a trader.",
      },
    ].map((item, index) => (
      <Box
        key={index}
        sx={{
          mb: 5,
          p: 3,
          background: "#111",
          borderRadius: 3,
        }}
      >
        <Typography
          sx={{
            color: "gold",
            fontWeight: 600,
            mb: 2,
            display: "flex",
            alignItems: "center",
            gap: 1,
            fontSize: "1.1rem",
          }}
        >
          <FaArrowAltCircleRight />
          {item.title}
        </Typography>

        <Typography
          sx={{
            color: "#aaa",
            lineHeight: 1.9,
          }}
        >
          {item.desc}
        </Typography>
      </Box>
    ))}
  </Box>

  {/* BENEFITS GRID */}
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))",
      gap: 4,
      mb: 10,
    }}
  >
    {[
      {
        icon: icon1,
        title: "Transform your trading journey",
        bg: "#122437",
      },
      {
        icon: icon2,
        title: "Elevate Your Confidence",
        bg: "#FFC107",
        dark: true,
      },
      {
        icon: icon3,
        title: "Multiply Your Profits",
        bg: "#122437",
      },
      {
        icon: icon4,
        title: "Master the negligible loss formula",
        bg: "#122437",
      },
      {
        icon: icon5,
        title: "Eliminate costly mistakes",
        bg: "#FFC107",
        dark: true,
      },
      {
        icon: icon6,
        title: "Reduce financial stress",
        bg: "#122437",
      },
    ].map((benefit, index) => (
      <Box
        key={index}
        sx={{
          background: benefit.bg,
          borderRadius: 4,
          p: 5,
          textAlign: "center",
          transition: "0.3s",
          "&:hover": {
            transform: "translateY(-8px)",
          },
        }}
      >
        <Box
          component="img"
          src={benefit.icon}
          sx={{
            width: 90,
            height: 90,
            objectFit: "contain",
            mb: 3,
          }}
        />

        <Typography
          sx={{
            fontWeight: 600,
            color: benefit.dark ? "#000" : "#fff",
            fontSize: "1.1rem",
          }}
        >
          {benefit.title}
        </Typography>
      </Box>
    ))}
  </Box>

  {/* WHY JOIN */}
  <Box
    sx={{
      maxWidth: 1000,
      mx: "auto",
      textAlign: "center",
      background: "#111",
      p: { xs: 4, md: 6 },
      borderRadius: 4,
    }}
  >
    <Typography
      variant="h4"
      sx={{
        color: "gold",
        fontWeight: 700,
        mb: 4,
      }}
    >
      Why Join the Revenue Revolution Bootcamp?
    </Typography>

    <Typography
      sx={{
        color: "#aaa",
        lineHeight: 2,
        mb: 4,
      }}
    >
      This bootcamp is unlike any other. It combines psychology with advanced
      trading techniques to give you a well-rounded education. Whether you
      struggle with maintaining emotional control, don’t know how to set
      realistic trading goals, or are looking for advanced strategies that
      work, the Revenue Revolution Bootcamp will provide the solutions.
    </Typography>

    <Typography
      sx={{
        color: "#aaa",
        lineHeight: 2,
        mb: 6,
      }}
    >
      You will be guided by experts who have years of experience in both
      trading and coaching, offering practical and actionable knowledge.
      This event isn’t just about theory — it’s about giving you the tools
      you need to achieve real, tangible success in the trading world.
    </Typography>

    <Typography
      variant="h4"
      sx={{
        color: "gold",
        fontWeight: 700,
        mb: 3,
      }}
    >
      Don’t Miss Out !!!
    </Typography>

    <Typography
      sx={{
        color: "#ddd",
        fontSize: "1.1rem",
        lineHeight: 2,
        fontStyle: "italic",
      }}
    >
      "If you're serious about trading and want to improve your performance,
      this bootcamp is for you. Reserve your spot today and take the first
      step toward becoming the confident, profitable trader you've always
      wanted to be."
    </Typography>
  </Box>
</Container>

      {/* 🔥 FINAL CTA */}
      <Box sx={{ textAlign: "center", py: 10 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Don’t Miss Out !!!
        </Typography>

        <Typography sx={{ color: "#aaa", mb: 4 }}>
          Take the first step toward becoming a confident, profitable trader.
        </Typography>

        <Button
          component="a"
          href="https://live.invikings.com/webinar#submit"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ background: "gold", color: "#000", px: 5 }}>
          Join Now
        </Button>
      </Box>

    </Box>
  );
};