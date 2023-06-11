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
        <div className="flex min-h-[250px] min-w-[350px] max-w-[350px] flex-col gap-6 rounded-md border border-gray-400 bg-[f9f9f9] p-4 py-12 shadow-2xl shadow-gray-500 transition delay-[10ms] hover:border-gray-600 md:items-center md:hover:scale-[1.1] lg:min-w-[400px] lg:max-w-[400px]">
          <div className="flex items-center gap-4 md:gap-10">
            <div className="h-20 w-20 overflow-hidden rounded-full bg-gradient-to-r from-roundedBorderColor3 via-roundedBorderColor2 to-roundedBorderColor1 p-2">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
                <div className="text-xl font-black text-headerColor">
                  <ServicesCardIcon icon={icon} />
                </div>
              </div>
            </div>

            <h2 className="md:text2xl text-xl uppercase text-headerColor lg:text-3xl">
              {header}
            </h2>
          </div>
          <p className="text-black-300 text-md md:text-lg lg:text-xl">
            {paragraph}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default ServicesCard;
