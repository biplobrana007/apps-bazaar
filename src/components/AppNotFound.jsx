import React from "react";
import appErrImg from "../assets/App-Error.png";
import { Link } from "react-router";

const AppNotFound = () => {
  return (
    <div className="py-20">
      <div className="flex items-center justify-center flex-col text-center">
        <img src={appErrImg} alt="" />
        <div className="text-3xl md:text-5xl mt-8 font-bold">
          OPPS!! APP NOT FOUND
        </div>
        <p className="text-gray-500 my-4">
          The App you are requesting is not found on our system. please try
          another apps.
        </p>
        <Link to={-1} className="btn">
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default AppNotFound;
