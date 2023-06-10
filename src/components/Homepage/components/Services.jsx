import { motion } from "framer-motion";
import ServicesCard from "./ServicesCard";
import { servicesData } from "../../../data/servicesData";

function Services() {
  const renderCard = servicesData.map((cardData) => {
    return (
      <ServicesCard
        key={cardData.id}
        icon={cardData.id}
        header={cardData.header}
        paragraph={cardData.paragraph}
      />
    );
  });

  return (
    <div className="mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
        className="flex flex-col"
      >
        <h1 className="mx-10 mb-8 place-self-center text-2xl font-bold uppercase text-headerColor md:mb-16 md:text-4xl lg:mb-40 lg:text-5xl">
          Digital services for your company
        </h1>
      </motion.div>

      <div className="mx-auto flex w-3/5 flex-col items-center gap-4 text-center md:gap-8 lg:flex-row lg:justify-center lg:gap-24 xl:gap-48">
        {renderCard}
      </div>
    </div>
  );
}

export default Services;
