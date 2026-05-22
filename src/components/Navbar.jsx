import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Button,
  Divider,
  Menu,
  MenuItem,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useAuth } from "../context/AuthContext";
import { LoginDialog } from "./LoginDialog";


const productItems = [
  {
    label: "Elite Membership",
    path: "/eliteMembership",
  },

  {
    label: "Gold Membership",
    path: "/goldMembership",
  },

  {
    label: "Revenue Revolution",
    path: "/revenueRevolution",
  },

  {
    label: "Royal Indicators",
    path: "/royalIndicators",
  },

  {
    label: "Crown Membership",
    path: "/crownMembership",
  }
];

export const Navbar = () => {


  const { pathname } = useLocation();
const { user, logout } = useAuth();

const navItems = [
  { label: "HOME", path: "/" },

  { label: "EVENTS", path: "/events" },

  { label: "CONTACT", path: "/contact" },
];

// 🔥 SHOW ONE ON ONE AFTER LOGIN
if (user) {

  navItems.push({
    label: "ONE ON ONE",
    path: "/oneOnOne",
    highlight: true,
  });

}

// 🔥 SHOW ADMIN ONLY FOR ADMIN
if (user?.role_type === "ADMIN") {

  navItems.push({
    label: "ADMIN",
    path: "/admin",
  });

}
  const [open, setOpen] = useState(false);

  const [openLogin, setOpenLogin] =
    useState(false);

  // 🔥 PRODUCTS MENU
  const [anchorEl, setAnchorEl] =
    useState(null);

  const openProducts = Boolean(anchorEl);

  const handleProductsClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProductsClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {/* 🔥 NAVBAR */}
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          background: "rgba(255,255,255,0.96)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid #eee",
          color: "#000",
        }}
      >

        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            py: 1,
          }}
        >

          {/* 🔥 LOGO */}
          <Box
            component={Link}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <img
              src="https://invikings.com/wp-content/uploads/2023/12/cropped-logo-13.png"
              alt="INVIKINGS Logo"
              style={{
                height: 42,
                objectFit: "contain",
              }}
            />
          </Box>

          {/* 🔥 DESKTOP MENU */}
          <Box
            sx={{
              display: {
                xs: "none",
                lg: "flex",
              },

              alignItems: "center",
              gap: 1.2,
            }}
          >

            {/* 🔥 MAIN NAV ITEMS */}
            {navItems.map((item) => (
              <Button
                key={item.path}
                component={Link}
                to={item.path}
                sx={{
                  color:
  item.highlight
    ? "#b8860b"
    : pathname === item.path
    ? "goldenrod"
    : "#111",

                  fontWeight: 700,

                  fontSize: "0.86rem",

                  px: 1.5,

                  borderRadius: 3,
                  background:
  item.highlight
    ? "rgba(255,215,0,0.12)"
    : "transparent",

boxShadow:
  item.highlight
    ? "0 0 12px rgba(255,215,0,0.18)"
    : "none",

                  textTransform: "none",

                  transition: "0.3s",

                  "&:hover": {
                    background:
                      "rgba(218,165,32,0.08)",

                    color: "goldenrod",
                  },
                }}
              >
                {item.label}
              </Button>
            ))}

            {/* 🔥 PRODUCTS DROPDOWN */}
            <Button
              onClick={handleProductsClick}

              endIcon={
                <KeyboardArrowDownIcon />
              }

              sx={{
                color: productItems.some(
                  (item) =>
                    item.path === pathname
                )
                  ? "goldenrod"
                  : "#111",

                fontWeight: 700,

                fontSize: "0.86rem",

                px: 1.5,

                borderRadius: 3,

                textTransform: "none",

                transition: "0.3s",

                "&:hover": {
                  background:
                    "rgba(218,165,32,0.08)",

                  color: "goldenrod",
                },
              }}
            >
              PRODUCTS
            </Button>

            {/* 🔥 DROPDOWN MENU */}
            <Menu
              anchorEl={anchorEl}
              open={openProducts}
              onClose={handleProductsClose}

              PaperProps={{
                sx: {
                  mt: 1.5,

                  borderRadius: 3,

                  minWidth: 240,

                  boxShadow:
                    "0 10px 30px rgba(0,0,0,0.12)",

                  py: 1,
                },
              }}
            >

              {productItems.map((item) => (
                <MenuItem
                  key={item.path}

                  component={Link}

                  to={item.path}

                  onClick={
                    handleProductsClose
                  }

                  sx={{
                    py: 1.5,

                    fontWeight: 600,

                    color:
                      pathname === item.path
                        ? "goldenrod"
                        : "#111",

                    "&:hover": {
                      background:
                        "rgba(218,165,32,0.08)",

                      color: "goldenrod",
                    },
                  }}
                >
                  {item.label}
                </MenuItem>
              ))}

            </Menu>

            {/* 🔥 LOGIN BUTTON */}
            {user ? (

  <Button
    onClick={logout}

    sx={{
      ml: 2,

      border:
        "1px solid #ff4d4d",

      color: "#ff4d4d",

      borderRadius: 3,

      px: 2.5,

      py: 1,

      fontWeight: 700,

      textTransform: "none",

      "&:hover": {
        background: "#ff4d4d",
        color: "#fff",
      },
    }}
  >
    Logout
  </Button>

) : (

  <Button
    onClick={() =>
      setOpenLogin(true)
    }

    startIcon={
      <PersonOutlineIcon />
    }

    sx={{
      ml: 2,

      border:
        "1px solid goldenrod",

      color: "#000",

      borderRadius: 3,

      px: 2.5,

      py: 1,

      fontWeight: 700,

      textTransform: "none",

      transition: "0.3s",

      "&:hover": {
        background: "gold",

        borderColor: "gold",
      },
    }}
  >
    Login
  </Button>

)}

          </Box>

          {/* 🔥 MOBILE MENU ICON */}
          <IconButton
            sx={{
              display: {
                xs: "flex",
                lg: "none",
              },

              color: "#000",
            }}

            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>

        </Toolbar>
      </AppBar>

      {/* 🔥 MOBILE DRAWER */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}

        PaperProps={{
          sx: {
            width: 280,
            background: "#111",
            color: "#fff",
          },
        }}
      >

        {/* 🔥 LOGO */}
        <Box
          sx={{
            p: 3,
            textAlign: "center",
          }}
        >
          <img
            src="https://invikings.com/wp-content/uploads/2023/12/cropped-logo-13.png"
            alt="logo"
            style={{
              height: 42,
            }}
          />
        </Box>

        <Divider
          sx={{
            borderColor:
              "rgba(255,255,255,0.08)",
          }}
        />

        {/* 🔥 NAV LINKS */}
        <List sx={{ px: 2, py: 2 }}>

          {/* MAIN NAV ITEMS */}
          {navItems.map((item) => (
            <ListItem
              key={item.path}

              component={Link}

              to={item.path}

              onClick={() => setOpen(false)}

              sx={{
                borderRadius: 3,

                mb: 1,

                color:
                  pathname === item.path
                    ? "gold"
                    : "#fff",

                background:
                  pathname === item.path
                    ? "rgba(255,215,0,0.08)"
                    : "transparent",

                transition: "0.3s",

                "&:hover": {
                  background:
                    "rgba(255,255,255,0.05)",
                },
              }}
            >
              <ListItemText
                primary={item.label}

                primaryTypographyProps={{
                  fontWeight: 600,
                  fontSize: "0.95rem",
                }}
              />
            </ListItem>
          ))}

          {/* 🔥 PRODUCTS HEADING */}
          <Box
            sx={{
              px: 2,
              pt: 3,
              pb: 1,
              color: "gold",
              fontWeight: 700,
              fontSize: "0.85rem",
            }}
          >
            PRODUCTS
          </Box>

          {/* PRODUCT ITEMS */}
          {productItems.map((item) => (
            <ListItem
              key={item.path}

              component={Link}

              to={item.path}

              onClick={() => setOpen(false)}

              sx={{
                borderRadius: 3,

                mb: 1,

                pl: 3,

                color:
                  pathname === item.path
                    ? "gold"
                    : "#fff",

                background:
                  pathname === item.path
                    ? "rgba(255,215,0,0.08)"
                    : "transparent",

                transition: "0.3s",

                "&:hover": {
                  background:
                    "rgba(255,255,255,0.05)",
                },
              }}
            >
              <ListItemText
                primary={item.label}

                primaryTypographyProps={{
                  fontWeight: 500,
                  fontSize: "0.92rem",
                }}
              />
            </ListItem>
          ))}

        </List>

        {/* 🔥 LOGIN BUTTON */}
        <Box sx={{ px: 3, mt: 2 }}>

  {user ? (

    <Button
      fullWidth

      onClick={() => {

        logout();

        setOpen(false);

      }}

      sx={{
        background: "#ff4d4d",

        color: "#fff",

        py: 1.4,

        borderRadius: 3,

        fontWeight: 700,

        textTransform: "none",

        "&:hover": {
          background: "#ff1a1a",
        },
      }}
    >
      Logout
    </Button>

  ) : (

    <Button
      fullWidth

      onClick={() => {

        setOpen(false);

        setOpenLogin(true);

      }}

      startIcon={
        <PersonOutlineIcon />
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
      Login
    </Button>

  )}

</Box>

      </Drawer>

      {/* 🔥 LOGIN DIALOG */}
      <LoginDialog
        open={openLogin}
        handleClose={() =>
          setOpenLogin(false)
        }
      />
    </>
  );
};