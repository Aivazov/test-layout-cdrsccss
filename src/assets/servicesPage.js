import BuildIcon from "@mui/icons-material/Build";
import ShowerIcon from "@mui/icons-material/Shower";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import PlumbingIcon from "@mui/icons-material/Plumbing";

export const servicesData = [
  { icon: <BuildIcon fontSize="large" sx={{ color: "#fb923c" }} />, label: "Emergency Repairs", src: "/services/repair-2-removebg-preview.png", delay: 0 },
  { icon: <ShowerIcon fontSize="large" sx={{ color: "#fb923c" }} />, label: "Drain Cleaning", src: "/services/showerhead-removebg-preview.png", delay: 0.1 },
  { icon: <WaterDropIcon fontSize="large" sx={{ color: "#fb923c" }} />, label: "Water Heaters", src: "/services/water-heater-removebg-preview.png", delay: 0.2 },
  { icon: <PlumbingIcon fontSize="large" sx={{ color: "#fb923c" }} />, label: "Leak Detection", src: "/services/leak-detect-removebg-preview.png", delay: 0.3 },
];