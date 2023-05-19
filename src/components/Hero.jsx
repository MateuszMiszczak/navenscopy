import heroImg from "../imgs/hero.jpg";

function Hero() {
  return (
    <div className="bg-mainColor w-screen h-screen pt-12 ">
      <div className="grid grid-cols-2 gap-2 mx-60 my-40 place-items-center">
        <div className="text-gray-400 flex flex-col gap-10">
          <p className="text-lighterMainText text-lg">Name Nickname Surname</p>
          <div className="text-8xl flex flex-col gap-4">
            <p>
              <span className="bg-gradient-to-r from-gray-400  to-mainColorGradientTint2 bg-[length:0%_1px] bg-no-repeat bg-left-bottom hover:bg-[length:100%_1px] transition-all duration-300 hover:text-white">
                Copywriter
              </span>
            </p>
            <p>
              <span className="bg-gradient-to-r from-gray-400  to-mainColorGradientTint2 bg-[length:0%_1px] bg-no-repeat bg-left-bottom hover:bg-[length:100%_1px] transition-all duration-300 hover:text-white">
                Marketer
              </span>
            </p>
            <p>
              <span className="bg-gradient-to-r from-gray-400  to-mainColorGradientTint2 bg-[length:0%_1px] bg-no-repeat bg-left-bottom hover:bg-[length:100%_1px] transition-all duration-300 hover:text-white">
                UX Designer
              </span>
            </p>
          </div>
          <p className="text-xl text-white font-medium">
            Professional content, web design and marketing for your company.
            Reach new customers and skyrocket your sales.
          </p>
        </div>
        <div className="border-0 rounded-md overflow-hidden w-9/12 place-self-center">
          <img src={heroImg} alt="Photo of a guy working on a laptop" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
