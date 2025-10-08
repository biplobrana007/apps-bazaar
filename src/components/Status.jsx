import React from "react";

const Status = () => {
  return (
    <div className="bg-gradient-to-r from-[#632ee3] to-[#9f62f2] py-15">
      <div className="px-4 md:px-8 lg:w-10/12 xl:w-8/12 mx-auto">
       <div>
        <h2 className="text-white font-bold text-4xl lg:text-5xl text-center">Trusted by Millions, Built for You</h2>
        <div className="mt-10 flex justify-between gap-10 max-md:flex-col text-center">
            <div className="text-white/80 font-light flex flex-col gap-5 items-center">
                <p>Total Downloads</p>
                <h1 className="text-5xl md:text-6xl text-white font-bold"><span>29.6</span>M</h1>
                <p>46% more than last month</p>
            </div>
            <div className="text-white/80 font-light flex flex-col gap-y-5 items-center">
                <p>Total Reviews</p>
                <h1 className="text-5xl md:text-6xl text-white font-bold"><span>906</span>K</h1>
                <p>21% more than last month</p>
            </div>
            <div className="text-white/80 font-light flex flex-col gap-5 items-center">
                <p>Active Apps</p>
                <h1 className="text-5xl md:text-6xl text-white font-bold"><span>132</span>+</h1>
                <p>31 more will Launch</p>
            </div>
        </div>
       </div>
      </div>
    </div>
  );
};

export default Status;
