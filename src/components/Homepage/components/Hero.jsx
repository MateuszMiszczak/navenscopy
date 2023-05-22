import heroImg from "../../../assets/imgs/hero.jpg";

import { useState, useEffect } from "react";

function Hero() {
  const [color, setColor] = useState(false);

  const changeColor = () => {
    window.scrollY >= 500 ? setColor(true) : setColor(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);

    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  return (
    <div
      className={`h-screen w-screen flex items-center justify-center transition-all duration-1000 ${
        color
          ? "bg-sectionWhat border-gray-800 border-b-borderSmallest"
          : "bg-mainColor"
      }`}
    >
      <div className="grid grid-cols-2 gap-2 px-60 place-items-center">
        <div className="text-gray-400 flex flex-col gap-10">
          <p className="text-lighterMainText text-lg">Name Nickname Surname</p>
          <div className="text-8xl flex flex-col gap-4">
            <p>
              <span
                className={`cursor-default bg-gradient-to-r from-gray-400  to-mainColorGradientTint2 bg-[length:0%_1px] bg-no-repeat bg-left-bottom hover:bg-[length:100%_1px] transition-all duration-300 hover:text-white ${
                  color ? "text-gray-800" : "hover:text-white"
                }`}
              >
                Copywriter
              </span>
            </p>
            <p>
              <span
                className={`cursor-default bg-gradient-to-r from-gray-400  to-mainColorGradientTint2 bg-[length:0%_1px] bg-no-repeat bg-left-bottom hover:bg-[length:100%_1px] transition-all duration-300 hover:text-white ${
                  color ? "text-gray-800" : "hover:text-white"
                }`}
              >
                Marketer
              </span>
            </p>
            <p>
              <span
                className={`cursor-default bg-gradient-to-r from-gray-400  to-mainColorGradientTint2 bg-[length:0%_1px] bg-no-repeat bg-left-bottom hover:bg-[length:100%_1px] transition-all duration-300 hover:text-white ${
                  color ? "text-gray-800" : "hover:text-white"
                }`}
              >
                UX Designer
              </span>
            </p>
          </div>
          <p
            className={`text-xl font-light transition-all duration-1000 ${
              color ? "text-gray-800" : "text-gray-300"
            }`}
          >
            Professional content, web design and marketing for your company.
            Reach new customers and skyrocket your sales.
          </p>
        </div>
        <div className="border-0 rounded-md overflow-hidden w-9/12 place-self-center">
          <img src={heroImg} alt="Photo of a guy working on a laptop" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
