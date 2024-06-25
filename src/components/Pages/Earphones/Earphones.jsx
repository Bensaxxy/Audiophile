import React from "react";
import { useNavigate } from "react-router-dom";
import AudioGear from "../Home/AudioGear";
import Footer from "../Home/Footer";
import ThreeLayers from "../Home/ThreeLayers";

const Earphones = () => {
  const navigate = useNavigate();
  return (
    <div className="font-primary">
      <div className=" bg-black">
        <section className=" mt-[70px] justify-center container flex flex-col items-center w-full h-[200px]">
          <h1 className="tracking-wider text-5xl sm:text-5xl md:text-[42px] lg:text-[52px] font-bold text-gray mt-4">
            EARPHONES
          </h1>
        </section>
      </div>
      {/**section Two 2 */}
      <div className=" py-12">
        <div className=" container grid grid-cols-1 lg:grid-cols-2 items-center gap-8 font-primary ">
          <div className=" w-full bg-cover h-[300px] lg:h-[500px] bg-no-repeat bg-center bg-[url('/src/assets/product-yx1-earphones/mobile/image-product.jpg')] md:bg-[url('/src/assets/headphones/tablet/image-product-1.jpg')] lg:bg-[url('/src/assets/product-yx1-earphones/desktop/image-product.jpg')]"></div>
          <div className=" text-center lg:text-left px-6 lg:px-0">
            <p className="mb-6 text-primary">NEW PRODUCT</p>
            <h1 className="tracking-wider text-3xl sm:text-4xl md:text-[32px] lg:text-[40px] text-secondary uppercase font-bold">
              YX1 WIRELESS EARPHONES
            </h1>
            <p className="text-secondary text-sm sm:text-base md:text-md lg:text-md mt-12">
              Tailor your listening experience with bespoke dynamic drivers from
              the new YX1 Wireless Earphones. Enjoy incredible high-fidelity
              sound even in noisy environments with its active noise
              cancellation feature.
            </p>
            <button
              onClick={() => navigate("/ProductDetailsEarphone")}
              className=" rounded-sm bg-primary py-4 px-8 text-gray mt-8 hover:bg-hoverPrimary transition-colors duration-300"
            >
              See Product
            </button>
          </div>
        </div>
      </div>

      <ThreeLayers />
      <AudioGear />
      <Footer />
    </div>
  );
};

export default Earphones;
