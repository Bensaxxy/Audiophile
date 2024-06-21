import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
} from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <div className=" mt-0 py-12 bg-secondary font-primary">
      <section className=" container " data-aos="fade-up">
        <div className="lg:flex items-center justify-between flex-wrap gap-8 text-center md:text-left">
          <Link
            to="/"
            className="text-xl text-gray font-bold sm:mb-4"
            aria-label="Home"
          >
            Logo
          </Link>
          <ul className="flex flex-col md:flex-row gap-4 lg:gap-8 items-center justify-center md:justify-start uppercase text-gray tracking-widest text-sm md:text-base mt-10 lg:mt-0">
            <li>
              <Link to="/" className="  duration-500 hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/Headphones"
                className=" duration-500 hover:text-primary"
              >
                Headphones
              </Link>
            </li>
            <li>
              <Link
                to="/Speakers"
                className="  duration-500 hover:text-primary"
              >
                Speakers
              </Link>
            </li>
            <li>
              <Link
                to="/Earphones"
                className="  duration-500 hover:text-primary"
              >
                Earphones
              </Link>
            </li>
          </ul>
        </div>
        <p className="text-gray my-10 grid grid-cols-1 lg:grid-cols-2 text-sm sm:text-base md:text-md lg:text-[14px] text-center md:text-left px-8 md:px-0">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <div className="flex flex-col items-center md:flex-row justify-between">
          <p className=" text-gray text-center md:text-left text-[14px] md:text-[14px] lg:text-[14px]">
            Copyright 2021. All Rights Reserved
          </p>
          <div className="flex gap-3 mt-10 md:mt-0 items-center justify-center">
            <IoLogoFacebook
              size={26}
              className="text-gray hover:text-primary duration-500 cursor-pointer"
            />
            <IoLogoTwitter
              size={26}
              className="text-gray hover:text-primary duration-500 cursor-pointer"
            />
            <IoLogoInstagram
              size={26}
              className="text-gray hover:text-primary duration-500 cursor-pointer"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
