import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
      <div key={item.id} className="mb-4">
        <div
          className={`cursor-pointer rounded-lg border border-borderLightestMain bg-gradient-to-br from-faq1 to-faq5 p-3 text-center md:text-left ${
            isExpanded ? "shadow-md shadow-green-900" : ""
          }`}
          onClick={() => handleClick(index)}
        >
          <div className="flex items-center justify-between">
            <span className="my-2 text-lg">{item.label}</span>
            <Icon className="text-xl md:text-2xl" />
          </div>
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {item.content}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    );
  });

  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-secondMainColor font-montserrat text-gray-300">
      <motion.h1
        className="my-4 text-2xl uppercase text-white md:text-5xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.2 }}
      >
        Faq
      </motion.h1>
      <motion.div
        className="mb-4 w-full md:w-3/4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        {renderedData}
      </motion.div>
      <motion.div
        className="mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.2 }}
      >
        <SocialMediaIcons />
      </motion.div>
    </section>
  );
};

export default Faq;
