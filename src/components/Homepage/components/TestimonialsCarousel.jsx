import { useState, useEffect } from "react";
import { RxDotFilled } from "react-icons/rx";
import { testimonialsData } from "../../../data/testimonialsData";

function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="group relative mx-auto min-w-[375px] max-w-[375px] rounded-lg bg-gray-600 text-white sm:min-w-[600px] sm:max-w-[600px] lg:min-w-[1000px] lg:max-w-[1000px]">
      <div className="flex h-[30vh] flex-col items-center justify-center gap-2 rounded-2xl bg-cover bg-center duration-500 sm:h-[300] md:gap-6 lg:gap-8">
        <h2 className=" border-b border-white text-center text-2xl font-bold md:text-3xl lg:text-4xl">
          {testimonialsData[currentIndex].header}
        </h2>
        <div className="mx-auto max-w-[80%] px-4">
          <p className="place-self-center text-center text-sm md:text-base">
            {testimonialsData[currentIndex].paragraph}
          </p>
        </div>
      </div>
      <div className="top-4 flex justify-center py-2">
        {testimonialsData.map((testimonial, slideIndex) => (
          <div
            key={testimonial.id}
            onClick={() => setCurrentIndex(slideIndex)}
            className={`cursor-pointer text-2xl md:text-3xl lg:text-4xl ${
              currentIndex === slideIndex ? "text-headerColor" : "text-gray-500"
            }`}
          >
            <RxDotFilled className="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestimonialsCarousel;
