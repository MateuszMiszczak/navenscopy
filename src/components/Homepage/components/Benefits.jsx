import { motion } from "framer-motion";

import { benefitsData } from "../../../data/benefitsData";
import IconCircleComponent from "./IconCircleComponent";

function Benefits() {
  const renderData = benefitsData.map((obj) => {
    return (
      <div key={obj.id}>
        <div className="flex max-h-[500px] min-h-[500px] min-w-[375px] max-w-[375px] flex-col gap-1 overflow-hidden bg-benefitsLightest text-white">
          <div className="overflow-hidden">
            <img src={obj.img} alt="Benefits image" className="rounded-lg" />
          </div>
          <div className="grow rounded-lg bg-benefitsLighter p-10 text-start transition duration-300 hover:-translate-y-20 hover:border hover:border-gray-600">
            <div className="flex flex-col gap-3 md:gap-6">
              <div className="flex items-center gap-4">
                <IconCircleComponent
                  iconOrText={obj.id > 0 && obj.id < 10 ? `0${obj.id}` : obj.id}
                />
                <h2 className="text-xl font-medium">{obj.header}</h2>
              </div>
              <p className="text-sm">{obj.paragraph}</p>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section className="mx-auto flex h-full w-3/5 flex-col gap-10 py-12 md:h-full md:gap-16 md:py-20 lg:gap-32 lg:py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
        className="flex flex-col items-center"
      >
        <h1 className="text-2xl font-bold uppercase text-headerColor sm:text-3xl md:text-4xl lg:text-5xl">
          Benefits of cooperation
        </h1>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="flex flex-col gap-1 place-self-center overflow-hidden rounded-lg bg-benefitsLightest shadow-bottom shadow-gray-600 lg:flex-row"
      >
        {renderData}
      </motion.div>
    </section>
  );
}

export default Benefits;
