import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AudioGear = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <div className=" py-12">
      <div className=" container grid grid-cols-1 lg:grid-cols-2 items-center gap-8 font-primary ">
        <div
          className="  order-1 text-center lg:text-left px-6 lg:px-0"
          data-aos="fade-right"
        >
          <h1 className="tracking-wider text-3xl sm:text-4xl font-bold md:text-[32px] lg:text-[40px] text-secondary uppercase">
            Bringing you the <span className=" text-primary"> best </span> audio
            gear
          </h1>
          <p className="text-secondary text-sm sm:text-base md:text-md lg:text-md mt-12">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <div className=" lg:order-2 w-full h-[300px] lg:h-[500px] bg-no-repeat bg-contain bg-center bg-[url('/src/assets/home/mobile/image-best-gear.jpg')] md:bg-[url('/src/assets/home/tablet/image-best-gear.jpg')] lg:bg-[url('/src/assets/home/desktop/image-best-gear.jpg')]"></div>
      </div>
    </div>
  );
};

export default AudioGear;
