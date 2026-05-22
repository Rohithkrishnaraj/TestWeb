import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  Box,
  Container,
  Typography,
  Button,
} from "@mui/material";

import {
  FaArrowAltCircleRight,
  FaChessKing,
  FaRupeeSign,
} from "react-icons/fa";

import CrownPic from "../assets/crownMembershipPic2.png";


export const CrownMembership = () => {
  const [open, setOpen] = useState(false);
  const [membershipPlans, setMembershipPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/crown_membership_plan")
      .then((response) => {
        setMembershipPlans(response.data);
      })
      .catch((error) => {
        console.error("Error fetching membership plans:", error);
      });
  }, []);

  const handleDialog = (plan) => {
    setSelectedPlan(plan);
    setOpen(true);
  };

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-IN").format(price);

  const features = [
    {
      title: "Beginner’s Session for Forex & Indian Market",
      desc: "Master trading fundamentals with simplified real-world learning.",
    },
    {
      title: "Tracker Sheet for Discipline",
      desc: "Track every trade and improve consistency with structured journaling.",
    },
    {
      title: "Mandatory Trading Journal",
      desc: "Develop winning habits through self-analysis and reflection.",
    },
    {
      title: "90% Accuracy Tools",
      desc: "Use advanced tools for smarter and more confident trading.",
    },
    {
      title: "Live Trading Sessions",
      desc: "Attend live sessions 4 days a week with expert guidance.",
    },
    {
      title: "Weekly Q&A Sessions",
      desc: "Clarify doubts directly with experienced traders.",
    },
    {
      title: "Weekly Forex Classes",
      desc: "Deep dive into Forex strategies and market structure.",
    },
    {
      title: "News Time Discussion",
      desc: "Stay ahead of global market-moving events and discussions.",
    },
    {
      title: "Access to Recordings",
      desc: "Lifetime access to all session recordings and materials.",
    },
    {
      title: "Account Opening Support",
      desc: "Get full assistance setting up your trading accounts.",
    },
  ];

  return (
    <Box sx={{ background: "#0b0b0b", color: "#fff" }}>

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
          variant="h3"
          sx={{
            fontWeight: 700,
            mb: 2,
          }}
        >
          Crown Membership
        </Typography>

        <Typography
          sx={{
            color: "#aaa",
            maxWidth: 700,
            mx: "auto",
            lineHeight: 2,
          }}
        >
          Your Ultimate Trading Companion For Life.
          Unlock a complete trading ecosystem with lifetime access
          to tools, mentorship, live trading sessions, and advanced strategies.
        </Typography>
      </Box>

      {/* 🔥 MAIN SECTION */}
      <Container sx={{ py: 10 }}>
        <Box
          sx={{
            display: "flex",
            gap: 6,
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
          }}
        >

          {/* IMAGE */}
          <Box sx={{ flex: 1 }}>
            <Box
              component="img"
              src={CrownPic}
              sx={{
                width: "100%",
                maxWidth: 500,
                borderRadius: 4,
                boxShadow: "0 10px 40px rgba(255,215,0,0.15)",
              }}
            />
          </Box>

          {/* CONTENT */}
          <Box sx={{ flex: 1 }}>
            <Typography
              sx={{
                color: "gold",
                fontWeight: 700,
                mb: 2,
                letterSpacing: 1,
              }}
            >
              LIFETIME ACCESS
            </Typography>

            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                mb: 4,
                lineHeight: 1.4,
              }}
            >
              "CROWN MEMBERSHIP"
              <br />
              Your Trading Growth Ecosystem
            </Typography>

            <Typography
              sx={{
                color: "#aaa",
                lineHeight: 2,
                mb: 4,
              }}
            >
              Designed for both beginners and professional traders,
              Crown Membership gives you lifetime access to live trading,
              mentorship, high-accuracy tools, trading psychology guidance,
              and structured learning systems.
            </Typography>

            {/* PRICE */}
            {membershipPlans.length > 0 && (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  mb: 4,
                }}
              >
                <FaRupeeSign size={28} color="gold" />

                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    color: "gold",
                  }}
                >
                  {formatPrice(membershipPlans[0].price)}
                </Typography>

                <Typography sx={{ color: "#aaa" }}>
                  Lifetime Access
                </Typography>
              </Box>
            )}

            {/* CTA */}
            <Button
              fullWidth
              onClick={() => handleDialog(membershipPlans[0])}
              sx={{
                background: "gold",
                color: "#000",
                py: 1.8,
                borderRadius: 3,
                fontWeight: 700,
                fontSize: "1rem",
                textTransform: "none",
                "&:hover": {
                  background: "#e6c200",
                },
              }}
            >
              <marquee>
                <FaChessKing />
                &nbsp;&nbsp; Buy Crown Membership Now
              </marquee>
            </Button>
          </Box>

        </Box>
      </Container>

      {/* 🔥 FEATURES */}
      <Container sx={{ py: 10 }}>
        <Typography
          variant="h4"
          textAlign="center"
          sx={{ fontWeight: 700, mb: 2 }}
        >
          What You Get With Crown Membership
        </Typography>

        <Typography
          textAlign="center"
          sx={{ color: "gold", mb: 8 }}
        >
          Lifetime Trading Advantage
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(280px,1fr))",
            gap: 4,
          }}
        >
          {features.map((feature, index) => (
            <Box
              key={index}
              sx={{
                background: "#111",
                p: 4,
                borderRadius: 4,
                transition: "0.3s",
                border: "1px solid rgba(255,215,0,0.08)",
                "&:hover": {
                  transform: "translateY(-8px)",
                  borderColor: "rgba(255,215,0,0.3)",
                },
              }}
            >
              <Typography
                sx={{
                  color: "gold",
                  fontWeight: 700,
                  mb: 2,
                  lineHeight: 1.6,
                }}
              >
                {feature.title}
              </Typography>

              <Typography
                sx={{
                  color: "#aaa",
                  lineHeight: 1.9,
                }}
              >
                {feature.desc}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>

      {/* 🔥 WHY CROWN */}
      <Container sx={{ py: 10 }}>
        <Box
          sx={{
            background: "#111",
            borderRadius: 5,
            p: { xs: 4, md: 7 },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: 4,
              textAlign: "center",
            }}
          >
            Why Traders Choose Crown Membership?
          </Typography>

          {[
            "Lifetime access with no renewal fees.",
            "Structured mentorship and discipline system.",
            "Professional trading tools and live guidance.",
            "Complete ecosystem for Forex & Indian Markets.",
            "Built for consistency, confidence, and profitability.",
          ].map((item, index) => (
            <Typography
              key={index}
              sx={{
                color: "#aaa",
                mb: 3,
                lineHeight: 2,
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <FaArrowAltCircleRight color="gold" />
              {item}
            </Typography>
          ))}
        </Box>
      </Container>

      {/* 🔥 LIFETIME ACCESS */}
      <Container sx={{ py: 10 }}>
        <Box
          sx={{
            textAlign: "center",
            background:
              "linear-gradient(to right, rgba(255,215,0,0.08), rgba(255,215,0,0.02))",
            p: { xs: 4, md: 7 },
            borderRadius: 5,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: 4,
              color: "gold",
            }}
          >
            Lifetime Access
          </Typography>

          <Typography
            sx={{
              color: "#ddd",
              lineHeight: 2,
              maxWidth: 900,
              mx: "auto",
              mb: 5,
            }}
          >
            Once you join Crown Membership, you’ll never worry about
            renewals again. Enjoy permanent access to live trading,
            expert mentorship, trading tools, Forex classes,
            recordings, and continuous learning resources.
          </Typography>

          <Button
            onClick={() => handleDialog(membershipPlans[0])}
            sx={{
              background: "gold",
              color: "#000",
              px: 5,
              py: 1.5,
              borderRadius: 3,
              fontWeight: 700,
              "&:hover": {
                background: "#e6c200",
              },
            }}
          >
            Join Crown Membership
          </Button>
        </Box>
      </Container>

     
    </Box>
  );
};