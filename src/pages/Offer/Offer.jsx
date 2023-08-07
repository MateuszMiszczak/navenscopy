import What from "./components/What";
import Why from "./components/Why";

const Offer = () => {
  return (
    <div>
      <div className="h-full border-b border-borderLighterMainText bg-secondMainColor py-16 pt-28 md:py-32">
        <What />
      </div>
      <div className="bg-benefitsDark py-16">
        <Why />
      </div>
    </div>
  );
};

export default Offer;
