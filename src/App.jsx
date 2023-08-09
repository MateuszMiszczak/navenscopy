import { useState, useEffect } from "react";

import NavBar from "./pages/NavBar/NavBar";
import Route from "./pages/NavBar/Route";
import HomePage from "./pages/Homepage/HomePage";
import Offer from "./pages/Offer/Offer";
import Faq from "./pages/FAQ/Faq";
import ContactMe from "./pages/ContactMe/ContactMe";

function App() {
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY === 0 ? setIsTopOfPage(true) : setIsTopOfPage(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <NavBar isTopOfPage={isTopOfPage} />

      <Route path="/">
        <HomePage />
      </Route>
      <Route path="/offer">
        <Offer />
      </Route>
      <Route path="/faq">
        <Faq />
      </Route>
      <Route path="/contact">
        <ContactMe />
      </Route>
    </div>
  );
}

export default App;
