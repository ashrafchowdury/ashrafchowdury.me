import { useState, useEffect } from "react";
import Link from "next/link";
import Buttons from "./ui/Buttons";


const StickyNavbar = () => {
  const [showIndicator, setShowIndicator] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setShowIndicator(scrollTop > 250);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!showIndicator) {
    return null;
  }
  return (
    <nav className="whitespace-nowrap overflow-auto text-xs lg:text-sm bg-light dark:bg-dark border border-hLight dark:border-hDark py-3 px-5 rounded-lg sm:rounded-xl flex items-center justify-between sm:justify-center space-x-4 sm:space-x-6 lg:space-x-8 fixed z-30 top-2 sm:top-6 md:top-8 left-1/2 -translate-x-1/2 w-[95%] sm:w-auto">
      <Link href="/">Home</Link>
      <Link href="/works">Works</Link>
      <Link href="/about">About Me</Link>
      <Link href="/contact" target="_blank">
        Contact Me
      </Link>
      <Buttons style=" !py-2 text-xs lg:!text-sm !text-xs">
        Get Resume
      </Buttons>
    </nav>
  );
};

export default StickyNavbar;
