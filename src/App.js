// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import Header from "./components/layout/Header";

const theme = createTheme({
  typography: {
    fontFamily: "'Lato', sans-serif",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Header />

      {/* <nav className="p-4 bg-gray-100 flex gap-4">
        <Link to="/">
          <Button variant="contained">Home</Button>
        </Link>
        <Link to="/about">
          <Button variant="outlined">About</Button>
        </Link>
      </nav> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services  />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>

      {/* <div className="min-h-screen bg-slate-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div> */}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
