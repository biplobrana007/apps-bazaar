import React from "react";
import Banner from "../components/Banner";
import Status from "../components/Status";
import TrendingApps from "../components/TrendingApps";
import useApps from "../Hooks/useApps";
import LoadingSpinner from "../components/LoadingSpinner";

const Home = () => {
  const { loading } = useApps();
  if(loading) return <LoadingSpinner></LoadingSpinner>
  return (
    <div className="py-10 bg-[#f5f5f5]">
      <Banner></Banner>
      <Status></Status>
      <TrendingApps></TrendingApps>
    </div>
  );
};

export default Home;
