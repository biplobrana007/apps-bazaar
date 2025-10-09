import React from "react";
import { useParams } from "react-router";
import useApps from "../Hooks/useApps";
import AppDetail from "../components/AppDetail";
import LoadingSpinner from "../components/LoadingSpinner";

const AppDetails = () => {
  const { apps,loading } = useApps();
  const { appId } = useParams();

  if(loading) return <LoadingSpinner></LoadingSpinner>
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
