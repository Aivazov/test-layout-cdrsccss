import { Box, Button, Stack, CardMedia, Divider } from "@mui/material";
import { heroSectionContainer, heroSectionContentBox, heroSectionOverlay } from "./heroSectionStyles";
import Waves from "../../UI/Assets/Hero/Waves";
import HeroSectionTitle from "../../UI/components/HeroSection/HeroSectionTitle";
import HeroSectionParagraph from "../../UI/components/HeroSection/HeroSectionParagraph";
import AppearingAnimation from "../../UI/Animations/AppearingAnimation";
import SwipingFromLeftAnimation from "../../UI/Animations/SwipingFromLeftAnimation";

const HeroSection = () => {
  return (
    <Box component="section" sx={heroSectionContainer} >

      {/* Overlay */}
      <Box sx={heroSectionOverlay} />

      {/* Content */}
      <Box sx={heroSectionContentBox} >
        <Box>

          <AppearingAnimation delay={0.9}>
            <HeroSectionTitle />
          </AppearingAnimation>

          <AppearingAnimation delay={1}>
            <HeroSectionParagraph />
          </AppearingAnimation>

          <AppearingAnimation delay={1}>
            <Divider sx={{ my: 1.5, borderColor: "rgba(255,255,255,0.4)", maxWidth: '360px' }} />
          </AppearingAnimation>


          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={3}
            mt={5}
          >
          <AppearingAnimation delay={1.1}>
            <Button
              variant="contained"
              size="large"
              sx={{ px: 4, py: 1.5, fontWeight: "bold" }}
            >
              Request Service
            </Button>
          </AppearingAnimation>
            
          <AppearingAnimation delay={1.2}>
            <Button
              variant="outlined"
              component="a"
              href="tel:+1234567890"
              size="large"
              sx={{
                color: "#fff",
                borderColor: "#fff",
                // px: 4,
                py: 1.5,
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderColor: "#fff",
                },
              }}
            >
              Call Now
            </Button>
          </AppearingAnimation>
          </Stack>
        </Box>

        <Box sx={{ position: 'relative' }}>
          <SwipingFromLeftAnimation delay={1.2}>
            <CardMedia
              component="img"
              sx={{
                height: {md: 600, lg: 660}, 
                left: {md: '-85px', lg: '-75px'},
                top: {md: '-210px', lg: '-285px'},
                width: "auto", 
                objectFit: "contain", 
                marginBottom: 1, 
                position: 'absolute',
                display: {xs: 'none', md: 'flex'}
              }}
              image='/hero-img/plumber-no-bg.png'
              alt='plumber'
            />
          </SwipingFromLeftAnimation>
        </Box>
      </Box>

      <Waves />
      
    </Box>
  );
};

export default HeroSection;
