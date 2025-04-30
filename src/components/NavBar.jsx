import {
  Box,
  Typography,
  Menu,
  MenuItem,
  Drawer,
  IconButton,
  List,
  ListItem,
  Divider,
  Button,
  ListItemIcon,
  ListItemButton,
} from "@mui/material";
import React, { useState } from "react";
import "../styles/NavBar.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import EmailIcon from "@mui/icons-material/Email";
import PermMediaIcon from "@mui/icons-material/PermMedia";

const views = [
  { text: "Acceuil", icon: <HomeIcon />, nav: "/" },
  { text: "A propos", icon: <PersonIcon />, nav: "/about" },
  { text: "Actualités", icon: <AccountTreeIcon />, nav: "/actions" },
  { text: "Galerie", icon: <PermMediaIcon />, nav: "/galleries" },
  { text: "Contact", icon: <EmailIcon />, nav: "/contact" },
];

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const [openBurger, setOpenBurger] = useState(false);

  const toggleDrawer = (state) => () => {
    setOpenBurger(state);
  };

  const handleNavDrawer = (nav) => {
    setOpenBurger(false);
    navigate(nav);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        backgroundColor: "#96DFFE",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "80%",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "30px",
        }}
      >
        <Typography
          className="hover-highlight"
          onClick={() => navigate("/")}
          sx={{
            display: "flex",
            fontWeight: "bold",
            color: "rgb(39, 30, 89)",
            cursor: "pointer",
            fontSize: "22px",
          }}
        >
          Lelo Pona Lobi
        </Typography>
        <Box sx={{ display: { md: "flex", xs: "none" }, gap: 4 }}>
          <Typography
            className="hover-highlight"
            onClick={() => navigate("/about")}
            sx={{
              display: "flex",
              fontWeight: "bold",
              color: "rgb(39, 30, 89)",
              cursor: "pointer",
            }}
          >
            A propos
          </Typography>
          <Typography
            className="hover-highlight"
            onClick={handleClick}
            sx={{
              display: "flex",
              alignItems: "center",
              fontWeight: "bold",
              color: "rgb(39, 30, 89)",
              cursor: "pointer",
              userSelect: "none",
            }}
          >
            Actualités
            <ArrowDropDownIcon sx={{ ml: 0.5 }} />
          </Typography>
          <Typography
            className="hover-highlight"
            onClick={() => navigate("/galleries")}
            sx={{
              display: "flex",
              fontWeight: "bold",
              color: "rgb(39, 30, 89)",
              cursor: "pointer",
            }}
          >
            Galerie
          </Typography>
          <Typography
            className="hover-highlight"
            onClick={() => navigate("/contact")}
            sx={{
              display: "flex",
              fontWeight: "bold",
              color: "rgb(39, 30, 89)",
              cursor: "pointer",
            }}
          >
            Contact
          </Typography>
        </Box>
        <IconButton
          edge="start"
          aria-label="menu"
          onClick={toggleDrawer(true)}
          sx={{ display: { md: "none", xs: "flex" }, color: "inherit" }}
        >
          <MenuIcon />
        </IconButton>
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem
          onClick={() => {
            navigate("/actions"), handleClose();
          }}
        >
          Nos actions
        </MenuItem>
      </Menu>
      <Drawer anchor="left" open={openBurger} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250, height: "100%", backgroundColor: "#E1F9EA" }}>
          <List sx={{ p: 0, m: 0 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
                backgroundColor: "#96DFFE",
              }}
            >
              <Typography
                id="btn-title-mobile"
                className="hover-highlight"
                onClick={() => handleNavDrawer(views[0].nav)}
                sx={{
                  textTransform: "initial",
                  color: "rgb(39, 30, 89)",
                  mt: 3.5,
                  mb: 3.5,
                  cursor: "pointer",
                }}
              >
                <Typography sx={{ fontWeight: "bold" }} variant="h6">
                  Lelo Pona Lobi
                </Typography>
              </Typography>
            </Box>
            <Divider />
            {views.map(({ text, icon, nav }, index) => (
              <ListItem key={index} disablePadding sx={{ mt: 2 }}>
                <ListItemButton
                  id={`btn-nav-mobile-${index}`}
                  onClick={() => handleNavDrawer(nav)}
                >
                  <ListItemIcon
                    sx={{
                      color: "rgb(39, 30, 89)",
                    }}
                  >
                    {icon}
                  </ListItemIcon>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      color: "rgb(39, 30, 89)",
                    }}
                    variant="body1"
                  >
                    {text}
                  </Typography>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default NavBar;
