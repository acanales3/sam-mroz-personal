import { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaGithub, FaLinkedin, FaTimes } from "react-icons/fa";
import {
  BsFillPersonLinesFill,
  BsReverseLayoutTextSidebarReverse,
} from "react-icons/bs";
import { Separator } from "./ui/separator";

function Nav() {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);
  const refreshClick = () => setToggle(!toggle);

  return (
    <nav className="sticky top-0 z-10 flex h-20 w-full items-center border-b border-primary bg-zinc-50 px-4 text-xl md:justify-center">
      <ul className="hidden items-center gap-4 font-semibold md:flex">
        <li>
          <a href="/" className="decoration-primary hover:underline">
            About Me
          </a>
        </li>
        <Separator className="h-5" orientation="vertical" />
        <li>
          <a href="/work" className="decoration-primary hover:underline">
            Work
          </a>
        </li>
        <Separator className="h-5" orientation="vertical" />
        <li>
          <a href="/academics" className="decoration-primary hover:underline">
            Academics
          </a>
        </li>
        <Separator className="h-5" orientation="vertical" />
        <li>
          <a href="/contact" className="decoration-primary hover:underline">
            Contact me
          </a>
        </li>
      </ul>

      <div onClick={handleClick} className="z-10 md:hidden">
        {!toggle ? <FaBars /> : <FaTimes />}
      </div>

      <motion.div
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 25 }}
      >
        <ul
          className={
            !toggle
              ? "hidden"
              : "absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center bg-primary"
          }
        >
          <a href="/">
            <li className="py-6 text-4xl" onClick={refreshClick}>
              About Me
            </li>
          </a>
          <a href="/projects">
            <li className="py-6 text-4xl" onClick={refreshClick}>
              Work
            </li>
          </a>
          <a href="/social">
            <li className="py-6 text-4xl" onClick={refreshClick}>
              Academics
            </li>
          </a>
          <a href="/contact">
            <li className="py-6 text-4xl" onClick={refreshClick}>
              Contact Me
            </li>
          </a>
        </ul>
      </motion.div>
      <div className="fixed left-0 top-[35%] hidden flex-col lg:flex">
        <ul>
          <li className="ml-[-100px] flex h-[60px] w-[160px] items-center justify-between rounded-xl bg-primary px-2 text-base duration-300 hover:ml-[-10px]">
            <a
              className="ml-[10px] flex w-full items-center justify-between text-zinc-50"
              href="https://www.linkedin.com/in/samuel-mroz-458410219/"
              target="_blank"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="ml-[-100px] flex h-[60px] w-[160px] items-center justify-between rounded-xl bg-[#16b35a] px-2 text-base duration-300 hover:ml-[-10px]">
            <a
              className="ml-[10px] flex w-full items-center justify-between text-zinc-50"
              href="Sam_Mroz_Resume.pdf"
              download="sam-mroz-resume"
            >
              Download Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
          <li className="ml-[-100px] flex h-[60px] w-[160px] items-center justify-between rounded-xl bg-[#16c36a] px-2 text-base duration-300 hover:ml-[-10px]">
            <a
              className="ml-[10px] flex w-full items-center justify-between text-zinc-50"
              href="Sam_Mroz_Unoffical_Transcript.pdf"
              download="sam-mroz-transcript"
            >
              Download Transcript{" "}
              <BsReverseLayoutTextSidebarReverse size={30} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
