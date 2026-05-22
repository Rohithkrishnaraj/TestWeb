import React, { useState } from "react";

import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Card,
  CardContent,
  Avatar,
  Button,
  Dialog,
  DialogContent,
  IconButton,
  Divider,
  Chip,
} from "@mui/material";

import {
  LocalizationProvider,
  DateCalendar,
} from "@mui/x-date-pickers";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import dayjs from "dayjs";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseIcon from "@mui/icons-material/Close";

const mockSlots = [
  {
    id: 1,
    mentor: "Mentor Arjun",
    role: "Price Action Expert",
    time: "10:00 AM",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
  },

  {
    id: 2,
    mentor: "Mentor Rahul",
    role: "Options Trading Mentor",
    time: "11:30 AM",
    image:
      "https://randomuser.me/api/portraits/men/44.jpg",
  },

  {
    id: 3,
    mentor: "Mentor Vishal",
    role: "Market Psychology Coach",
    time: "01:00 PM",
    image:
      "https://randomuser.me/api/portraits/men/68.jpg",
  },

  {
    id: 4,
    mentor: "Mentor Arjun",
    role: "Price Action Expert",
    time: "03:30 PM",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

export const OneOnOne = () => {

  const [selectedDate, setSelectedDate] =
    useState(dayjs());

  const [selectedSlot, setSelectedSlot] =
    useState(null);

  const [openConfirm, setOpenConfirm] =
    useState(false);

  const [openSuccess, setOpenSuccess] =
    useState(false);

  // 🔥 OPEN CONFIRM
  const handleSelectSlot = (slot) => {
    setSelectedSlot(slot);
    setOpenConfirm(true);
  };

  // 🔥 CONFIRM BOOKING
  const handleConfirmBooking = () => {
    setOpenConfirm(false);

    // 🔥 API CALL LATER

    setTimeout(() => {
      setOpenSuccess(true);
    }, 300);
  };

  return (
    <Box
      sx={{
        background: "#0b0b0b",
        minHeight: "100vh",
        color: "#fff",
      }}
    >

      {/* 🔥 HERO */}
      <Box
        sx={{
          py: 10,
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
          One-on-One Mentorship
        </Typography>

        <Typography
          sx={{
            color: "#aaa",
            maxWidth: 800,
            mx: "auto",
            lineHeight: 2,
            px: 2,
          }}
        >
          Select your preferred date and book a
          personalized mentorship session with
          INVIKINGS trading experts.
        </Typography>

      </Box>

   
      {/* 🔥 MAIN CONTENT */}
<Container maxWidth="xl" sx={{ py: 8 }}>

  <Box
    sx={{
      display: "flex",
      gap: 5,

      alignItems: "flex-start",

      flexDirection: {
        xs: "column",
        lg: "row",
      },
    }}
  >

    {/* 🔥 LEFT SIDE — CALENDAR */}
    <Box
      sx={{
        width: {
          xs: "100%",
          lg: 360,
        },

        flexShrink: 0,
      }}
    >

      <Paper
        elevation={0}
        sx={{
          background: "#111",

          borderRadius: 5,

          border:
            "1px solid rgba(255,215,0,0.08)",

          p: 3,
        }}
      >

        {/* HEADER */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            mb: 3,
          }}
        >

          <CalendarMonthIcon
            sx={{
              color: "gold",
              fontSize: 30,
            }}
          />

          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: "#fff",
            }}
          >
            Select Date
          </Typography>

        </Box>

        <Divider
          sx={{
            borderColor:
              "rgba(255,255,255,0.08)",

            mb: 3,
          }}
        />

        {/* CALENDAR */}
        <LocalizationProvider
          dateAdapter={AdapterDayjs}
        >

          <DateCalendar
            value={selectedDate}

            onChange={(newValue) =>
              setSelectedDate(newValue)
            }

            sx={{
              width: "100%",

              minHeight: 420,

              background: "transparent",

              color: "#fff",

              "& .MuiPickersDay-root": {
                color: "#fff",
                fontWeight: 500,
                fontSize: 16,
              },

              "& .Mui-selected": {
                background:
                  "gold !important",

                color:
                  "#000 !important",
              },

              "& .MuiPickersCalendarHeader-label":
                {
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 20,
                },

              "& .MuiSvgIcon-root": {
                color: "#fff",
              },

              "& .MuiDayCalendar-weekDayLabel":
                {
                  color: "#888",
                  fontSize: 14,
                },
            }}
          />

        </LocalizationProvider>

      </Paper>

    </Box>

    {/* 🔥 RIGHT SIDE — AVAILABLE SLOTS */}
    <Box
      sx={{
        flex: 1,

        width: "100%",

        minWidth: 0,
      }}
    >

      {/* HEADER */}
      <Box
        sx={{
          display: "flex",

          justifyContent:
            "space-between",

          alignItems: "center",

          mb: 4,

          flexWrap: "wrap",

          gap: 2,
        }}
      >

        <Box>

          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
            }}
          >
            Available Slots
          </Typography>

          <Typography
            sx={{
              color: "#888",
              mt: 1,
            }}
          >
            {selectedDate.format(
              "DD MMMM YYYY"
            )}
          </Typography>

        </Box>

        <Typography
          sx={{
            color: "gold",

            fontWeight: 600,

            fontSize: 14,

            whiteSpace: "nowrap",
          }}
        >
          ← Scroll Right To View More →
        </Typography>

      </Box>

      {/* 🔥 SLOT CARDS */}
      <Box
        sx={{
          display: "flex",

          gap: 3,

          overflowX: "auto",

          pb: 2,

          scrollBehavior: "smooth",

          "&::-webkit-scrollbar": {
            display: "none",
          },

          scrollbarWidth: "none",
        }}
      >

        {mockSlots.map((slot) => (

          <Card
            key={slot.id}

            sx={{
              minWidth: 360,

              maxWidth: 360,

              flexShrink: 0,

              background: "#111",

              borderRadius: 5,

              border:
                "1px solid rgba(255,215,0,0.08)",

              transition: "0.3s",

              "&:hover": {
                transform:
                  "translateY(-6px)",

                borderColor:
                  "rgba(255,215,0,0.3)",
              },
            }}
          >

            <CardContent sx={{ p: 4 }}>

              {/* TOP */}
              <Box
                sx={{
                  display: "flex",

                  justifyContent:
                    "space-between",

                  alignItems: "center",

                  mb: 3,
                }}
              >

                <Chip
                  label="Available"

                  sx={{
                    background:
                      "rgba(255,215,0,0.12)",

                    color: "gold",

                    fontWeight: 700,
                  }}
                />

                <Typography
                  sx={{
                    color: "#aaa",

                    fontWeight: 600,
                  }}
                >
                  45 Min
                </Typography>

              </Box>

              {/* MENTOR */}
              <Box
                sx={{
                  display: "flex",

                  alignItems: "center",

                  gap: 2,

                  mb: 3,
                }}
              >

                <Avatar
                  src={slot.image}

                  sx={{
                    width: 70,
                    height: 70,

                    border:
                      "2px solid gold",
                  }}
                />

                <Box>

                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: "#fff",
                    }}
                  >
                    {slot.mentor}
                  </Typography>

                  <Typography
                    sx={{
                      color: "gold",
                    }}
                  >
                    {slot.role}
                  </Typography>

                </Box>

              </Box>

              <Divider
                sx={{
                  borderColor:
                    "rgba(255,255,255,0.08)",

                  mb: 3,
                }}
              />

              {/* DETAILS */}
              <Box
                sx={{
                  display: "flex",

                  flexDirection: "column",

                  gap: 1.5,

                  mb: 4,
                }}
              >

                <Box
                  sx={{
                    display: "flex",

                    alignItems: "center",

                    gap: 1,
                  }}
                >

                  <AccessTimeIcon
                    sx={{
                      color: "gold",
                      fontSize: 20,
                    }}
                  />

                  <Typography
                    sx={{
                      color: "#aaa",
                    }}
                  >
                    {slot.time}
                  </Typography>

                </Box>

                <Box
                  sx={{
                    display: "flex",

                    alignItems: "center",

                    gap: 1,
                  }}
                >

                  <VideoCallIcon
                    sx={{
                      color: "gold",
                      fontSize: 20,
                    }}
                  />

                  <Typography
                    sx={{
                      color: "#aaa",
                    }}
                  >
                    Google Meet / Zoom
                  </Typography>

                </Box>

              </Box>

              {/* BUTTON */}
              <Button
                fullWidth

                onClick={() =>
                  handleSelectSlot(slot)
                }

                sx={{
                  background: "gold",

                  color: "#000",

                  py: 1.4,

                  borderRadius: 3,

                  fontWeight: 700,

                  textTransform: "none",

                  "&:hover": {
                    background: "#e6c200",
                  },
                }}
              >
                Select Slot
              </Button>

            </CardContent>

          </Card>
        ))}

      </Box>

    </Box>

  </Box>

