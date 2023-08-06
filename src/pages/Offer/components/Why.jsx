import { motion } from "framer-motion";
const Why = () => {
  return (
    <motion.div
      className="flex flex-col items-center gap-12 text-center font-montserrat md:gap-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: 0.2, duration: 0.2 }}
      variants={{
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      123
    </motion.div>
  );
};

export default Why;
