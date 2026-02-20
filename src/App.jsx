import { Home } from "lucide-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedSection from "./components/TrustedSection";
import AwardsSection from "./components/AwardsSection";

function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <TrustedSection/>
      <AwardsSection/>
    </>
  );
}

export default App;
