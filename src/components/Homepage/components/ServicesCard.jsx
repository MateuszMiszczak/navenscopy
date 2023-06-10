import { motion } from "framer-motion";
import ServicesCardIcon from "./ServicesCardIcon";

function ServicesCard({ icon, header, paragraph }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
      className="flex flex-col"
    >
      <div className="xl:scale-125">
        <div className="flex min-h-[500px] min-w-[300px] max-w-[350px] flex-col items-center gap-6 rounded-md border border-gray-400 p-4 py-12 shadow-2xl shadow-gray-500 transition delay-[10ms] hover:border-gray-600 md:hover:scale-[1.1]">
          <div>
            <div className="h-52 w-52 overflow-hidden rounded-full bg-gradient-to-r from-roundedBorderColor3 via-roundedBorderColor2 to-roundedBorderColor1 p-2">
              <div className="back flex h-full w-full items-center justify-center rounded-full bg-white">
                <div className="text-8xl font-black text-headerColor">
                  <ServicesCardIcon icon={icon} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:gap-10">
            <h2 className="text-2xl uppercase text-headerColor md:text-3xl">
              {header}
            </h2>
            <p className="text-black-300 text-md md:text-lg">{paragraph}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ServicesCard;
