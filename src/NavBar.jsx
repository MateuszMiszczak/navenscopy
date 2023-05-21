import NavBarLink from "./components/NavBar/NavBarLink";
import { useState, useEffect } from "react";
function NavBar() {
  const [color, setColor] = useState(false);

  const changeColor = () => {
    window.scrollY >= 300 ? setColor(true) : setColor(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);

    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  return (
    <div className="bg-colorMain fixed top-0 left-0 right-0 shadow-md shadow-gray-800">
      <nav
        className={`flex items-center justify-start px-20 py-7 font-cinzel transition-all duration-700 ${
          color ? "bg-mainColorGradientTint1Background" : "bg-mainColor"
        }`}
      >
        <h1 className="font-lobster text-3xl text-white">
          Naven's copy
          <span className="mx-4 inline-block text-lightGray font-cinzel">
            |
          </span>
        </h1>
        <ul className="flex gap-6">
          <NavBarLink>Offer</NavBarLink>
          <NavBarLink>About Me</NavBarLink>
          <NavBarLink>Portfolio</NavBarLink>
          <NavBarLink>Blog</NavBarLink>
          <NavBarLink>Faq</NavBarLink>
          <NavBarLink>Contact</NavBarLink>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
