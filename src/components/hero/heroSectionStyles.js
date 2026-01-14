import heroImage from "../../assets/hero.jpg";
export const heroSectionContainer = {
  position: "relative",
  minHeight: "90vh",
  display: "flex",
  alignItems: "center",
  overflow: "hidden",
  backgroundImage: `url(${heroImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
}

export const heroSectionOverlay = {
  position: "absolute",
  inset: 0,
  background: "linear-gradient(to right, rgba(30, 58, 138, 0.95), rgba(30, 64, 175, 0.85), rgba(30, 56, 128, 0.6))",
}

export const heroSectionContentBox = {
  position: "relative",
  zIndex: 10,
  maxWidth: 1400,
  mx: "auto",
  px: { xs: 3, md: 10 },
  width: "100%",
  display: "grid",
  gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
  alignItems: "center",
  gap: 6,
  color: "white",
}