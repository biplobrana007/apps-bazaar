import React from "react";
import LoadingSpinner from "./LoadingSpinner";
import AppCard from "./AppCard";
import AppNotFound from "./AppNotFound";
import useApps from "../Hooks/useApps";

const AppCards = ({ foundApps}) => {
    const {loading} = useApps;
  if (loading) return <LoadingSpinner></LoadingSpinner>;
  return (
    <div>
      <div
        className={`grid grid-cols-1 ${
          foundApps.length &&
          " md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        }`}
      >
        {foundApps.length ? (
          foundApps.map((app) => <AppCard key={app.id} app={app}></AppCard>)
        ) : (
          <AppNotFound></AppNotFound>
        )}
      </div>
    </div>
  );
};

export default AppCards;
