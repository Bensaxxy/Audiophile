import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../../../assets/home/headphone.png";
import img2 from "../../../assets/home/speaker.png";
import img3 from "../../../assets/home/Group 5.png";
import path from "../../../assets/home/Path 2.png";

const homeData = [
  {
    id: "1",
    image: img1,
    title: "HEADPHONES",
    subtitle: "Shop",
    link: "/headphones", // Define the route for headphones
  },
  {
    id: "2",
    image: img2,
    title: "SPEAKERS",
    subtitle: "Shop",
    link: "/speakers", // Define the route for speakers
  },
  {
    id: "3",
    image: img3,
    title: "EARPHONES",
    subtitle: "Shop",
    link: "/earphones", // Define the route for earphones
  },
];

const ThreeLayers = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="container my-20">
      <section className="mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-3">
        {homeData.map((data) => (
          <div
            key={data.id}
            className="bg-gray pb-8 rounded-md flex flex-col items-center gap-y-4 relative"
            data-aos="fade-up"
          >
            <img
              className="w-full max-w-[90px] scale-150"
              src={data.image}
              alt={data.title}
            />
            <h1 className="text-secondary text-[16px] font-bold mt-10">
              {data.title}
            </h1>
            <Link to={data.link}>
              <div className="cursor-pointer flex items-center gap-6 hover:text-hoverPrimary">
                {data.subtitle}
                <img className="w-2" src={path} alt="Arrow" />
              </div>
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ThreeLayers;
