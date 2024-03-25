import { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);
  const refreshClick = () => setToggle(!toggle);

  return (
    <div className="sticky top-0 w-full h-[80px] flex md:justify-center items-center px-4 bg-[#22c55e] text-[#000000] text-xl font-semibold z-10 border-b-4 border-black">
      <ul className="hidden md:flex">
        <a href="/" className="px-4">
          <li>Home</li>
        </a>
        <a href="/about" className="px-4">
          <li>About Me</li>
        </a>
        <a href="/work" className="px-4">
          <li>Work</li>
        </a>
        <a href="/academics" className="px-4">
          <li>Academics</li>
        </a>
        <a href="/contact" className="px-4">
          <li>Contact Me</li>
        </a>
      </ul>

      <div onClick={handleClick} className="md:hidden z-10">
        {!toggle ? <FaBars></FaBars> : <FaTimes></FaTimes>}
      </div>

      <motion.div
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 25 }}
      >
        <ul
          className={
            !toggle
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen bg-[#22c55e] flex flex-col justify-center items-center"
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
    </div>
  );
};

export default Nav;
