import React from "react";
import { Box, Container, Typography, Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";

const feedbacks = [
  {
    name: "Parthi",
    text: "MG Indicator is like a personal compass in the market. Clear signals and strong accuracy.",
  },
  {
    name: "Ravi",
    text: "Live trading classes completely changed my trading mindset and precision.",
  },
  {
    name: "Santhosh",
    text: "Real-time guidance and strategies made trading much more confident and profitable.",
  },
];

export const Home = () => {
  return (
    <Box sx={{ background: "#0b0b0b", color: "#fff" }}>

      {/* 🔥 HERO */}
      <Box
        sx={{
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          background: "linear-gradient(to right, #000, #111)",
        }}
      >
        <Container>
          <Typography variant="h3" sx={{ fontWeight: 700 }}>
            Master Trading Like a Pro
          </Typography>

          <Typography sx={{ mt: 2, color: "#aaa" }}>
            Learn, Analyze & Profit with INVIKINGS strategies and tools.
          </Typography>

          <Box sx={{ mt: 4 }}>
            <Button
              component={Link}
              to="/revenueRevolution"
              variant="contained"
              sx={{ mr: 2, background: "gold", color: "#000" }}
            >
              Get Started
            </Button>

            <Button
              component={Link}
              to="/royalIndicators"
              variant="outlined"
              sx={{ color: "gold", borderColor: "gold" }}
            >
              Explore Tools
            </Button>
          </Box>
        </Container>
      </Box>

      {/* 💡 ABOUT PREVIEW */}
      <Container sx={{ py: 10 }}>
        <Grid container spacing={6} alignItems="center">

          {/* IMAGE */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                width: "100%",
                height: { xs: 300, md: 450 },
                borderRadius: 3,
                overflow: "hidden",
                "& img": {
                  transition: "0.4s",
                },
                "&:hover img": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <Box
                component="img"
                src="https://invikings.com/wp-content/uploads/2023/12/01f56c54-79be-4ba7-a48a-fbd05ab4b25b-914x1024.jpg"
                alt="about"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Grid>

          {/* TEXT */}
          <Grid item xs={12} md={6}>
            <Box sx={{ maxWidth: 500 }}>
              <Typography variant="h4" sx={{ fontWeight: 600 }}>
                About INVIKINGS
              </Typography>

              <Typography sx={{ mt: 2, color: "#aaa", lineHeight: 1.8 }}>
                We empower traders with proven strategies, innovative indicators,
                and real-time learning to help you navigate financial markets with confidence.
              </Typography>

              <Button
                component={Link}
                to="/about"
                sx={{ mt: 3, color: "gold" }}
              >
                Learn More →
              </Button>
            </Box>
          </Grid>

        </Grid>
      </Container>

      {/* 🧩 PROGRAMS */}
      <Box sx={{ py: 10, background: "#111" }}>
        <Container>
          <Typography variant="h4" sx={{ textAlign: "center", mb: 6 }}>
            Our Programs
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {[
              {
                title: "Revenue Revolution",
                path: "/revenueRevolution",
                desc: "2-day intensive trading program.",
              },
              {
                title: "Royal Indicators",
                path: "/royalIndicators",
                desc: "Advanced tools for precision trading.",
              },
              {
                title: "Membership Plans",
                path: "/crownMembership",
                desc: "Exclusive access to premium features.",
              },
            ].map((item) => (
              <Grid item xs={12} md={4} key={item.title}>
                <Box
                  sx={{
                    p: 4,
                    borderRadius: 3,
                    background: "#0b0b0b",
                    textAlign: "center",
                    transition: "0.3s",
                    height: "100%",
                    "&:hover": {
                      transform: "translateY(-8px)",
                    },
                  }}
                >
                  <Typography variant="h6" sx={{ mb: 2 }}>
                    {item.title}
                  </Typography>

                  <Typography sx={{ color: "#aaa", mb: 3 }}>
                    {item.desc}
                  </Typography>

                  <Button
                    component={Link}
                    to={item.path}
                    sx={{ color: "gold" }}
                  >
                    Explore →
                  </Button>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ⭐ TESTIMONIALS */}
      <Container maxWidth="xl" sx={{ py: 10 }}>
  <Typography variant="h4" sx={{ textAlign: "center", mb: 6 }}>
    What Our Traders Say
  </Typography>

  <Grid container spacing={4} wrap="nowrap" justifyContent="center">
    {feedbacks.map((item, index) => (
      <Grid item key={index} sx={{ flex: 1 }}>
        <Box
          sx={{
            p: 3,
            borderRadius: 3,
            background: "#111",
            height: "100%",
            minWidth: 300,
            transition: "0.3s",
            "&:hover": {
              transform: "translateY(-5px)",
            },
          }}
        >
          <Typography sx={{ fontStyle: "italic", mb: 2 }}>
            "{item.text}"
          </Typography>

          <Typography sx={{ color: "gold", fontWeight: 600 }}>
            {item.name}
          </Typography>
        </Box>
      </Grid>
    ))}
  </Grid>
</Container>

      {/* 📞 CTA */}
      <Box sx={{ py: 10, textAlign: "center", background: "#111" }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          Ready to Start Your Trading Journey?
        </Typography>

        <Button
          component={Link}
          to="/contact"
          variant="contained"
          sx={{ background: "gold", color: "#000" }}
        >
          Contact Us
        </Button>
      </Box>

    </Box>
  );
};