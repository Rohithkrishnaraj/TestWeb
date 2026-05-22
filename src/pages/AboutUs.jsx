import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
} from "@mui/material";

import { Link } from "react-router-dom";
import { FaChessKing } from "react-icons/fa";

export const AboutUs = () => {
  const [activeText, setActiveText] = useState("text1");

  const tabs = [
    {
      key: "text1",
      title: "Visionary Leadership",
      content:
        "Vinil, the architect behind INVIKINGS, envisioned a platform that transcends traditional trading education. Drawing from years of experience, Vinil recognized the need for a comprehensive approach that combines coaching excellence, innovative indicators, and a thriving community. INVIKINGS reflects his commitment to fostering a trading environment where every individual, regardless of experience, can ascend to trading royalty.",
    },
    {
      key: "text2",
      title: "Coaching Excellence",
      content:
        "INVIKINGS' coaching programs are a testament to Vinil's commitment to excellence. From foundational training to advanced strategies, each module is designed to provide traders with a strategic understanding of the markets. The emphasis on live trading classes allows traders to experience real-time market dynamics.",
    },
    {
      key: "text3",
      title: "Innovative Indicators",
      content:
        "Vinil’s vision extends to groundbreaking indicators. The flagship MB Indicator was built with simplicity and precision in mind, empowering traders to make informed decisions confidently and consistently.",
    },
    {
      key: "text4",
      title: "Community and Camaraderie",
      content:
        "Vinil understands the significance of community in the trading journey. The Viking Clan embodies collaboration, shared learning, and collective growth — creating not just traders, but a strong trading tribe.",
    },
    {
      key: "text5",
      title: "Join Vinil's Vision",
      content:
        "INVIKINGS is an invitation to join a transformative trading journey. Whether you're a beginner or an experienced trader, this movement is built to redefine success through wisdom, strategy, and community.",
    },
  ];

  const activeTab = tabs.find((tab) => tab.key === activeText);

  return (
    <Box
      sx={{
        background: "#0b0b0b",
        color: "#fff",
        minHeight: "100vh",
      }}
    >

      {/* 🔥 HERO */}
      <Box
        sx={{
          py: 12,
          textAlign: "center",
          background:
            "linear-gradient(to bottom, rgba(255,215,0,0.08), transparent)",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            mb: 2,
            letterSpacing: 2,
          }}
        >
          INVIKINGS
        </Typography>

        <Typography
          sx={{
            color: "gold",
            fontSize: "1.2rem",
            fontStyle: "italic",
          }}
        >
          <marquee>
            Your Royal Path to Financial Sovereignty
          </marquee>
        </Typography>
      </Box>

      {/* 🔥 ABOUT SECTION */}
      <Container sx={{ py: 10 }}>
        <Box
          sx={{
            display: "flex",
            gap: 6,
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
          }}
        >

          {/* LEFT */}
          <Box sx={{ flex: 1 }}>
            <Typography
              sx={{
                color: "gold",
                fontWeight: 700,
                mb: 2,
              }}
            >
              About Us
            </Typography>

            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                mb: 3,
              }}
            >
              About INVIKINGS
            </Typography>

            <Typography
              variant="h6"
              sx={{
                mb: 4,
                color: "#ddd",
                lineHeight: 1.8,
              }}
            >
              Navigating Success in Trading, Founded by Vinil
            </Typography>

            <Typography
              sx={{
                color: "#aaa",
                lineHeight: 2,
                mb: 5,
              }}
            >
              Welcome to INVIKINGS, a trading realm founded by Vinil,
              a visionary leader driven by the passion to democratize
              trading expertise and empower individuals to conquer the
              financial markets. Established on the principles of wisdom,
              strategy, and community, INVIKINGS is more than a coaching
              and indicator provider — it’s a movement to redefine success
              in trading.
            </Typography>

            {/* <Button
              component={Link}
              to="/contact"
              sx={{
                background: "gold",
                color: "#000",
                px: 4,
                py: 1.5,
                borderRadius: 3,
                fontWeight: 700,
                "&:hover": {
                  background: "#e6c200",
                },
              }}
            >
              Contact Us
            </Button> */}
          </Box>

          {/* RIGHT IMAGE */}
          <Box sx={{ flex: 1 }}>
            <Box
              component="img"
              src="https://invikings.com/wp-content/uploads/2023/12/01f56c54-79be-4ba7-a48a-fbd05ab4b25b-914x1024.jpg"
              sx={{
                width: "100%",
                maxWidth: 500,
                borderRadius: 5,
                objectFit: "cover",
                boxShadow: "0 10px 40px rgba(255,215,0,0.15)",
              }}
            />
          </Box>

        </Box>
      </Container>

      {/* 🔥 TABS SECTION */}
      <Container sx={{ pb: 10 }}>

        {/* BUTTONS */}
        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexWrap: "wrap",
            justifyContent: "center",
            mb: 6,
          }}
        >
          {tabs.map((tab) => (
            <Button
              key={tab.key}
              onClick={() => setActiveText(tab.key)}
              sx={{
                background:
                  activeText === tab.key
                    ? "gold"
                    : "rgba(255,255,255,0.05)",

                color:
                  activeText === tab.key
                    ? "#000"
                    : "#fff",

                px: 3,
                py: 1.5,
                borderRadius: 3,
                textTransform: "none",
                fontWeight: 700,

                "&:hover": {
                  background:
                    activeText === tab.key
                      ? "#e6c200"
                      : "rgba(255,255,255,0.1)",
                },
              }}
            >
              {tab.title}
            </Button>
          ))}
        </Box>

        {/* CONTENT CARD */}
        <Box
          sx={{
            background: "#111",
            borderRadius: 5,
            p: { xs: 4, md: 6 },
            maxWidth: 1000,
            mx: "auto",
            border: "1px solid rgba(255,215,0,0.08)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              mb: 4,
            }}
          >
            <FaChessKing size={28} color="gold" />

            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                color: "gold",
              }}
            >
              {activeTab.title}
            </Typography>
          </Box>

          <Typography
            sx={{
              color: "#aaa",
              lineHeight: 2.2,
              fontSize: "1.05rem",
            }}
          >
            {activeTab.content}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};