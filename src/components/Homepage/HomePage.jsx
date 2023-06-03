import { useState, useEffect } from "react";

import NavBar from "../NavBar/NavBar";
import Hero from "./components/Hero";
import Who from "./components/Who";
import What from "./components/What";
import Examples from "./components/Examples";
import Benefits from "./components/Benefits";

function HomePage() {
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY === 0 ? setIsTopOfPage(true) : setIsTopOfPage(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="h-screen font-montserrat">
      <NavBar isTopOfPage={isTopOfPage} />
      <div className="bg-mainColor md:h-full">
        <Hero />
      </div>
      <div className="bg-mainColor md:h-full">
        <Hero />
      </div>
      <div className="bg-mainColor md:h-full">
        <Hero />
      </div>

      {/* <Who />
      <What />
      <Examples />
      <Benefits /> */}
    </div>
  );
}

export default HomePage;
