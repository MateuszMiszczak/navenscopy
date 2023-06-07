import Hero from "./components/Hero";
// import Who from "./components/Who";
import What from "./components/What";
import Examples from "./components/Examples";
// import Benefits from "./components/Benefits";

function HomePage() {
  return (
    <div className="h-screen font-montserrat">
      <div className="bg-mainColor md:h-full">
        <Hero />
      </div>
      <div className="md:h-full">
        <Examples />
      </div>

      {/* <Who />
      <Benefits /> */}
    </div>
  );
}

export default HomePage;
