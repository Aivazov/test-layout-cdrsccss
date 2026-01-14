import { Box, Typography } from "@mui/material";
import { heroSectionContentBox } from "../components/hero/heroSectionStyles";
import AppearingAnimation from "../UI/Animations/AppearingAnimation";
import { pageContainer } from "../UI/styles/mainStyles";

const About = () => {
  return (
    <Box sx={pageContainer}>
      <Box sx={heroSectionContentBox} >
        <Box>
          <AppearingAnimation delay={0.4}>
            <Typography variant="h2">About Us</Typography>
          </AppearingAnimation>

          <AppearingAnimation delay={0.5}>
            <p>
              This is a placeholder About page.
            </p>
          </AppearingAnimation>
        </Box>
      </Box>
      
    </Box>
  );
};

export default About;
