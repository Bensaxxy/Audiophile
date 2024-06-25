import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AudioGear from "../Home/AudioGear";
import Footer from "../Home/Footer";
import ThreeLayers from "../Home/ThreeLayers";
import MayLikeFive from "./MayLikeFive";
import SpeakerFeaturesTwo from "./SpeakerFeaturesTwo";
import ThreeGridsFive from "./ThreeGridsFive";

const ProductDetailsSpeakerTwo = ({ addToCart }) => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  const product = {
    id: 5, // Unique id for this product
    name: "ZX7 SPEAKER",
    price: 3500,
    image:
      "/src/assets/product-zx7-speaker/desktop/image-category-page-preview.jpg",
    quantity: quantity,
  };

  const handleAddToCart = () => {
    addToCart(product);
  };
  return (
    <>
      <div className="my-20">
        <div className="mx-auto container py-12">
          <button
            onClick={() => navigate(-1)}
            className="hover:text-hoverPrimary duration-300 mb-12 text-secondary"
          >
            Go Back
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 font-primary">
            <div className="w-full h-[300px] lg:h-[500px] bg-no-repeat bg-contain bg-center bg-[url('/src/assets/product-zx7-speaker/mobile/image-category-page-preview.jpg')] md:bg-[url('/src/assets/product-zx7-speaker/tablet/image-category-page-preview.jpg')] lg:bg-[url('/src/assets/product-zx7-speaker/desktop/image-category-page-preview.jpg')]"></div>
            <div className="text-center lg:text-left px-6 lg:px-0">
              <p className="mb-6 text-primary">NEW PRODUCT</p>
              <h1 className="tracking-wider text-3xl sm:text-4xl md:text-[32px] lg:text-[40px] text-secondary uppercase font-bold">
                ZX7 SPEAKER
              </h1>
              <p className="text-secondary text-sm sm:text-base md:text-md lg:text-md mt-12">
                Stream high quality sound wirelessly with minimal to no loss.
                The ZX7 speaker uses high-end audiophile components that
                represents the top of the line powered speakers for home or
                studio use.
              </p>
              <p className="text-secondary font-bold my-4 text-sm sm:text-base md:text-md lg:text-lg">
                $ 3,500
              </p>
              <div className="flex items-center gap-8">
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
        <SpeakerFeaturesTwo />
        <ThreeGridsFive />
        <MayLikeFive />
        <ThreeLayers />
        <AudioGear />
      </div>
      <Footer />
    </>
  );
};

export default ProductDetailsSpeakerTwo;
