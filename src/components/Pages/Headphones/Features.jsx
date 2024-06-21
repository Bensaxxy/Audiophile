import React from "react";

const Features = () => {
  return (
    <div className=" my-12">
      <div className=" container grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
        <div>
          <h1 className="tracking-wider text-2xl sm:text-3xl md:text-[28px] lg:text-[32px] text-secondary uppercase font-bold">
            FEATURES
          </h1>
          <p className=" my-10">
            Featuring a genuine leather head strap and premium earcups, these
            headphones deliver superior comfort for those who like to enjoy
            endless listening. It includes intuitive controls designed for any
            situation. Whether you’re taking a business call or just in your own
            personal space, the auto on/off and pause features ensure that
            you’ll never miss a beat.
          </p>
          <p>
            The advanced Active Noise Cancellation with built-in equalizer allow
            you to experience your audio world on your terms. It lets you enjoy
            your audio in peace, but quickly interact with your surroundings
            when you need to. Combined with Bluetooth 5. 0 compliant
            connectivity and 17 hour battery life, the XX99 Mark II headphones
            gives you superior sound, cutting-edge technology, and a modern
            design aesthetic.
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
          <div className=" flex gap-4 font-normal mt-4">
            <p className=" text-primary">1x</p>
            <p>Travel Bag</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
