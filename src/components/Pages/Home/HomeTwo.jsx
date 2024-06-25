import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img2 from "../../../assets/home/speaker.png";
import ThreeLayers from "./ThreeLayers";
import { Link } from "react-router-dom";

const HomeTwo = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className=" py-20 font-primary">
      <ThreeLayers />
      {/*section two 2*/}
      <div className=" container">
        <div className=" my-12 w-full">
          <div className=" overflow-hidden text-center md:text-left pt-28 md-28 md:md-0  flex flex-wrap justify-center items-center lg:gap-20 gap-10 rounded-lg bg-primary">
            <div data-aos="fade-right">
              <img
                className=" md:scale-125 w-full h-auto max-w-sm md:max-w-md lg:max-w-xl xl:max-w-2xl"
                src={img2}
              />
            </div>
            <div className=" pb-14" data-aos="fade-left">
              <h1 className="tracking-wider text-4xl sm:text-5xl md:text-[42px] lg:text-[60px] font-bold text-gray">
                ZX9 <br /> SPEAKER
              </h1>
              <p className="text-gray text-sm sm:text-base md:text-lg lg:text-xl mt-4">
                Upgrade to premium speakers that are <br /> phenomenally built
                to deliver truly remarkable <br /> sound.
              </p>
              <Link to="/ProductDetailsSpeakerOne">
                <button className=" rounded-sm bg-black py-3 px-8 text-gray mt-8 hover:bg-secondary transition-colors duration-300">
                  SEE PRODUCT
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/*section two 3*/}
        <div className="  lg:bg-[url('/src/assets/home/image-speaker-bg.jpg')] md:bg-[url('/src/assets/home/md-speaker-bg.jpg')] bg-[url('/src/assets/home/sm-speaker-bg.jpg')] container bg-center bg-cover w-full h-[300px] flex flex-wrap items-center text-center md:text-left rounded-lg ">
          <div data-aos="fade-right">
            <h1 className="tracking-wider text-4xl sm:text-5xl md:text-[42px] lg:text-[60px] font-bold text-secondary">
              ZX7 SPEAKER
            </h1>
            <Link to="/ProductDetailsSpeakerTwo">
              <button className=" rounded-sm border-2 border-secondary py-3 px-8 text-secondary mt-8 hover:bg-secondary hover:text-gray transition-colors duration-300">
                SEE PRODUCT
              </button>
            </Link>
          </div>
          <div>
            <img />
          </div>
        </div>

        {/*section two 4*/}
        <div className=" my-12 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          <div
            className=" rounded-lg lg:bg-[url('/src/assets/home/desktop/image-earphones-yx1.jpg')] md:bg-[url('/src/assets/home/tablet/image-earphones-yx1.jpg')] bg-[url('/src/assets/home/mobile/image-earphones-yx1.jpg')] bg-center bg-cover w-full h-[300px]"
            data-aos="fade-right"
          ></div>
          <div
            className="bg-gray w-full h-[300px] py-20 px-10 rounded-lg"
            data-aos="fade-left"
          >
            <h1 className="tracking-wider text-3xl sm:text-4xl md:text-[32px] lg:text-[40px] font-bold text-secondary">
              YX1 EARPHONES
            </h1>
            <Link to="/ProductDetailsEarphone">
              <button className=" rounded-sm border-2 border-secondary py-3 px-8 text-secondary mt-8 hover:bg-secondary hover:text-gray transition-colors duration-300">
                See Product
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTwo;
