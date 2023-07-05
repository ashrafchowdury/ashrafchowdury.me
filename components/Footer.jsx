import Link from "next/link";
import HorizontalRule from "./ui/HorizontalRule";
import Buttons from "./ui/Buttons";
import { FaTwitter, FaGithub, FaLinkedin, FaRegFileAlt } from "react-icons/fa";
import Logo from "./ui/Logo";

const Footer = () => {
  return (
    <>
      <HorizontalRule />
      <footer className="w-[95%] md:w-[90%] mx-auto mb-7 flex items-center justify-between">
        <Logo />

        <div className="flex items-center justify-center space-x-2 md:space-x-3">
          <Link href="https://twitter.com/ashraf_chowdury" target="_blank">
            <Buttons style="!p-2">
              <FaTwitter />
            </Buttons>
          </Link>
          <Link href="https://github.com/ashrafchowdury" target="_blank">
            <Buttons style="!p-2">
              <FaGithub />
            </Buttons>
          </Link>
          <Link
            href="https://www.linkedin.com/in/ashrafchowdury/"
            target="_blank"
          >
            <Buttons style="!p-2">
              <FaLinkedin />
            </Buttons>
          </Link>
          <Link href="https://github.com/ashrafchowdury" target="_blank">
            <Buttons style="!p-2">
              <FaRegFileAlt />
            </Buttons>
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
