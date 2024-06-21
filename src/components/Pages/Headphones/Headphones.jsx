import React from "react";
import { useNavigate } from "react-router-dom";
import AudioGear from "../Home/AudioGear";
import Footer from "../Home/Footer";
import ThreeLayers from "../Home/ThreeLayers";

const Headphones = () => {
  const navigate = useNavigate();
  return (
    <div className="font-primary">
      <div className="bg-black">
        <section className="mt-20 flex justify-center container flex-col items-center w-full h-[200px]">
          <h1 className="tracking-wider text-5xl sm:text-5xl md:text-[42px] lg:text-[52px] font-bold text-gray mt-4">
            HEADPHONES
          </h1>
        </section>
      </div>

      {/** Section Two */}
      <div className="py-12">
        <div className="container grid grid-cols-1 lg:grid-cols-2 items-center gap-8 font-primary">
          <div className="w-full h-[300px] lg:h-[500px] bg-no-repeat bg-contain bg-center bg-[url('/src/assets/headphones/mobile/image-product.jpg')] md:bg-[url('/src/assets/headphones/tablet/image-product.jpg')] lg:bg-[url('/src/assets/headphones/desktop/image-product.jpg')]"></div>
          <div className="text-center lg:text-left px-6 lg:px-0">
            <p className="mb-6 text-primary">NEW PRODUCT</p>
            <h1 className="tracking-wider text-3xl sm:text-4xl md:text-[32px] lg:text-[40px] text-secondary uppercase font-bold">
              XX59 Headphones
            </h1>
            <p className="text-secondary text-sm sm:text-base md:text-md lg:text-md mt-12">
              Enjoy your audio almost anywhere and customize it to your specific
              tastes with the XX59 headphones. The stylish yet durable versatile
              wireless headset is a brilliant companion at home or on the move.
            </p>
            <button
              onClick={() => navigate("/ProductDetailsHeadphoneOne")}
              className="rounded-sm bg-primary py-4 px-8 text-gray mt-8 hover:bg-hoverPrimary transition-colors duration-300"
            >
              See Product
            </button>
          </div>
        </div>
      </div>

      {/** Section Three */}
      <div className="py-12">
        <div className="container grid grid-cols-1 lg:grid-cols-2 items-center gap-8 font-primary">
          <div className="order-2 text-center lg:text-left px-6 lg:px-0">
            <p className="mb-6 text-primary">NEW PRODUCT</p>
            <h1 className="tracking-wider text-3xl sm:text-4xl md:text-[32px] lg:text-[40px] text-secondary uppercase font-bold">
              XX99 Mark I Headphones
            </h1>
            <p className="text-secondary text-sm sm:text-base md:text-md lg:text-md mt-12">
              As the gold standard for headphones, the classic XX99 Mark I
              offers detailed and accurate audio reproduction for audiophiles,
              mixing engineers, and music aficionados alike in studios and on
              the go.
            </p>
            <button
              onClick={() => navigate("/ProductDetailsHeadphoneTwo")}
              className="rounded-sm bg-primary py-4 px-8 text-gray mt-8 hover:bg-hoverPrimary transition-colors duration-300"
            >
              See Product
            </button>
          </div>
          <div className="lg:order-2 w-full h-[300px] lg:h-[500px] bg-no-repeat bg-contain bg-center bg-[url('/src/assets/headphones/mobile/image-product-2.jpg')] md:bg-[url('/src/assets/headphones/tablet/image-product-2.jpg')] lg:bg-[url('/src/assets/headphones/desktop/image-product-2.jpg')]"></div>
        </div>
      </div>

      {/** Section Four */}
      <div className="py-14">
        <div className="container grid grid-cols-1 lg:grid-cols-2 items-center gap-8 font-primary">
          <div className="w-full h-[300px] lg:h-[500px] bg-no-repeat bg-contain bg-center bg-[url('/src/assets/headphones/mobile/image-category-page-preview.jpg')] md:bg-[url('/src/assets/headphones/tablet/image-product-1.jpg')] lg:bg-[url('/src/assets/headphones/desktop/image-product-1.jpg')]"></div>
          <div className="text-center lg:text-left px-6 lg:px-0">
            <p className="mb-6 text-primary">NEW PRODUCT</p>
            <h1 className="tracking-wider text-3xl sm:text-4xl md:text-[32px] lg:text-[40px] text-secondary uppercase font-bold">
              XX99 Mark II Headphones
            </h1>
            <p className="text-secondary text-sm sm:text-base md:text-md lg:text-md mt-12">
              The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing the
              balanced depth and precision of studio-quality sound.
            </p>
            <button
              onClick={() => navigate("/ProductDetailsHeadphoneThree")}
              className="rounded-sm bg-primary py-4 px-8 text-gray mt-8 hover:bg-hoverPrimary transition-colors duration-300"
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

export default Headphones;
