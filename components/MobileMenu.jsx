import Link from "next/link";
import Logo from "./ui/Logo";
import { FaTimes } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const MobileMenu = () => {
  const { menu, setMenu } = useTheme();

  if (!menu) {
    return null;
  }
  return (
    <section
      className={` duration-700 fixed lg:hidden left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-30 w-[90%] sm:w-[85%] md:w-[70%] h-[70vh] md:h-[80vh] rounded-md bg-light dark:bg-dark border border-hLight dark:border-hDark flex flex-col`}
    >
      <div className=" lg:hidden w-[80%] mx-auto flex justify-between items-center mt-10">
        <Logo />

        <button
          className="lg:ml-4 py-[8px] px-[8px] focus:ring-2 ring-primary hover:bg-hLight dark:hover:bg-hDark duration-500 rounded-lg"
          onClick={() => setMenu(false)}
        >
          <FaTimes className=" text-xl lg:text-2xl dark:text-light" />
        </button>
      </div>

      <div className="mobileMenu w-[80%] mx-auto flex flex-col space-y-5 mt-10 dark:text-light">
        <Link onClick={() => setMenu(false)} href="/">
          Home
        </Link>
        <Link onClick={() => setMenu(false)} href="/works">
          Works
        </Link>
        <Link
          onClick={() => setMenu(false)}
          href="https://ashrafchowdury09.hashnode.dev/"
          target="_blank"
        >
          Blogs
        </Link>
        <Link onClick={() => setMenu(false)} href="/about">
          About Me
        </Link>
        <Link onClick={() => setMenu(false)} href="/contact">
          Contact Me
        </Link>
      </div>
    </section>
  );
};

export default MobileMenu;
