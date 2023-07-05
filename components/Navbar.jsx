import { BsListNested, BsSunset, BsMoonStars, BsGithub } from "react-icons/bs";
import { BiFile } from "react-icons/bi";
import Link from "next/link";
import Logo from "./ui/Logo";
import Buttons from "./ui/Buttons";
import MobileMenu from "./MobileMenu";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, setMenu, toggleTheme } = useTheme();

  return (
    <nav className=" h-24 sm:h-28 md:h-32 lg:h-36 flex items-center justify-between mx-auto">
      <div className="flex items-center">
        <Logo />
        <div className="desktop_links w-[80%] mx-auto hidden lg:flex ml-8 dark:text-light">
          <Link href="/">Home</Link>
          <Link href="/works">Works</Link>
          <Link href="/about">About Me</Link>
          <Link href="/contact" target="_blank">
            Contact Me
          </Link>
        </div>
      </div>

      <div className="flex items-center space-x-2 md:space-x-3 lg:space-x-3 mr-[6px]">
        <Link href="" className=" ">
          <Buttons style="hidden sm:block !p-2 text-sm md:text-sm lg:text-xl">
            <BsGithub />
          </Buttons>
        </Link>

        <Buttons
          style=" !p-2 text-sm md:text-sm lg:text-xl"
          onclick={() => toggleTheme()}
        >
          {theme == "dark" ? <BsSunset /> : <BsMoonStars />}
        </Buttons>

        <Buttons style=" !p-2 text-sm lg:hidden" onclick={() => setMenu(true)}>
          <BsListNested className="md:text-sm" />
        </Buttons>
        <div className=" bg-hLight dark:bg-hDark w-[2px] h-7 mx-2"></div>

        <Buttons style=" md:!py-[10px] md:!px-5 !px-3 lg:!py-3 lg:!px-6 whitespace-nowrap">
          <BiFile className="mr-1 sm:mr-2 text-sm md:text-[16px]" />
          Get Resume
        </Buttons>
      </div>

      <MobileMenu />
    </nav>
  );
};

export default Navbar;
