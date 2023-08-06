const Button = ({ children }) => {
  return (
    <button
      className={`text-md hover:text-lighterMain rounded-lg border border-borderLightestMain p-4 font-bold uppercase text-textLightestMain shadow-lg shadow-gray-700 transition delay-[10ms] hover:scale-[0.95] hover:bg-lighterMain3  hover:text-white md:text-xl lg:text-2xl`}
      type="submit"
    >
      {children}
    </button>
  );
};

export default Button;
