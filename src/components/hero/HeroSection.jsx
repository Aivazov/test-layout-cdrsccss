import { Box, Button, Stack, CardMedia, Divider } from '@mui/material';
import {
  heroSectionContainer,
  heroSectionContentBox,
  heroSectionOverlay,
} from './heroSectionStyles';
import Waves from '../../UI/Assets/Hero/Waves';
import HeroSectionTitle from '../../UI/components/HeroSection/HeroSectionTitle';
import HeroSectionParagraph from '../../UI/components/HeroSection/HeroSectionParagraph';
import AppearingAnimation from '../../UI/Animations/AppearingAnimation';
import SwipingFromLeftAnimation from '../../UI/Animations/SwipingFromLeftAnimation';

const HeroSection = () => {
  return (
    <Box component='section' sx={heroSectionContainer}>
      {/* Overlay */}
      <Box sx={heroSectionOverlay} />

      {/* Content */}
      <Box sx={heroSectionContentBox}>
        <Box>
          <AppearingAnimation delay={0.9}>
            <HeroSectionTitle />
          </AppearingAnimation>

          <AppearingAnimation delay={1}>
            <HeroSectionParagraph />
          </AppearingAnimation>

          <AppearingAnimation delay={1}>
            <Divider
              sx={{
                my: 1.5,
                borderColor: 'rgba(255,255,255,0.4)',
                maxWidth: '360px',
              }}
            />
          </AppearingAnimation>

          <Stack direction={{ xs: 'row', sm: 'row' }} spacing={3} mt={5}>
            <AppearingAnimation delay={1.1}>
              <Button
                variant='contained'
                size='large'
                sx={{
                  px: 2,
                  py: 1.5,
                  fontWeight: 'bold',
                  fontSize: { xs: '0.8rem', sm: '1rem', md: '1rem' },
                }}
              >
                Request Service
              </Button>
            </AppearingAnimation>

            <AppearingAnimation delay={1.2}>
              <Button
                variant='outlined'
                component='a'
                href='tel:+1234567890'
                size='large'
                sx={{
                  color: '#fff',
                  borderColor: '#fff',
                  fontSize: { xs: '0.8rem', sm: '1rem', md: '1rem' },
                  px: 2,
                  py: 1.5,
                  fontWeight: 'bold',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderColor: '#fff',
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
              component='img'
              loading='lazy'
              sx={{
                height: { md: 570, lg: 590 },
                left: { md: '-0px', lg: '100px' },
                top: { md: '-280px', lg: '-285px' },
                width: 'auto',
                objectFit: 'contain',
                marginBottom: 1,
                position: 'absolute',
                display: { xs: 'none', md: 'flex' },
              }}
              image='/hero-img/plumber-no-bg-3.png'
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
