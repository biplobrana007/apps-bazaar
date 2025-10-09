export const loadInstalledAppsId = () => {
  try {
    const installedAppsId = localStorage.getItem("installedAppsId");
    return installedAppsId ? JSON.parse(installedAppsId) : [];
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const updateInstalledApps = (id) => {
  const installedAppsId = loadInstalledAppsId();
  try {
    if (installedAppsId.includes(id)) {
      alert("exist");
    } else {
      installedAppsId.push(id);
      localStorage.setItem("installedAppsId", JSON.stringify(installedAppsId));
    }
  } catch (err) {
    console.log(err);
  }
};
