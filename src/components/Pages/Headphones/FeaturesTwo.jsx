import React from "react";

const FeaturesTwo = () => {
  return (
    <div className=" my-12">
      <div className=" container grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
        <div>
          <h1 className="tracking-wider text-2xl sm:text-3xl md:text-[28px] lg:text-[32px] text-secondary uppercase font-bold">
            FEATURES
          </h1>
          <p className=" my-10">
            As the headphones all others are measured against, the XX99 Mark I
            demonstrates over five decades of audio expertise, redefining the
            critical listening experience. This pair of closed-back headphones
            are made of industrial, aerospace-grade materials to emphasize
            durability at a relatively light weight of 11 oz.
          </p>
          <p>
            From the handcrafted microfiber ear cushions to the robust metal
            headband with inner damping element, the components work together to
            deliver comfort and uncompromising sound. Its closed-back design
            delivers up to 27 dB of passive noise cancellation, reducing
            resonance by reflecting sound to a dedicated absorber. For
            connectivity, a specially tuned cable is included with a balanced
            gold connector.
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

export default FeaturesTwo;
