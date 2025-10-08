import React from "react";
import { FaAppStoreIos, FaGooglePlay } from "react-icons/fa6";
import { Link } from "react-router";
import heroImg from "../assets/hero.png";

const Banner = () => {
  return (
    <div className=" px-4 md:px-8 lg:w-8/12 mx-auto text-center">
      <div>
        <h2 className="text-3xl lg:text-7xl font-bold">
          We Build <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#632ee3] to-[#9f62f2]">Productive</span> Apps
        </h2>
        <p className="font-normal text-xl mt-8 text-black/50">
          At <span className=" font-bold  bg-gradient-to-r text-transparent bg-clip-text from-[#632ee3] via-[#029bba] to-[#f45337]">appsbazaar</span>, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
        <div className="flex gap-4 my-8 text-black max-sm:flex-col items-center justify-center">
          <Link to="https://play.google.com/store/apps?hl=en" className="btn hover:bg-gray-200 space-x-1 bg-transparent border- border-black/20">
            <FaGooglePlay className="text-xl text-blue-700"></FaGooglePlay>
            <span className="text-lg font-semibold">Google Play</span>
          </Link>
          <Link to="https://www.apple.com/app-store/" className="btn  hover:bg-gray-200   space-x-1 bg-transparent border- border-black/20">
            <FaAppStoreIos className="text-2xl text-blue-700"></FaAppStoreIos>
            <span className="text-lg font-semibold">App Store</span>
          </Link>
        </div>
      </div>
      <div className="flex justify-center">
        <img src={heroImg} alt="hero-img" />
      </div>
    </div>
  );
};

export default Banner;
