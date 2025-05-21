import Link from "next/link";

const Header = () => {
  return (
    <header className="h-25 w-full flex justify-center shadow-md fixed z-10 bg-background">
      <div className="w-4/5 flex justify-between items-center">
        <Link href={"/"} className="text-4xl w-full">
          Eric Lam
        </Link>
        <div className="text-2xl w-[60%] flex justify-between">
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/experience"}>Experience</Link>
          <Link href={"/projects"}>Projects</Link>
          <Link href={"/contact"}>Contact</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
