import useApps from "../Hooks/useApps";
import { loadInstalledAppsId } from "../utils/localStorage";
import Container from "../components/Container";
import InstalledApp from "../components/InstalledApp";


const Installation = () => {

  const { apps } = useApps();
  const ids = loadInstalledAppsId();

  const installedApps = apps.filter((app) => ids.includes(app.id));

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
            <div>
              <h2>App</h2>
            </div>
            <div className="flex flex-col gap-3">
              {installedApps.map((installedApp) => (
                <InstalledApp
                  key={installedApp.id}
                  installedApp={installedApp}
                ></InstalledApp>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Installation;
