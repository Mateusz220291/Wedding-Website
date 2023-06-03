import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import HeroSection from "./pages/Hero/Hero";
import AboutSection from "./pages/AboutUs/About";
import QuoteSection from "./pages/Quote/Quote";
import TabComponent from "./pages/Tabs/Destination";
import Offer from "./pages/Info/Info";
import Footer from "./pages/Footer/Footer";

function App() {
  const scrollToNextSection = () => {
    const nextSectionElement = document.getElementById("about-section");
    if (nextSectionElement) {
      nextSectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <HeroSection scrollToNextSection={scrollToNextSection} />
      <AboutSection />
      <QuoteSection />
      <TabComponent />
      <Offer></Offer>
      <Footer></Footer>
    </Router>
  );
}

export default App;
