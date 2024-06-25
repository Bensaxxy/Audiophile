import React from "react";
import { useNavigate } from "react-router-dom";
import AudioGear from "../Home/AudioGear";
import Footer from "../Home/Footer";
import ThreeLayers from "../Home/ThreeLayers";

const Speakers = () => {
  const navigate = useNavigate();
  return (
    <div className=" font-primary">
      <div className=" bg-black">
        <section className=" mt-[70px] justify-center container flex flex-col items-center w-full h-[200px]">
          <h1 className="tracking-wider text-5xl sm:text-5xl md:text-[42px] lg:text-[52px] font-bold text-gray mt-4">
            SPEAKERS
          </h1>
        </section>
      </div>

      {/**section Two 2 */}
      <div className=" py-12">
        <div className=" container grid grid-cols-1 lg:grid-cols-2 items-center gap-8 font-primary ">
          <div className=" w-full bg-cover h-[300px] lg:h-[500px] bg-no-repeat bg-center bg-[url('/src/assets/product-zx9-speaker/mobile/image-product.jpg')] md:bg-[url('/src/assets/product-zx9-speaker/tablet/image-product.jpg')] lg:bg-[url('/src/assets/product-zx9-speaker/desktop/image-product.jpg')]"></div>
          <div className=" text-center lg:text-left px-6 lg:px-0">
            <p className="mb-6 text-primary">NEW PRODUCT</p>
            <h1 className="tracking-wider text-3xl sm:text-4xl md:text-[32px] lg:text-[40px] text-secondary uppercase font-bold">
              ZX9 SPEAKER
            </h1>
            <p className="text-secondary text-sm sm:text-base md:text-md lg:text-md mt-12">
              Upgrade your sound system with the all new ZX9 active speaker.
              It’s a bookshelf speaker system that offers truly wireless
              connectivity -- creating new possibilities for more pleasing and
              practical audio setups.
            </p>
            <button
              onClick={() => navigate("/ProductDetailsSpeakerOne")}
              className=" rounded-sm bg-primary py-4 px-8 text-gray mt-8 hover:bg-hoverPrimary transition-colors duration-300"
            >
              See Product
            </button>
          </div>
        </div>
      </div>

      {/**section three 3 */}
      <div className=" py-12">
        <div className=" container  grid grid-cols-1 lg:grid-cols-2 items-center gap-8 font-primary ">
          <div className=" order-2  text-center lg:text-left px-6 lg:px-0">
            <p className="mb-6 text-primary">NEW PRODUCT</p>
            <h1 className="tracking-wider text-3xl sm:text-4xl md:text-[32px] lg:text-[40px] text-secondary uppercase font-bold">
              ZX7 SPEAKER
            </h1>
            <p className="text-secondary text-sm sm:text-base md:text-md lg:text-md mt-12">
              Stream high quality sound wirelessly with minimal loss. The ZX7
              bookshelf speaker uses high-end audiophile components that
              represents the top of the line powered speakers for home or studio
              use.
            </p>
            <button
              onClick={() => navigate("/ProductDetailsSpeakerTwo")}
              className=" rounded-sm bg-primary py-4 px-8 text-gray mt-8 hover:bg-hoverPrimary transition-colors duration-300"
            >
              See Product
            </button>
          </div>
          <div className=" lg:order-2 bg-cover w-full h-[300px] lg:h-[500px] bg-no-repeat bg-center bg-[url('/src/assets/product-zx7-speaker/mobile/image-product.jpg')] md:bg-[url('/src/assets/product-zx7-speaker/tablet/image-product.jpg')] lg:bg-[url('/src/assets/product-zx7-speaker/desktop/image-product.jpg')]"></div>
        </div>
      </div>
      <ThreeLayers />
      <AudioGear />
      <Footer />
    </div>
  );
};

export default Speakers;
