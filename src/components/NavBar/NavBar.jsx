import { useState } from "react";
import { HiBars3, HiOutlineXMark } from "react-icons/hi2";
import NavBarLink from "./NavBarLink";
import useMediaQuery from "../../hooks/useMediaQuery";
import { links } from "../../data/navLinksData";

function NavBar({ isTopOfPage }) {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveLargeScreens = useMediaQuery("(min-width: 1200px)");
  const navBarBackground = isTopOfPage
    ? "bg-mainColor"
    : "bg-gradient-to-b from-black via-gray-900 to-{rgba(2, 43, 59)}";
  const renderIcon = isMenuToggled ? <HiOutlineXMark /> : <HiBars3 />;

  const renderedLinks = links.map((link) => {
    return (
      <NavBarLink
        key={link.label}
        to={link.path}
        activeClassName="border-b border-red-400 text-gray-400"
      >
        {link.label}
      </NavBarLink>
    );
  });

  return (
    <nav
      className={`${navBarBackground} fixed top-0 z-40 w-full py-6 shadow-xl transition duration-500`}
    >
      <div className="mx-auto flex w-5/6 items-center justify-between lg:justify-start ">
        <h4 className="font-lobster text-3xl text-white">
          Naven's copy
          <span className="mx-4 inline-block font-cinzel text-lightGray">
            |
          </span>
        </h4>
        {isAboveLargeScreens ? (
          <div className="flex gap-8 font-cinzel text-sm">{renderedLinks}</div>
        ) : (
          <>
            <button
              className="fixed right-6 top-6 z-20 justify-self-end rounded-full bg-gray-300 p-2"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              {renderIcon}
            </button>

            {!isAboveLargeScreens && isMenuToggled && (
              <div className="to-{rgba(2, 43, 59, 0.6)} fixed bottom-0 right-0 h-full w-[300px] justify-end bg-gradient-to-b from-black via-gray-900 py-6">
                <div className="ml-[33%] mt-[20%] flex flex-col gap-10 font-cinzel text-sm">
                  {renderedLinks}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
