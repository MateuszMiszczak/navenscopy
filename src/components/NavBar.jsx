import NavBarLink from "./NavBarLink";
function NavBar() {
  return (
    <div className="bg-colorMain fixed top-0 left-0 right-0 ">
      <nav className="flex items-center justify-start mx-20 py-6 font-cinzel">
        <h1 className="font-lobster text-3xl  text-white">
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
