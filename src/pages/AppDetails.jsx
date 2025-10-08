import React from "react";
import { useParams } from "react-router";
import useApps from "../Hooks/useApps";
import AppDetail from "../components/AppDetail";

const AppDetails = () => {
  const { apps } = useApps();
  const { appId } = useParams();
  console.log(apps);
  return (
    <div>
      <div>
        {apps.map(
          (app) =>
            app.id == appId && <AppDetail key={app.id} app={app}></AppDetail>
        )}
      </div>
    </div>
  );
};

export default AppDetails;
