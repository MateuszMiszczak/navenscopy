import { useState, useEffect } from "react";

import { exampleComponentData } from "../../../exampleComponentData";

function Examples() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(exampleComponentData);
  }, []);

  const renderElement = data.map((obj) => {
    if (obj.id % 2 === 0) {
      return (
        <div className="flex items-start gap-36 pb-16" key={obj.id}>
          <div className="flex flex-col gap-8 text-start">
            <h2 className="text-4xl font-medium text-headerColor">
              {obj.header1}
            </h2>
            <p className="text-xl font-medium">{obj.header2}</p>
            <p className="text-xl">{obj.p1}</p>
            <p className="text-xl">{obj.p2}</p>
            <p className="text-xl">{obj.p3}</p>
          </div>
          <div className="max-h-xl max-w-xl overflow-hidden rounded-md">
            <img src={obj.img} alt="Photo" className="aspect-square" />
          </div>
        </div>
      );
    } else {
      return (
        <div className="flex items-start gap-36 pb-16" key={obj.id}>
          <div className="max-h-xl max-w-xl overflow-hidden rounded-md">
            <img src={obj.img} alt="Photo" className="aspect-square" />
          </div>
          <div className="flex flex-col gap-8 text-start">
            <h2 className="text-4xl font-medium text-headerColor">
              {obj.header1}
            </h2>
            <p className="text-xl font-medium">{obj.header2}</p>
            <p className="text-xl">{obj.p1}</p>
            <p className="text-xl">{obj.p2}</p>
            <p className="text-xl">{obj.p3}</p>
          </div>
        </div>
      );
    }
  });

  return (
    <div className="flex flex-col gap-8 bg-backgroundSections px-80 py-52">
      {renderElement}
    </div>
  );
}

export default Examples;
