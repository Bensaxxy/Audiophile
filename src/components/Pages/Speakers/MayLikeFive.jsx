import React from "react";
import { useNavigate } from "react-router-dom";

const MayLikeFive = () => {
  const navigate = useNavigate();
  return (
    <div className=" my-20 ">
      <h1 className="tracking-wider text-3xl sm:text-4xl md:text-[32px] lg:text-[40px] text-secondary uppercase font-bold text-center mb-10 lg:mb-0">
        YOU MAY ALSO LIKE
      </h1>
      <section className=" container grid gap-8 grid-cols-1 lg:grid-cols-3">
        <div className=" text-center">
          <div className=" w-full h-[300px] lg:h-[500px] bg-no-repeat bg-contain bg-center bg-[url('/src/assets/product-zx9-speaker/mobile/image-category-page-preview.jpg')] md:bg-[url('/src/assets/product-zx9-speaker/tablet/image-category-page-preview.jpg')] lg:bg-[url('/src/assets/product-zx9-speaker/desktop/image-category-page-preview.jpg')]"></div>
          <h1 className="tracking-wider text-2xl sm:text-3xl md:text-[22px] lg:text-[30px] text-secondary uppercase font-bold mt-8 lg:mt-0">
            ZX9 SPEAKER
          </h1>
          <button
            onClick={() => navigate("/ProductDetailsSpeakerOne")}
            className=" rounded-sm bg-primary py-4 px-8 text-gray mt-8 hover:bg-hoverPrimary transition-colors duration-300"
          >
            SEE PRODUCT
          </button>
        </div>
        <div className=" text-center">
          <div className=" w-full h-[300px] lg:h-[500px] bg-no-repeat bg-contain bg-center bg-[url('/src/assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg')] md:bg-[url('/src/assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg')] lg:bg-[url('/src/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg')]"></div>

          <h1 className="tracking-wider text-2xl sm:text-3xl md:text-[22px] lg:text-[30px] text-secondary uppercase font-bold mt-8 lg:mt-0">
            XX99 MARK I
          </h1>
          <button
            onClick={() => navigate("/ProductDetailsHeadphoneTwo")}
            className=" rounded-sm bg-primary py-4 px-8 text-gray mt-8 hover:bg-hoverPrimary transition-colors duration-300"
          >
            SEE PRODUCT
          </button>
        </div>
        <div className=" text-center">
          <div className=" w-full h-[300px] lg:h-[500px] bg-no-repeat bg-contain bg-center bg-[url('/src/assets/headphones/mobile/image-product-1.jpg')] md:bg-[url('/src/assets/headphones/tablet/image-product-1.jpg')] lg:bg-[url('/src/assets/headphones/desktop/image-product-1.jpg')]"></div>

          <h1 className="tracking-wider text-2xl sm:text-3xl md:text-[22px] lg:text-[30px] text-secondary uppercase font-bold mt-8 lg:mt-0">
            XX59
          </h1>
          <button
            onClick={() => navigate("/ProductDetailsHeadphoneThree")}
            className=" rounded-sm bg-primary py-4 px-8 text-gray mt-8 hover:bg-hoverPrimary transition-colors duration-300"
          >
            SEE PRODUCT
          </button>
        </div>
      </section>
    </div>
  );
};

export default MayLikeFive;
