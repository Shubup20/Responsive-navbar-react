import { HeroSection } from "./Components/HeroSection";
import { Navbar } from "./Components/Navbar";
import "./App.css";
import { Footer } from "./Components/Layout/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Footer />
    </>
  );
};

export default App;
