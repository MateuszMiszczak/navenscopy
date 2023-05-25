import Hero from "./components/Hero";
import Who from "./components/Who";
import What from "./components/What";
import Examples from "./components/Examples";
import Benefits from "./components/Benefits";

function HomePage() {
  return (
    <div className="body-font h-screen w-screen snap-y snap-proximity overflow-x-hidden font-montserrat">
      <div className="flex h-screen w-screen snap-center items-center justify-center">
        <Hero />
      </div>
      <div className="flex h-screen w-screen snap-center items-center justify-center">
        <Who />
      </div>
      <div className="flex h-screen w-screen snap-center items-center justify-center">
        <What />
      </div>
      <div className="flex w-screen snap-start items-center justify-center">
        <Examples />
      </div>
      <div className="h-screen w-screen snap-center bg-backgroundSections">
        <Benefits />
      </div>
    </div>
  );
}

export default HomePage;
