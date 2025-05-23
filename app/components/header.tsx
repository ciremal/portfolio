import Link from "next/link";

const Header = () => {
  return (
    <header className="h-25 w-full flex justify-center shadow-md fixed z-10 bg-background">
      <div className="w-4/5 flex justify-between items-center">
        <Link href={"/"} className="text-4xl w-full">
          Eric Lam
        </Link>
        <div className="text-2xl w-[60%] flex justify-between">
          <a href={"/"}>Home</a>
          <a href={"#about"}>About</a>
          <a href={"#experience"}>Experience</a>
          <a href={"#projects"}>Projects</a>
          <a href={"#contact"}>Contact</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
