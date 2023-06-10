import Hero from "./components/Hero";

import Services from "./components/Services";
// import What from "./components/What";
import Examples from "./components/Examples";
// import Benefits from "./components/Benefits";

function HomePage() {
  return (
    <div className="h-screen font-montserrat">
      <div className="mb-12 bg-mainColor md:h-full lg:mb-20">
        <Hero />
      </div>
      <div className="mb-20 flex items-center lg:h-full">
        <Services />
      </div>
      <div className="mb-20 md:h-full">
        <Examples />
      </div>
      {/* <What /> */}
      {/* <Benefits /> */}
    </div>
  );
}

export default HomePage;
