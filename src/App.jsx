import { useState, useEffect } from "react";

import NavBar from "./pages/NavBar/NavBar";
import Route from "./pages/NavBar/Route";
import HomePage from "./pages/Homepage/HomePage";
import Offer from "./pages/Offer/Offer";
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
      <Route path="/portfolio">
        <div className="pt-32">Portfolio abadnbaednahbe</div>
      </Route>
      <Route path="/blog">
        <div className="pt-32">Faq abadnbaednahbe</div>
      </Route>
      <Route path="/contact">
        <ContactMe />
      </Route>
    </div>
  );
}

export default App;
