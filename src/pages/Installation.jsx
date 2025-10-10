import useApps from "../Hooks/useApps";
import { loadInstalledAppsId } from "../utils/localStorage";
import Container from "../components/Container";
import InstalledApp from "../components/InstalledApp";
import { useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";

const Installation = () => {
  const [storedAppIds, setStoredAppIds] = useState(loadInstalledAppsId());
  const [sortBy, setSortBy] = useState("none");

  const { apps, loading } = useApps();

  const installedApps = apps.filter((app) => storedAppIds.includes(app.id));

  const sortedApps = () => {
    if (sortBy === "low-high") {
      return [...installedApps].sort((a, b) => a.downloads - b.downloads);
    } else if (sortBy === "high-low") {
      return [...installedApps].sort((a, b) => b.downloads - a.downloads);
    } else {
      return installedApps;
    }
  };

  if (loading) return <LoadingSpinner></LoadingSpinner>;

  return (
    <div className="py-10  bg-[#f5f5f5] min-h-screen">
      <Container>
        <div className="px-4">
          <div className="text-center font-bold mb-10">
            <h2 className="text-5xl">Your Installed Apps</h2>
            <p className="text-xl font-normal my-5 text-black/60">
              Explore All Trending Apps on the Market developed by us
            </p>
          </div>
          <div>
            <div className="max-md:flex-col-reverse max-md:items-start gap-5 flex justify-between items-center mb-5">
              <h2 className="text-2xl font-semibold">{`(${installedApps.length}) ${installedApps.length> 1 ? "Apps": "App"} Found`}</h2>
              <select
                aria-placeholder="shot"
                className="select select-bordered "
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="none">Sort By Time</option>
                <option value="high-low">High-Low</option>
                <option value="low-high">Low-High</option>
              </select>
            </div>
            <div className={installedApps.length && "flex flex-col gap-3"}>
              {installedApps.length ? (
                sortedApps().map((installedApp) => (
                  <InstalledApp
                    key={installedApp.id}
                    installedApp={installedApp}
                    storedAppIds={storedAppIds}
                    setStoredAppIds={setStoredAppIds}
                  ></InstalledApp>
                ))
              ) : (
                <div className="text-center">
                  <h2 className="mt-10 text-3xl font-bold  text-gray-700">
                    There is no installed apps!
                  </h2>
                  <p className="text-blue-600 mt-2 text-lg">Please, install an app first!</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Installation;
