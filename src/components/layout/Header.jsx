import { useState } from 'react';
import { Link } from 'react-router-dom';
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
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SwipingAnimation from '../../UI/Animations/SwipingAnimation';
import { navLinks } from '../../assets/headerData';
import { headerContainerStyles, headerToolbarStyles } from './headerStyles';
import PhoneIcon from '@mui/icons-material/Phone';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar position='sticky' sx={headerContainerStyles}>
        <Toolbar sx={headerToolbarStyles}>
          {/* Logo */}
          <SwipingAnimation delay={0}>
            <Box component='div' sx={{ display: 'flex', alignItems: 'center' }}>
              <img
                src='/header-img/logo-1.svg'
                alt='Logo'
                style={{ height: 30, marginRight: 10 }}
              />
              <Typography
                variant='h6'
                component='div'
                sx={{
                  fontWeight: 'bold',
                  fontSize: { xs: '16px', lg: '20px' },
                }}
              >
                PLUMBING <span style={{ color: '#16a5e2' }}>SERVICES</span>
              </Typography>
            </Box>
            {/* <Typography variant="h6" component="div" sx={{ fontWeight: "bold", fontSize: { xs: '16px', lg: '20px' }  }}>
              PLUMBING SERVICES
            </Typography> */}
          </SwipingAnimation>

          {/* Desktop Navigation */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: { md: 3, lg: 6 },
              alignItems: 'center',
            }}
          >
            <Box sx={{ display: 'flex', gap: { md: 2, lg: 4 } }}>
              {navLinks.map((link) => (
                <SwipingAnimation delay={link.delay}>
                  <Button
                    key={link.title}
                    component={Link}
                    to={link.path}
                    sx={{
                      color: 'white',
                      textTransform: 'none',
                      fontWeight: 600,
                      fontSize: { md: '12px', lg: '16px' },
                    }}
                  >
                    {link.title}
                  </Button>
                </SwipingAnimation>
              ))}
            </Box>

            {/* Contact info */}
            <SwipingAnimation delay={0.7}>
              <Box sx={{ textAlign: 'right' }}>
                <Typography
                  variant='caption'
                  display='block'
                  sx={{
                    opacity: 0.7,
                    fontSize: {
                      xs: '10px',
                      sm: '12px',
                      md: '11px',
                      lg: '13px',
                    },
                  }}
                >
                  24/7 Emergency Call
                </Typography>
                <Typography
                  component='a'
                  href='tel:+1234567890'
                  variant='subtitle1'
                  sx={{
                    fontWeight: 'bold',
                    fontSize: {
                      xs: '10px',
                      sm: '12px',
                      md: '16px',
                      lg: '18px',
                    },
                    color: 'white',
                    textDecoration: 'none',
                  }}
                >
                  123-456-7890
                </Typography>
              </Box>
            </SwipingAnimation>

            <SwipingAnimation delay={0.9}>
              <Button variant='contained' sx={{ bgcolor: '#f27917' }}>
                Get a Quote
              </Button>
            </SwipingAnimation>
          </Box>

          {/* Mobile Menu Button */}
          <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <SwipingAnimation delay={0.2}>
              <IconButton color='inherit' edge='end' onClick={toggleDrawer}>
                <MenuIcon />
              </IconButton>
            </SwipingAnimation>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor='right'
        open={mobileOpen}
        onClose={toggleDrawer}
        PaperProps={{
          sx: {
            bgcolor: '#0f172a', // тёмный фон
            color: '#fff', // цвет текста
          },
        }}
      >
        <Box sx={{ width: 250, p: 2 }}>
          <Typography variant='h6' sx={{ mb: 2, fontWeight: 'bold' }}>
            Menu
          </Typography>
          <Divider />
          <List>
            {navLinks.map((link) => (
              <ListItem key={link.title} disablePadding>
                <ListItemButton
                  component={Link}
                  to={link.path}
                  onClick={toggleDrawer}
                >
                  {link.title}
                </ListItemButton>
              </ListItem>
            ))}

            <Divider sx={{ my: 1.5, borderColor: 'rgba(255,255,255,0.1)' }} />

            {/* Phone call button */}
            <ListItem disablePadding>
              <ListItemButton
                component='a'
                href='tel:+1234567890'
                sx={{
                  color: '#fff',
                  borderRadius: 1,
                  fontWeight: 'bold',
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.12)',
                  },
                }}
              >
                <PhoneIcon sx={{ mr: 1, color: '#f27917' }} />
                123-456-7890
              </ListItemButton>
            </ListItem>
          </List>

          <Box sx={{ mt: 2 }}>
            <Button variant='contained' sx={{ bgcolor: '#f27917' }} fullWidth>
              Get a Quote
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
