import Hero from "./components/Hero";

import Services from "./components/Services";
// import What from "./components/What";
import Examples from "./components/Examples";
import Benefits from "./components/Benefits";

function HomePage() {
  return (
    <div className="h-full font-montserrat">
      <div className="mb-12 bg-mainColor md:h-full lg:mb-0">
        <Hero />
      </div>
      <div className="mb-20 flex items-center lg:mb-0 lg:h-screen">
        <Services />
      </div>
      <div className="mb-20 md:h-full">
        <Examples />
      </div>
      <div className="mx-auto mb-20 lg:h-full">
        <Benefits />
      </div>
      <div>123</div>
      {/* <What /> */}
    </div>
  );
}

export default HomePage;
