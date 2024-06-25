import React from "react";

const EarphonesFeatures = () => {
  return (
    <div className=" my-12">
      <div className=" container grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
        <div>
          <h1 className="tracking-wider text-2xl sm:text-3xl md:text-[28px] lg:text-[32px] text-secondary uppercase font-bold">
            FEATURES
          </h1>
          <p className=" my-10">
            Experience unrivalled stereo sound thanks to innovative acoustic
            technology. With improved ergonomics designed for full day wearing,
            these revolutionary earphones have been finely crafted to provide
            you with the perfect fit, delivering complete comfort all day long
            while enjoying exceptional noise isolation and truly immersive
            sound.
          </p>
          <p>
            The YX1 Wireless Earphones features customizable controls for
            volume, music, calls, and voice assistants built into both earbuds.
            The new 7-hour battery life can be extended up to 28 hours with the
            charging case, giving you uninterrupted play time. Exquisite
            craftsmanship with a splash resistant design now available in an all
            new white and grey color scheme as well as the popular classic
            black.
          </p>
        </div>
        <div>
          <h1 className="tracking-wider text-2xl sm:text-3xl md:text-[28px] lg:text-[32px] text-secondary uppercase font-bold">
            in the box
          </h1>
          <div className=" flex gap-4 font-normal mt-10">
            <p className=" text-primary">2x</p>
            <p>Earphone Unit</p>
          </div>
          <div className=" flex gap-4 font-normal mt-4">
            <p className=" text-primary">6x</p>
            <p>Multi-size Earplugs</p>
          </div>
          <div className=" flex gap-4 font-normal mt-4">
            <p className=" text-primary">1x</p>
            <p>User Manual</p>
          </div>
          <div className=" flex gap-4 font-normal mt-4">
            <p className=" text-primary">1x</p>
            <p>USB-C Charging Cable</p>
          </div>
          <div className=" flex gap-4 font-normal mt-4">
            <p className=" text-primary">1x</p>
            <p>Travel Pouch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarphonesFeatures;
