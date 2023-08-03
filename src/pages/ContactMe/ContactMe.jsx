import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import useMediaQuery from "../../hooks/useMediaQuery";

const ContactMe = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section
      id="contact"
      className="flex h-screen flex-col border-b border-borderLighterMainText bg-mainColor pt-32 text-white"
    >
      <motion.div
        className="mx-10 mb-8 place-self-center text-3xl font-medium uppercase tracking-wide sm:text-4xl md:mb-16 md:text-5xl lg:mb-40 lg:text-6xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <h1>Contact Me</h1>
      </motion.div>

      <motion.div
        className="mt-10 w-3/4 place-self-center text-black md:mt-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <form
          target="_blank"
          onSubmit={onSubmit}
          action="https://formsubmit.co/4ab93d72cf88db583bb32ee368ce8fb4"
          method="POST"
          className="grid grid-cols-1 gap-9 md:grid-cols-2"
        >
          <div className="col-span-1 grid gap-9 ">
            <div className="relative">
              <input
                className={`placeholder w-full rounded-lg border-2 border-white bg-gray-300 p-5 shadow-lg shadow-gray-700 outline-none focus:border-borderLightestMainBluish2`}
                type="text"
                placeholder="NAME"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />

              {errors.name && (
                <p className="absolute -top-7 left-0 animate-pulse text-red-500 duration-300">
                  {errors.name.type === "required" && "This field is required"}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 characters"}
                </p>
              )}
            </div>

            <div className="relative">
              <input
                className={`placeholder w-full rounded-lg border-2 border-white bg-gray-300 p-5 shadow-lg shadow-gray-700 outline-none focus:border-borderLightestMainBluish2`}
                type="text"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+=]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="absolute -top-7 left-0 animate-pulse text-red-500">
                  {errors.email.type === "required" &&
                    "Your email address is required"}
                  {errors.email.type === "pattern" && "Invalid email address"}
                </p>
              )}
            </div>

            {isAboveMediumScreens ? (
              <button
                className={`text-md rounded-lg border border-borderLightestMain bg-lighterMain p-4 font-bold uppercase text-gray-900 shadow-lg shadow-gray-700 transition delay-[10ms] hover:scale-[0.95] hover:bg-opacity-40 hover:text-white md:text-xl lg:text-2xl`}
                type="submit"
              >
                SEND ME A MESSAGE
              </button>
            ) : (
              <div className="relative col-span-1 row-span-3">
                <textarea
                  className={`placeholder w-full rounded-lg border-2 border-white bg-gray-300 p-5 shadow-lg shadow-gray-700 outline-none focus:border-borderLightestMainBluish2`}
                  type="text"
                  placeholder="YOUR MESSAGE"
                  rows="4"
                  cols="50"
                  {...register("message", {
                    required: true,
                    maxLength: 2000,
                  })}
                />
                {errors.message && (
                  <p className="absolute -top-7 left-0 animate-pulse text-red-500">
                    {errors.message.type === "required" &&
                      "This field is required"}
                    {errors.message.type === "maxLength" &&
                      "Max length is 2000 characters"}
                  </p>
                )}
              </div>
            )}
          </div>

          {isAboveMediumScreens ? (
            <div className="relative col-span-1 row-span-3">
              <textarea
                className={`placeholder h-full w-full rounded-lg border-2 border-white bg-gray-300 p-5 shadow-lg shadow-gray-700 outline-none focus:border-borderLightestMainBluish2`}
                type="text"
                placeholder="MESSAGE"
                rows="4"
                cols="50"
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="absolute -top-7 left-0 animate-pulse text-red-500">
                  {errors.message.type === "required" &&
                    "This field is required"}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 characters"}
                </p>
              )}
            </div>
          ) : (
            <button
              className={`text-md rounded-lg border border-borderLightestMain bg-lighterMain p-4 font-bold uppercase text-gray-900 shadow-lg shadow-gray-700 transition delay-[10ms] hover:scale-[0.95] hover:bg-opacity-40 hover:text-white md:text-xl lg:text-2xl`}
              type="submit"
            >
              SEND ME A MESSAGE
            </button>
          )}
        </form>
      </motion.div>
    </section>
  );
};

export default ContactMe;
