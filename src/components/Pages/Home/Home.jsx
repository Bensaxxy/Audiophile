import React from "react";
import { motion } from "framer-motion";
import homeImg from "../../../assets/home/home.png";
import HomeTwo from "./HomeTwo";
import AudioGear from "./AudioGear";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <div className=" bg-secondary font-primary">
        <section>
          <div className="  bg-center bg-cover w-full h-screen bg-[url('/src/assets/home/mobile/image-header.jpg')] lg:bg-[url('/src/assets/home/desktop/image-hero.jpg')] md:bg-[url('/src/assets/home/tablet/image-header.jpg')] grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
            <motion.div
              className="text-center lg:text-left px-10 lg:px-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h3
                className="tracking-widest text-gray text-2xl sm:text-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ scale: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                NEW PRODUCT
              </motion.h3>
              <motion.h1
                className="tracking-wider text-5xl sm:text-5xl md:text-[42px] lg:text-[52px] font-bold text-gray mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                XX99 Mark II Headphones
              </motion.h1>
              <motion.p
                className="text-gray text-xl sm:text-base md:text-lg lg:text-xl mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                Experience natural, life-like audio and exceptional build
                quality made for the passionate music enthusiast.
              </motion.p>
              <motion.button
                className=" rounded-sm bg-primary py-4 px-8 text-gray mt-8 hover:bg-hoverPrimary transition-colors duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                See Product
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
      <HomeTwo />
      <AudioGear />
      <Footer />
    </>
  );
};

export default Home;
