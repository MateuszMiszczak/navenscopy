import { useState } from "react";
import { offerWhat } from "../../../data/offer/what-data";
import { motion } from "framer-motion";
import Button from "../../../components/Button";

const What = () => {
  const [data, setData] = useState(offerWhat);

  const renderedCards = data.buttons.map((card) => {
    return (
      <motion.div
        key={card.id}
        className="flex flex-col items-center gap-2 md:gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.4, duration: 0.3 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <img
          src={card.img}
          className="rounded-lg border-2 border-borderLighterMain1 opacity-75 shadow-lg shadow-gray-700"
        />
        <Button>{card.description} </Button>
      </motion.div>
    );
  });

  return (
    <section className="flex flex-col items-center gap-12 text-center font-montserrat md:gap-24">
      <div className="flex flex-col gap-8">
        <motion.div
          className="text-3xl font-medium uppercase text-textLightestMain md:text-5xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h1 className="flex flex-col md:flex-row">
            {data.header}
            <p className="animate-pulse">
              <span>{data.questionMark}</span>
            </p>
          </h1>
        </motion.div>
        <motion.div
          className="mx-2 text-xl italic text-gray-200 md:text-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.3, duration: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <p>{data.paragraph1}</p>
          <p>{data.paragraph2}</p>
        </motion.div>
      </div>
      <div className="mx-16 flex flex-col gap-12 md:flex-row">
        {renderedCards}
      </div>
    </section>
  );
};

export default What;
