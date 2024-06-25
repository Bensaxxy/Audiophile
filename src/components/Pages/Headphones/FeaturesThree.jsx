import React from "react";

const FeaturesThree = () => {
  return (
    <div className=" my-12">
      <div className=" container grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
        <div>
          <h1 className="tracking-wider text-2xl sm:text-3xl md:text-[28px] lg:text-[32px] text-secondary uppercase font-bold">
            FEATURES
          </h1>
          <p className=" my-10">
            These headphones have been created from durable, high-quality
            materials tough enough to take anywhere. Its compact folding design
            fuses comfort and minimalist style making it perfect for travel.
            Flawless transmission is assured by the latest wireless technology
            engineered for audio synchronization with videos.
          </p>
          <p>
            More than a simple pair of headphones, this headset features a pair
            of built-in microphones for clear, hands-free calling when paired
            with a compatible smartphone. Controlling music and calls is also
            intuitive thanks to easy-access touch buttons on the earcups.
            Regardless of how you use the XX59 headphones, you can do so all day
            thanks to an impressive 30-hour battery life that can be rapidly
            recharged via USB-C.
          </p>
        </div>
        <div>
          <h1 className="tracking-wider text-2xl sm:text-3xl md:text-[28px] lg:text-[32px] text-secondary uppercase font-bold">
            in the box
          </h1>
          <div className=" flex gap-4 font-normal mt-10">
            <p className=" text-primary">1x</p>
            <p>Headphone Unit</p>
          </div>
          <div className=" flex gap-4 font-normal mt-4">
            <p className=" text-primary">2x</p>
            <p>Replacement Earcups</p>
          </div>
          <div className=" flex gap-4 font-normal mt-4">
            <p className=" text-primary">1x</p>
            <p>User Manual</p>
          </div>
          <div className=" flex gap-4 font-normal mt-4">
            <p className=" text-primary">1x</p>
            <p>3.5mm 5m Audio Cable</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesThree;
