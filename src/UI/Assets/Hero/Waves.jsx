import { Box } from "@mui/material";
import { motion } from "framer-motion";

const Waves = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        height: 120,
        overflow: "hidden",
        zIndex: 11,
      }}
    >
      <motion.svg
        component="svg"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        animate={{
          d: [
            "M0,40 C120,80 240,0 360,20 480,40 600,120 720,100 840,80 960,20 1080,10 1200,0 1320,40 1440,60 L1440,120 L0,120 Z",
            "M0,50 C120,70 240,10 360,30 480,50 600,110 720,90 840,70 960,30 1080,20 1200,10 1320,50 1440,70 L1440,120 L0,120 Z",
            "M0,40 C120,80 240,0 360,20 480,40 600,120 720,100 840,80 960,20 1080,10 1200,0 1320,40 1440,60 L1440,120 L0,120 Z",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.path
          fill="#0f172a"
          d="M0,40 C120,80 240,0 360,20 480,40 600,120 720,100 840,80 960,20 1080,10 1200,0 1320,40 1440,60 L1440,120 L0,120 Z"
        />
      </motion.svg>

      <motion.svg
        component="svg"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        animate={{
          y: [0, 10, 0], 
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.path
          fill="rgba(15, 23, 42, 0.8)" 
          d="M0,60 C120,90 240,20 360,40 480,60 600,100 720,80 840,60 960,30 1080,20 1200,10 1320,50 1440,70 L1440,120 L0,120 Z"
        />
      </motion.svg>
    </Box>
  );
};

export default Waves;
