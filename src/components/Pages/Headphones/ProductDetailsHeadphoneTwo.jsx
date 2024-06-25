import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AudioGear from "../Home/AudioGear";
import Footer from "../Home/Footer";
import ThreeLayers from "../Home/ThreeLayers";
import FeaturesTwo from "./FeaturesTwo";
import MayLikeTwo from "./MayLikeTwo";
import ThreeGridsTwo from "./ThreeGridsTwo";

const ProductDetailsHeadphoneTwo = ({ addToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const product = {
    id: 2, // Unique id for this product
    name: "XX99 Mark I Headphones",
    price: 1750,
    image:
      "/src/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg",
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
            className="hover:text-hoverPrimary duration-300 mb-12 text-secondary"
          >
            Go Back
          </button>
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 font-primary">
            <div className="w-full h-[300px] lg:h-[500px] bg-no-repeat bg-contain bg-center bg-[url('/src/assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg')] md:bg-[url('/src/assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg')] lg:bg-[url('/src/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg')]"></div>
            <div className="text-center lg:text-left px-6 lg:px-0">
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
              <p className="text-secondary font-bold my-4 text-sm sm:text-base md:text-md lg:text-lg">
                $ 1,750
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
        <FeaturesTwo />
        <ThreeGridsTwo />
        <MayLikeTwo />
        <ThreeLayers />
        <AudioGear />
      </div>
      <Footer />
    </>
  );
};

export default ProductDetailsHeadphoneTwo;
