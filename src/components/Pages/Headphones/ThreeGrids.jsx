import React from "react";

const ThreeGrids = () => {
  return (
    <div className=" my-12">
      <section className=" container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="grid grid-cols-1 gap-4 lg:col-span-2">
            <div className="w-full h-[250px] lg:h-[250px] bg-no-repeat bg-contain bg-center bg-[url('/src/assets/headphones/mobile/image-gallery-1.jpg')] md:bg-[url('/src/assets/headphones/tablet/image-gallery-1.jpg')] lg:bg-[url('/src/assets/headphones/desktop/image-gallery-1.jpg')]"></div>
            <div className="w-full h-[250px] lg:h-[250px] bg-no-repeat bg-contain bg-center bg-[url('/src/assets/headphones/mobile/image-gallery-2.jpg')] md:bg-[url('/src/assets/headphones/tablet/image-gallery-2.jpg')] lg:bg-[url('/src/assets/headphones/desktop/image-gallery-2.jpg')]"></div>
          </div>
          <div className="w-full h-[500px] lg:h-[500px] bg-no-repeat bg-contain bg-center bg-[url('/src/assets/headphones/mobile/image-gallery-3.jpg')] md:bg-[url('/src/assets/headphones/tablet/image-gallery-3.jpg')] lg:bg-[url('/src/assets/headphones/desktop/image-gallery-3.jpg')] lg:row-span-2"></div>
        </div>
      </section>
    </div>
  );
};

export default ThreeGrids;
