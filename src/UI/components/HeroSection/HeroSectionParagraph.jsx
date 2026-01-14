import { Typography } from '@mui/material'

const HeroSectionParagraph = () => {
  return (
    <Typography
      variant="h6"
      sx={{
        mt: 3,
        color: "rgba(191, 219, 254, 0.9)",
        fontSize: { xs: "1rem", md: "1.25rem" },
        maxWidth: 500,
      }}
    >
      Your Trusted Local Plumber
      {/* Professional, fast and affordable plumbing solutions for your home and business. */}
    </Typography>
  )
}

export default HeroSectionParagraph