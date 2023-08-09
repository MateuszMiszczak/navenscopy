import { useState } from "react";
import { motion } from "framer-motion";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { faqData } from "../../data/faq/faqData";
import SocialMediaIcons from "../../components/SocialMediaIcons";

const Faq = () => {
  const [expandedIndex, setExpandedIndex] = useState(-1);
  const data = faqData;

  const handleClick = (nextIndex) => {
    setExpandedIndex((currentExpandedIndex) =>
      currentExpandedIndex === nextIndex ? -1 : nextIndex
    );
  };

  const renderedData = data.map((item, index) => {
    const isExpanded = index === expandedIndex;
    const Icon = isExpanded ? GoChevronUp : GoChevronDown;

    return (
      <div key={item.id} className="col-span-2">
        <div
          className={`flex cursor-pointer flex-col items-center justify-center rounded-lg border border-borderLightestMain bg-gradient-to-br from-faq1 to-faq5 p-5 text-center text-base md:items-start md:text-left md:text-3xl ${
            isExpanded ? "mb-4" : ""
          }`}
          onClick={() => handleClick(index)}
        >
          <div className="w-full">
            <div className="flex items-center justify-between">
              <span>{item.label}</span>
              <Icon className="text-xl md:text-3xl" />
            </div>
            {isExpanded && (
              <div className="mt-2 w-full rounded-lg bg-gradient-to-br from-faq1 to-faq5 p-3 text-xs shadow-md shadow-green-900">
                {item.content}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  });

  return (
    <section className="flex h-screen flex-col items-center justify-center bg-secondMainColor font-montserrat text-gray-300">
      <motion.h1
        className="my-8 text-center text-3xl uppercase text-white md:text-5xl lg:my-16 xl:my-24"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.2 }}
      >
        Faq
      </motion.h1>
      <motion.div
        className="mb-6 grid w-full grid-cols-1 gap-6 bg-secondMainColor md:w-3/4 md:grid-cols-2 lg:mb-16 lg:w-1/2 xl:mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        {renderedData}
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <SocialMediaIcons />
      </motion.div>
    </section>
  );
};

export default Faq;
