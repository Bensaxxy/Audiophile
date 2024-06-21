import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AudioGear from "../Home/AudioGear";
import Footer from "../Home/Footer";
import ThreeLayers from "../Home/ThreeLayers";
import Features from "./Features";
import MayLikeOne from "./MayLikeOne";
import ThreeGrids from "./ThreeGrids";

const ProductDetailsHeadphoneOne = ({ addToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const product = {
    id: 1,
    name: "XX99 Mark II Headphones",
    price: 2999,
    image: "/src/assets/headphones/desktop/image-category-page-preview.jpg",
    quantity: quantity,
  };

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <>
      <div className="font-primary my-20">
        <div className="mx-auto container py-12">
          <button
            onClick={() => navigate(-1)}
            className="mb-12 hover:text-hoverPrimary duration-300 text-secondary"
          >
            Go Back
          </button>
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 font-primary">
            <div className="w-full h-[300px] lg:h-[500px] bg-no-repeat bg-contain bg-center bg-[url('/src/assets/headphones/mobile/image-category-page-preview.jpg')] md:bg-[url('/src/assets/headphones/tablet/image-category-page-preview.jpg')] lg:bg-[url('/src/assets/headphones/desktop/image-category-page-preview.jpg')]"></div>
            <div className="text-center lg:text-left px-6 lg:px-0">
              <p className="mb-6 text-primary">NEW PRODUCT</p>
              <h1 className="tracking-wider text-3xl sm:text-4xl md:text-[32px] lg:text-[40px] text-secondary uppercase font-bold">
                XX99 Mark II Headphones
              </h1>
              <p className="text-secondary text-sm sm:text-base md:text-md lg:text-md mt-12">
                The new XX99 Mark II headphones is the pinnacle of pristine
                audio. It redefines your premium headphone experience by
                reproducing the balanced depth and precision of studio-quality
                sound.
              </p>
              <p className="text-secondary font-bold my-4 text-sm sm:text-base md:text-md lg:text-lg">
                $ 2,999
              </p>
              <div className="flex items-center gap-8 justify-center lg:justify-start">
                <div className="flex gap-6 bg-gray py-4 px-8">
                  <button
                    onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                    className="hover:text-hoverPrimary duration-300"
                  >
                    -
                  </button>
                  <p className="text-secondary font-bold text-sm sm:text-base md:text-md lg:text-lg">
                    {quantity}
                  </p>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="hover:text-hoverPrimary duration-300"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={handleAddToCart}
                  className="rounded-sm bg-primary py-4 px-8 text-gray hover:bg-hoverPrimary transition-colors duration-300"
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </div>
        <Features />
        <ThreeGrids />
        <MayLikeOne />
        <ThreeLayers />
        <AudioGear />
      </div>
      <Footer />
    </>
  );
};

export default ProductDetailsHeadphoneOne;
