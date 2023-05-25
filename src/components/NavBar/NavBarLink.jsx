function NavBarLink({ children }) {
  return (
    <li
      className="relative inline-block
    cursor-pointer
    text-2xl
    text-white
    transition-all
    duration-300
    before:absolute
    before:-bottom-0.5
    before:left-0
    before:h-0.5
    before:w-0
    before:rounded-full
    before:bg-gradient-to-r
    before:from-white
    before:to-white
    before:opacity-0
    before:transition-all
    before:duration-300
    before:content-['']
    hover:text-gray-400
    hover:before:w-full
    hover:before:opacity-100"
    >
      <a href="#">{children}</a>
    </li>
  );
}

export default NavBarLink;
