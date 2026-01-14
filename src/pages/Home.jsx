import React from 'react'
import HeroSection from '../components/hero/HeroSection';
import ServicesBar from '../components/services/ServicesBar';
import { Box } from '@mui/material';

const Home = () => {
    return (
    <Box>
      <HeroSection />
      <ServicesBar />
    </Box>
  );

}

export default Home