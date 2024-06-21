import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Mobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="block lg:hidden">
      <nav>
        <GiHamburgerMenu
          className="text-2xl cursor-pointer"
          onClick={toggleMenu}
        />
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.6 }}
            className="text-[18px] font-bold  w-full h-screen absolute top-0 left-0 max-w-xs z-20 bg-white drop-shadow-md text-black"
          >
            <div className=" px-2 pt-6 flex items-center justify-between top-6 right-4">
              <h1 className=" absolute left-16 top-8">Logo</h1>
              <IoClose
                size={35}
                onClick={toggleMenu}
                className="cursor-pointer absolute right-6 top-6"
              />
            </div>
            <ul className="flex uppercase flex-col justify-center items-center h-screen gap-y-10">
              <li>
                <Link
                  to="/"
                  className="hover:text-primary"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/Headphones"
                  className="hover:text-primary"
                  onClick={toggleMenu}
                >
                  Headphones
                </Link>
              </li>
              <li>
                <Link
                  to="/Speakers"
                  className="hover:text-primary"
                  onClick={toggleMenu}
                >
                  Speakers
                </Link>
              </li>
              <li>
                <Link
                  to="/Earphones"
                  className="hover:text-primary"
                  onClick={toggleMenu}
                >
                  Earphones
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Mobile;
