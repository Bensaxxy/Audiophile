import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AudioGear from "../Home/AudioGear";
import Footer from "../Home/Footer";
import ThreeLayers from "../Home/ThreeLayers";
import MayLikeFour from "./MayLikeFour";
import ThreeGridsFour from "./ThreeGridsFour";
import SpeakerFeatures from "./SpeakerFeatures";

const ProductDetailsSpeakerOne = ({ addToCart }) => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  const product = {
    id: 4, // Unique id for this product
    name: "ZX9 SPEAKER",
    price: 4500,
    image:
      "/src/assets/product-zx9-speaker/desktop/image-category-page-preview.jpg",
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
            <div className="w-full h-[300px] lg:h-[500px] bg-no-repeat bg-contain bg-center bg-[url('/src/assets/product-zx9-speaker/mobile/image-category-page-preview.jpg')] md:bg-[url('/src/assets/product-zx9-speaker/tablet/image-category-page-preview.jpg')] lg:bg-[url('/src/assets/product-zx9-speaker/desktop/image-category-page-preview.jpg')]"></div>
            <div className="text-center lg:text-left px-6 lg:px-0">
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
              <p className="text-secondary font-bold my-4 text-sm sm:text-base md:text-md lg:text-lg">
                $ 4,500
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

        <SpeakerFeatures />
        <ThreeGridsFour />
        <MayLikeFour />
        <ThreeLayers />
        <AudioGear />
      </div>
      <Footer />
    </>
  );
};

export default ProductDetailsSpeakerOne;