</Container>

      {/* 🔥 CONFIRM DIALOG */}
      <Dialog
        open={openConfirm}

        onClose={() => setOpenConfirm(false)}

        fullWidth

        maxWidth="sm"

        PaperProps={{
          sx: {
            background: "#111",

            borderRadius: 5,

            border:
              "1px solid rgba(255,215,0,0.1)",
          },
        }}
      >

        <DialogContent sx={{ p: 0 }}>

          {/* TOP */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",

              p: 3,
            }}
          >

            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                color: "#fff",
              }}
            >
              Confirm Booking
            </Typography>

            <IconButton
              onClick={() =>
                setOpenConfirm(false)
              }
            >
              <CloseIcon
                sx={{ color: "#888" }}
              />
            </IconButton>

          </Box>

          <Divider
            sx={{
              borderColor:
                "rgba(255,255,255,0.08)",
            }}
          />

          {/* CONTENT */}
          {selectedSlot && (
            <Box sx={{ p: 4 }}>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  mb: 4,
                }}
              >

                <Avatar
                  src={selectedSlot.image}
                  sx={{
                    width: 75,
                    height: 75,
                    border:
                      "2px solid gold",
                  }}
                />

                <Box>

                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: "#fff",
                    }}
                  >
                    {selectedSlot.mentor}
                  </Typography>

                  <Typography
                    sx={{
                      color: "gold",
                    }}
                  >
                    {selectedSlot.role}
                  </Typography>

                </Box>

              </Box>

              <Box sx={{ mb: 3 }}>

                <Typography
                  sx={{
                    color: "#888",
                    mb: 1,
                  }}
                >
                  Selected Date
                </Typography>

                <Typography
                  sx={{
                    color: "#fff",
                    fontWeight: 700,
                  }}
                >
                  {selectedDate.format(
                    "DD MMMM YYYY"
                  )}
                </Typography>

              </Box>

              <Box sx={{ mb: 5 }}>

                <Typography
                  sx={{
                    color: "#888",
                    mb: 1,
                  }}
                >
                  Selected Time
                </Typography>

                <Typography
                  sx={{
                    color: "#fff",
                    fontWeight: 700,
                  }}
                >
                  {selectedSlot.time}
                </Typography>

              </Box>

              <Button
                fullWidth

                startIcon={
                  <CheckCircleIcon />
                }

                onClick={
                  handleConfirmBooking
                }

                sx={{
                  background: "gold",

                  color: "#000",

                  py: 1.5,

                  borderRadius: 3,

                  fontWeight: 700,

                  textTransform: "none",

                  "&:hover": {
                    background: "#e6c200",
                  },
                }}
              >
                Confirm Booking
              </Button>

            </Box>
          )}

        </DialogContent>

      </Dialog>

      {/* 🔥 SUCCESS DIALOG */}
      <Dialog
        open={openSuccess}

        onClose={() =>
          setOpenSuccess(false)
        }

        fullWidth

        maxWidth="sm"

        PaperProps={{
          sx: {
            background: "#111",

            borderRadius: 5,

            border:
              "1px solid rgba(255,215,0,0.1)",
          },
        }}
      >

        <DialogContent sx={{ p: 5 }}>

          <Box
            sx={{
              textAlign: "center",
            }}
          >

            <CheckCircleIcon
              sx={{
                color: "gold",

                fontSize: 80,

                mb: 3,
              }}
            />

            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                color: "#fff",
                mb: 2,
              }}
            >
              Booking Confirmed
            </Typography>

            <Typography
              sx={{
                color: "#aaa",
                lineHeight: 2,
                mb: 4,
              }}
            >
              Your mentorship session has been
              booked successfully.
            </Typography>

            <Paper
              elevation={0}
              sx={{
                background:
                  "rgba(255,215,0,0.06)",

                border:
                  "1px solid rgba(255,215,0,0.12)",

                borderRadius: 4,

                p: 3,

                mb: 4,
              }}
            >

              <Typography
                sx={{
                  color: "#fff",
                  mb: 1,
                }}
              >
                {selectedSlot?.mentor}
              </Typography>

              <Typography
                sx={{
                  color: "gold",
                  fontWeight: 700,
                  mb: 1,
                }}
              >
                {selectedDate.format(
                  "DD MMM YYYY"
                )}
              </Typography>

              <Typography
                sx={{
                  color: "#fff",
                }}
              >
                {selectedSlot?.time}
              </Typography>

            </Paper>

            <Button
              fullWidth

              onClick={() =>
                setOpenSuccess(false)
              }

              sx={{
                background: "gold",

                color: "#000",

                py: 1.4,

                borderRadius: 3,

                fontWeight: 700,

                textTransform: "none",

                "&:hover": {
                  background: "#e6c200",
                },
              }}
            >
              Done
            </Button>

          </Box>

        </DialogContent>

      </Dialog>

    </Box>
  );
};