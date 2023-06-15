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
        <div className="flex min-h-[250px] min-w-[350px] max-w-[350px] flex-col gap-6 rounded-md border border-borderLightestMain bg-[f9f9f9] bg-gradient-to-br from-cardServiceBg1 to-cardServiceBg2 p-4 py-12 shadow-bottomHeavy shadow-gray-500 transition delay-[10ms] hover:-translate-y-6 hover:border-white md:items-center  lg:min-w-[400px] lg:max-w-[400px]">
          <div className="flex items-center gap-4 md:gap-10">
            <div className="h-20 w-20 overflow-hidden rounded-full bg-gradient-to-tr from-roundedBorderColor1 from-20% via-roundedBorderColor2 to-roundedBorderColor3 to-80% p-[3px]">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-cardServiceBg1 to-cardServiceBg2">
                <div className="text-3xl">
                  <ServicesCardIcon icon={icon} />
                </div>
              </div>
            </div>

            <h2 className="md:text2xl text-xl uppercase lg:text-3xl">
              {header}
            </h2>
          </div>
          <p className="text-md md:text-lg lg:text-xl">{paragraph}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default ServicesCard;
