import { Typography } from '@mui/material'

const HeroSectionTitle = () => {
  return (
    <Typography
      variant="h2"
      component="h1"
      sx={{
        fontWeight: "bold",
        lineHeight: 1.2,
        fontSize: { xs: "2.5rem", md: "4rem", lg: "5rem" },
      }}
    >
      Reliable Plumbing
      <br />
      Services
    </Typography>
  )
}

export default HeroSectionTitle