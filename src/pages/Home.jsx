import React from "react";
import Banner from "../components/Banner";
import Status from "../components/Status";

const Home = () => {
  return (
    <div className="py-10 bg-[#f5f5f5]">
      <Banner></Banner>
      <Status></Status>
    </div>
  );
};

export default Home;
