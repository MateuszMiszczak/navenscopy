function NavBarLink({ children }) {
  return (
    <li
      className="text-white hover:text-gray-400
    inline-block
    text-2xl
    relative
    cursor-pointer
    transition-all
    duration-500
    before:content-['']
    before:absolute
    before:-bottom-0.5
    before:left-0
    before:w-0
    before:h-0.5
    before:rounded-full
    before:opacity-0
    before:transition-all
    before:duration-500
    before:bg-gradient-to-r
    before:from-white
    before:to-white
    hover:before:w-full
    hover:before:opacity-100"
    >
      <a href="#">{children}</a>
    </li>
  );
}

export default NavBarLink;
