const Header = () => {
  return (
    <header className="h-20 w-full flex justify-center shadow-md fixed z-20 bg-background">
      <div className="w-4/5 flex justify-between items-center">
        <a href={"#home"} className="text-2xl w-full">
          Eric Lam
        </a>
        <div className="text-lg w-[60%] flex justify-between">
          <a href="#home" className="underline-hover">
            Home
          </a>

          <a href={"#about"} className="underline-hover">
            About
          </a>
          <a href={"#experience"} className="underline-hover">
            Experience
          </a>
          <a href={"#projects"} className="underline-hover">
            Projects
          </a>
          <a href={"#contact"} className="underline-hover">
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
