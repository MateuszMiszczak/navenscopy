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
      className={`flex h-screen w-screen items-center justify-center transition-all duration-1000 ${
        color
          ? "bg-sectionWhat border-b-borderSmallest border-gray-800"
          : "bg-mainColor"
      }`}
    >
      <div className="grid grid-cols-2 place-items-center gap-2 px-60">
        <div className="flex flex-col gap-10 text-gray-400">
          <p className="text-lg text-lighterMainText">Name Nickname Surname</p>
          <div className="flex flex-col gap-4 text-8xl">
            <p>
              <span
                className={`cursor-default bg-gradient-to-r from-gray-400  to-mainColorGradientTint2 bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-all duration-300 hover:bg-[length:100%_1px] hover:text-white ${
                  color ? "text-gray-800" : "hover:text-white"
                }`}
              >
                Copywriter
              </span>
            </p>
            <p>
              <span
                className={`cursor-default bg-gradient-to-r from-gray-400  to-mainColorGradientTint2 bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-all duration-300 hover:bg-[length:100%_1px] hover:text-white ${
                  color ? "text-gray-800" : "hover:text-white"
                }`}
              >
                Marketer
              </span>
            </p>
            <p>
              <span
                className={`cursor-default bg-gradient-to-r from-gray-400  to-mainColorGradientTint2 bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-all duration-300 hover:bg-[length:100%_1px] hover:text-white ${
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
        <div className="w-9/12 place-self-center overflow-hidden rounded-md border-0">
          <img src={heroImg} alt="Photo of a guy working on a laptop" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
