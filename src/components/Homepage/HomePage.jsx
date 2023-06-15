import Hero from "./components/Hero";

import Services from "./components/Services";
// import What from "./components/What";
import Examples from "./components/Examples";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";

function HomePage() {
  return (
    <div className="h-full font-montserrat">
      <div className="mb-12 border-b border-borderLighterMainText bg-mainColor md:h-screen lg:mb-0">
        <Hero />
      </div>
      <div className="flex items-center border-b border-borderLighterMainText bg-secondMainColor lg:mb-0 lg:h-screen">
        <Services />
      </div>
      <div className="border-b border-borderLighterMainText bg-mainColor md:h-full">
        <Examples />
      </div>
      <div className="mx-auto border-b border-borderLighterMainText bg-secondMainColor lg:h-full">
        <Benefits />
      </div>
      <div className="mx-auto mb-20 border-b border-borderLighterMainText bg-mainColor lg:h-full">
        <Testimonials />
      </div>
      <div>Footer</div>
    </div>
  );
}

export default HomePage;
