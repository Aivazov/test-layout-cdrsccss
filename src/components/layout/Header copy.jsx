import { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Box,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/about" },
    { title: "Services", path: "/services" },
    { title: "Pricing", path: "/pricing" },
  ];

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar position="sticky" sx={{ background: "linear-gradient(to right, #1e3a8a, #1e40af)" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo */}
          <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
            PLUMBING SERVICES
          </Typography>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4, alignItems: "center" }}>
            {navLinks.map((link) => (
              <Button
                key={link.title}
                component={Link}
                to={link.path}
                sx={{ color: "white", textTransform: "uppercase", fontWeight: 500 }}
              >
                {link.title}
              </Button>
            ))}

            {/* Contact info */}
            <Box sx={{ textAlign: "right" }}>
              <Typography variant="caption" display="block" sx={{ opacity: 0.7 }}>
                24/7 Emergency Call
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                123-456-7890
              </Typography>
            </Box>

            <Button variant="contained" color="warning">
              Get a Quote
            </Button>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            color="inherit"
            edge="end"
            onClick={toggleDrawer}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={toggleDrawer}>
        <Box sx={{ width: 250, p: 2 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
            Menu
          </Typography>
          <Divider />
          <List>
            {navLinks.map((link) => (
              <ListItem key={link.title} disablePadding>
                <ListItemButton component={Link} to={link.path} onClick={toggleDrawer}>
                  {link.title}
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Box sx={{ mt: 2 }}>
            <Button variant="contained" color="warning" fullWidth>
              Get a Quote
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
