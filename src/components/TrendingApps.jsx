import React from "react";
import AppCard from "./AppCard";
import useApps from "../Hooks/useApps";
import { Link } from "react-router";
import Container from "./Container";
import LoadingSpinner from "./LoadingSpinner";

const TrendingApps = () => {
  const { apps,loading } = useApps();
  if(loading) return <LoadingSpinner></LoadingSpinner>
  return (
    <div className="mt-15">
      <Container>
        <div className="px-4">
          <div className="text-center font-bold">
            <h2 className="text-5xl">Trending Apps</h2>
            <p className="text-xl font-normal my-5 text-black/60">
              Explore All Trending Apps on the Market developed by us
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {apps.slice(0, 8).map((app) => (
              <AppCard key={app.id} app={app}></AppCard>
            ))}
          </div>
          <div className="flex justify-center mt-10">
          <Link
              to="apps"
              className="py-2 px-3 w-fit rounded gap-2 font-semibold flex items-center text-white bg-gradient-to-r from-[#632ee3] to-[#9f62f2]"
            >
              <span>Show All</span>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TrendingApps;
