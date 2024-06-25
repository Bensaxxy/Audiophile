import React from "react";

const ThreeGridsSix = () => {
  return (
    <div className=" my-12">
      <section className=" container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <div className="grid grid-cols-1 gap-4">
            <div className="w-full bg-cover h-[250px] lg:h-[250px] bg-no-repeat bg-center bg-[url('/src/assets/product-yx1-earphones/mobile/image-gallery-1.jpg')] md:bg-[url('/src/assets/product-yx1-earphones/tablet/image-gallery-1.jpg')] lg:bg-[url('/src/assets/product-yx1-earphones/desktop/image-gallery-1.jpg')]"></div>
            <div className="bg-cover w-full h-[250px] lg:h-[250px] bg-no-repeat bg-center bg-[url('/src/assets/product-yx1-earphones/mobile/image-gallery-2.jpg')] md:bg-[url('/src/assets/product-yx1-earphones/tablet/image-gallery-2.jpg')] lg:bg-[url('/src/assets/product-yx1-earphones/desktop/image-gallery-2.jpg')]"></div>
          </div>
          <div className="w-full h-[500px] bg-cover lg:h-[513px] bg-no-repeat bg-center bg-[url('/src/assets/product-yx1-earphones/mobile/image-gallery-3.jpg')] md:bg-[url('/src/assets/product-yx1-earphones/tablet/image-gallery-3.jpg')] lg:bg-[url('/src/assets/product-yx1-earphones/desktop/image-gallery-3.jpg')] lg:row-span-2"></div>
        </div>
      </section>
    </div>
  );
};

export default ThreeGridsSix;
