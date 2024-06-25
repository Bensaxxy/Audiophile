import React from "react";

const SpeakerFeaturesTwo = () => {
  return (
    <div className=" my-12">
      <div className=" container grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
        <div>
          <h1 className="tracking-wider text-2xl sm:text-3xl md:text-[28px] lg:text-[32px] text-secondary uppercase font-bold">
            FEATURES
          </h1>
          <p className=" my-10">
            Reap the advantages of a flat diaphragm tweeter cone. This provides
            a fast response rate and excellent high frequencies that lower
            tiered bookshelf speakers cannot provide. The woofers are made from
            aluminum that produces a unique and clear sound. XLR inputs allow
            you to connect to a mixer for more advanced usage.
          </p>
          <p>
            The ZX7 speaker is the perfect blend of stylish design and high
            performance. It houses an encased MDF wooden enclosure which
            minimises acoustic resonance. Dual connectivity allows pairing
            through bluetooth or traditional optical and RCA input. Switch input
            sources and control volume at your finger tips with the included
            wireless remote. This versatile speaker is equipped to deliver an
            authentic listening experience.
          </p>
        </div>
        <div>
          <h1 className="tracking-wider text-2xl sm:text-3xl md:text-[28px] lg:text-[32px] text-secondary uppercase font-bold">
            in the box
          </h1>
          <div className=" flex gap-4 font-normal mt-10">
            <p className=" text-primary">2x</p>
            <p>Speaker Unit</p>
          </div>
          <div className=" flex gap-4 font-normal mt-4">
            <p className=" text-primary">2x</p>
            <p>Speaker Cloth Panel</p>
          </div>
          <div className=" flex gap-4 font-normal mt-4">
            <p className=" text-primary">1x</p>
            <p>User Manual</p>
          </div>
          <div className=" flex gap-4 font-normal mt-4">
            <p className=" text-primary">1x</p>
            <p>3.5mm 7.5m Audio Cable</p>
          </div>
          <div className=" flex gap-4 font-normal mt-4">
            <p className=" text-primary">1x</p>
            <p>7.5m Optical Cable</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakerFeaturesTwo;
