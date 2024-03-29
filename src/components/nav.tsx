import { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { Separator } from "./ui/separator";

function Nav() {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);
  const refreshClick = () => setToggle(!toggle);

  return (
    <nav className="sticky top-0 z-10 flex h-[80px] w-full items-center border-b border-primary bg-zinc-50 px-4 text-xl font-semibold md:justify-center">
      <ul className="hidden items-center gap-4 md:flex">
        <li>
          <a href="/" className="decoration-primary hover:underline">
            Home
          </a>
        </li>
        <Separator className="h-5" orientation="vertical" />
        <li>
          <a href="/about" className="decoration-primary hover:underline">
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
              Home
            </li>
          </a>
          <a href="/about">
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
    </nav>
  );
}

export default Nav;
