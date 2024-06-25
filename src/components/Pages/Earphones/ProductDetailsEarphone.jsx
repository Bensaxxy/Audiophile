import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Home/Footer";
import ThreeLayers from "../Home/ThreeLayers";
import MayLikeSix from "./MayLikeSix";
import ThreeGridsSix from "./ThreeGridsSix";
import EarphonesFeatures from "./EarphonesFeatures";

const ProductDetailsEarphone = ({ addToCart }) => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  const product = {
    id: 6, // Unique id for this product
    name: "  XYX1 WIRELESS EARPHONES",
    price: 599,
    image:
      "/src/assets/product-yx1-earphones/desktop/image-category-page-preview.jpg",
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
            className="mb-12 text-secondary hover:text-hoverPrimary duration-300"
          >
            Go Back
          </button>
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 font-primary">
            <div className="w-full h-[300px] lg:h-[500px] bg-no-repeat bg-cover bg-center bg-[url('/src/assets/product-yx1-earphones/mobile/image-category-page-preview.jpg')] md:bg-[url('/src/assets/product-yx1-earphones/tablet/image-category-page-preview.jpg')] lg:bg-[url('/src/assets/product-yx1-earphones/desktop/image-category-page-preview.jpg')]"></div>
            <div className="text-center lg:text-left px-6 lg:px-0">
              <p className="mb-6 text-primary">NEW PRODUCT</p>
              <h1 className="tracking-wider text-3xl sm:text-4xl md:text-[32px] lg:text-[40px] text-secondary uppercase font-bold">
                XYX1 WIRELESS EARPHONES
              </h1>
              <p className="text-secondary text-sm sm:text-base md:text-md lg:text-md mt-12">
                Tailor your listening experience with bespoke dynamic drivers
                from the new YX1 Wireless Earphones. Enjoy incredible
                high-fidelity sound even in noisy environments with its active
                noise cancellation feature.
              </p>
              <p className="text-secondary font-bold my-4 text-sm sm:text-base md:text-md lg:text-lg">
                $ 599
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
        <EarphonesFeatures />
        <ThreeGridsSix />
        <MayLikeSix />
        <ThreeLayers />
      </div>
      <Footer />
    </>
  );
};

export default ProductDetailsEarphone;
