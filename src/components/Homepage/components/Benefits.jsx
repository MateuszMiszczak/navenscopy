import { useState, useEffect } from "react";
import { benefitsData } from "../../../benefitsData";

function Benefits() {
  const [data, setData] = useState([]);
  const [trackId, setTrackId] = useState(1);

  useEffect(() => {
    setData(benefitsData);
  }, []);

  const renderImages = data.map((obj) => {
    return (
      <li className="flex flex-col gap-2" key={obj.id}>
        <di>
          <img src={obj.img} alt="Benefits image" />
        </di>
      </li>
    );
  });

  const renderText = data.map((obj) => {
    return (
      <li key={obj.id}>
        <div className="flex flex-col text-white h-full w-full bg-benefitsDark px-8 ">
          <div className="flex gap-6 py-8 items-center">
            <div className="h-12 w-12 rounded-full bg-gradient-to-r from-roundedBorderColor3 via-roundedBorderColor2 to-roundedBorderColor1 p-[2px] overflow-hidden">
              <div className="flex h-full w-full rounded-full items-center justify-center bg-mainColor back">
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
    <div className="w-screen h-screen flex flex-col items-center place-content-center gap-16 px-80">
      <h1 className="text-7xl text-headerColor">Benefits of cooperation</h1>
      <ul className="grid grid-cols-3 grid-rows-2 rounded-md gap-[0.5px] overflow-hidden ">
        {renderImages}
        {renderText}
      </ul>
    </div>
  );
}

export default Benefits;
