import React from "react";
import {
  Box,
  Container,
  Typography,
} from "@mui/material";

export const Events = () => {

  const events = [
    {
      title: "Live Trading Workshop",
      images: [
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a",
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
        "https://images.unsplash.com/photo-1552664730-d307ca884978",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
        "https://images.unsplash.com/photo-1515169067868-5387ec356754",
      ],
    },

    {
      title: "Forex Masterclass",
      images: [
        "https://images.unsplash.com/photo-1559526324-4b87b5e36e44",
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
        "https://images.unsplash.com/photo-1521791136064-7986c2920216",
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      ],
    },

    {
      title: "Revenue Revolution Bootcamp",
      images: [
        "https://images.unsplash.com/photo-1511578314322-379afb476865",
        "https://images.unsplash.com/photo-1543269865-cbf427effbad",
        "https://images.unsplash.com/photo-1551836022-deb4988cc6c0",
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd",
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      ],
    },

    {
      title: "Trading Psychology Seminar",
      images: [
        "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f",
        "https://images.unsplash.com/photo-1516321497487-e288fb19713f",
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a",
      ],
    },

    {
      title: "Crown Membership Meetup",
      images: [
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
        "https://images.unsplash.com/photo-1497366412874-3415097a27e7",
        "https://images.unsplash.com/photo-1516321310764-8d4c4b4f7c9b",
        "https://images.unsplash.com/photo-1516321497487-e288fb19713f",
      ],
    },
  ];

  return (
    <Box
      sx={{
        background: "#0b0b0b",
        minHeight: "100vh",
        color: "#fff",
        py: 10,
      }}
    >

      {/* 🔥 PAGE HEADING */}
      <Container>
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            fontWeight: 700,
            mb: 2,
          }}
        >
          Events
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            color: "#aaa",
            mb: 10,
          }}
        >
          Explore our trading events, workshops, and community meetups
        </Typography>
      </Container>

      {/* 🔥 EVENT SECTIONS */}
      <Container maxWidth="xl">

        {events.map((event, index) => (
          <Box key={index} sx={{ mb: 10 }}>

            {/* EVENT TITLE */}
            <Typography
              variant="h4"
              sx={{
                mb: 1,
                fontWeight: 700,
                color: "gold",
              }}
            >
              {event.title}
            </Typography>

            {/* SWIPE TEXT */}
            <Typography
              sx={{
                color: "#777",
                mb: 3,
                fontSize: "0.9rem",
              }}
            >
              Swipe right to see more →
            </Typography>

            {/* HORIZONTAL SCROLL */}
            <Box
              sx={{
                display: "flex",
                gap: 3,
                overflowX: "auto",
                pb: 2,
                scrollBehavior: "smooth",

                // 🔥 Hide scrollbar
                scrollbarWidth: "none",
                msOverflowStyle: "none",

                "&::-webkit-scrollbar": {
                  display: "none",
                },
              }}
            >
              {event.images.map((img, i) => (
                <Box
                  key={i}
                  sx={{
                    minWidth: 320,
                    height: 220,
                    borderRadius: 4,
                    overflow: "hidden",
                    flexShrink: 0,
                    position: "relative",
                    transition: "0.3s",
                    cursor: "pointer",

                    "&:hover": {
                      transform: "scale(1.03)",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={img}
                    alt={event.title}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />

                  {/* OVERLAY */}
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
                    }}
                  />
                </Box>
              ))}
            </Box>

          </Box>
        ))}

      </Container>
    </Box>
  );
};