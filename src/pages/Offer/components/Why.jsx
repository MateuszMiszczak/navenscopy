import { useState } from "react";
import { motion } from "framer-motion";
import { whyData } from "../../../data/offer/why-data";
import useMediaQuery from "../../../hooks/useMediaQuery";
const Why = () => {
  const [data, setData] = useState(whyData);
  const isAboveLargeScreens = useMediaQuery("(min-width: 1200px)");

  const renderedElements = data.gridElements.map((obj) => {
    return (
      <div key={obj.id} className="text-start text-gray-200">
        {isAboveLargeScreens ? (
          <div className="flex flex-col gap-8 md:flex-row">
            <div className="div__for--img overflow-hidden rounded-lg border-2 border-borderLighterMain1 shadow-lg shadow-gray-700">
              <img
                src={obj.img}
                className="max-w-xs basis-1/2 opacity-75 transition delay-[10] hover:scale-110 hover:opacity-90"
              />
            </div>
            <div className="div__for--h3 order-1 flex basis-1/2 flex-col gap-4">
              <h3 className="custom__h3--container text-2xl text-textLightestMain md:text-3xl">
                <span className="custom__h3 before:w-0 before:transition-all before:duration-300 before:content-['']">
                  {obj.header}
                </span>
              </h3>
              <div className="flex flex-col gap-1 md:gap-2">
                <p>{obj.description1}</p>
                <p>{obj.description2}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl text-textLightestMain md:text-3xl">
              {obj.header}
            </h3>
            <div className="flex flex-col gap-1 md:gap-2">
              <p>{obj.description1}</p>
              <p>{obj.description2}</p>
            </div>
          </div>
        )}
      </div>
    );
  });

  /*

  */

  return (
    <motion.section
      className="flex flex-col items-center gap-12 text-center font-montserrat md:gap-36"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: 0.3, duration: 0.3 }}
      variants={{
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <div className="text-4xl text-textLightestMain md:text-6xl">
        <h2 className="flex flex-col md:flex-row">
          {data.header}
          <p className="animate-pulse">
            <span>{data.questionMark}</span>
          </p>
        </h2>
      </div>
      <motion.div
        className="mx-36 flex flex-col gap-8 text-start sm:mx-48"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.4, duration: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        {renderedElements}
      </motion.div>
    </motion.section>
  );
};

export default Why;
