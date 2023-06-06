import { useState, useEffect } from "react";
import { benefitsData } from "../../../data/benefitsData";

function Benefits() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(benefitsData);
  }, []);

  const renderImages = data.map((obj) => {
    return (
      <li
        className="overflow-hidden 
    "
        key={obj.id}
      >
        <img
          src={obj.img}
          alt="Benefits image"
          className="transition-all duration-300 hover:scale-125"
        />
      </li>
    );
  });

  const renderText = data.map((obj) => {
    return (
      <li key={obj.id}>
        <div className="flex h-full w-full flex-col bg-benefitsDark px-8 text-white ">
          <div className="flex items-center gap-6 py-8">
            <div className="h-12 w-12 overflow-hidden rounded-full bg-gradient-to-r from-roundedBorderColor3 via-roundedBorderColor2 to-roundedBorderColor1 p-[2px]">
              <div className="back flex h-full w-full items-center justify-center rounded-full bg-mainColor">
                <div className="text-xl font-semibold text-white">
                  {obj.id < 9 ? `0${obj.id}` : obj.id}
                </div>
              </div>
            </div>

            <div className="font-bold">{obj.header}</div>
          </div>
          <div className="text-xl">{obj.paragraph}</div>
        </div>
      </li>
    );
  });

  return (
    <div className="flex h-screen w-screen flex-col place-content-center items-center gap-16 px-80">
      <h1 className="text-7xl text-headerColor">Benefits of cooperation</h1>
      <ul className="grid grid-cols-3 grid-rows-2 gap-[0.5px] overflow-hidden rounded-md ">
        {renderImages}
        {renderText}
      </ul>
    </div>
  );
}

export default Benefits;
