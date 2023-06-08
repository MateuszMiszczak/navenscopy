import Hero from "./components/Hero";

import Activities from "./components/Activities";
// import What from "./components/What";
import Examples from "./components/Examples";
// import Benefits from "./components/Benefits";

function HomePage() {
  return (
    <div className="h-screen font-montserrat">
      <div className="mb-20 bg-mainColor md:h-full">
        <Hero />
      </div>
      <div className="mb-20 flex items-center lg:h-full">
        <Activities />
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
