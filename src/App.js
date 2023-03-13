import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./pages/Hero/Hero";
import AboutSection from "./pages/AboutUs/About";
import QuoteSection from "./pages/Quote/Quote";
import TabComponent from "./pages/Destination/Destination";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <HeroSection />
      <Routes>
        <Route path="/" element={<AboutSection />} />
      </Routes>
      <QuoteSection />
      <TabComponent />
    </Router>
  );
}

export default App;
