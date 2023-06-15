import TestimonialsCarousel from "./TestimonialsCarousel";

function Testimonials() {
  return (
    <div className="flex flex-col items-center gap-20 py-10 md:py-20">
      <h2 className="text-2xl font-bold text-headerColor md:text-3xl lg:text-4xl">
        Testimonials
      </h2>
      <TestimonialsCarousel />
    </div>
  );
}

export default Testimonials;
