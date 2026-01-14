
import { Box, Grid, Card, Typography, CardMedia } from "@mui/material";
import ServicesSectionAnimation from "../../UI/Animations/ServicesSectionAnimation";
import { servicesData } from "../../assets/servicesPage";



const ServicesBar = () => {
  return (
    <Box component="section" sx={{ bgcolor: "#0f172a", color: "white", py: 10 }}>
      <Box sx={{ maxWidth: 1400, mx: "auto", px: { xs: 3, md: 10 } }}>
        <Grid
          container
          spacing={4}
          sx={{
            overflowX: { xs: "auto", md: "visible" },
            pb: 2,
            display: 'flex',
            justifyContent: 'center',
            overflow: 'hidden'
          }}>
          {servicesData.map((service, idx) => (
            <Grid item key={idx}
              // sx={{
              //   display: "flex",
              //   justifyContent: "center",
              // }}
              xs={10}
              sm={6}
              md={3}
              sx={{ minWidth: { xs: 'auto', md: 200 } }}
            >
              <ServicesSectionAnimation delay={service.delay}>
                <Card
                  sx={{
                    background: "linear-gradient(to top, #0f172a, #233769)",
                    // bgcolor: "transparent",
                    // bgcolor: "#50596e",
                    textAlign: "center",
                    py: 6,
                    px: 2,
                    borderRadius: 3,
                    boxShadow: 6,
                    transition: "transform 0.3s",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 2,
                    width: { xs: 200, sm: 210, md: 180 }, 
                    height: 120,
                  }}
                >
                  {/* <Box>{service.icon}</Box> */}
                  <CardMedia
                    component="img"
                    sx={{
                      height: 80, 
                      width: "auto", 
                      objectFit: "contain", 
                      marginBottom: 1, 
                    }}
                    image={service.src} 
                    // image="/services/leak-detect-removebg-preview.png" 
                    alt={service.label} 
                  />
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, color: 'white' }}>
                    {service.label}
                  </Typography>
                </Card>
              </ServicesSectionAnimation>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ServicesBar;
