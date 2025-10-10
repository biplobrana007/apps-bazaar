import React from "react";
import { useParams } from "react-router";
import useApps from "../Hooks/useApps";
import AppDetail from "../components/AppDetail";
import LoadingSpinner from "../components/LoadingSpinner";
import AppNotFound from "../components/AppNotFound";

const AppDetails = () => {
  const { apps, loading } = useApps();
  const { appId } = useParams();

  const app = apps.find((app) => app.id == appId);

  if (loading) return <LoadingSpinner></LoadingSpinner>;
  return (
    <div>
      <div>
        {
          app? <AppDetail  app={app}></AppDetail> : <AppNotFound></AppNotFound>
        }
      </div>
    </div>
  );
};

export default AppDetails;
