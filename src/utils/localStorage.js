export const loadInstalledAppsId = () => {
  try {
    const installedAppsId = localStorage.getItem("installedAppsId");
    return installedAppsId ? JSON.parse(installedAppsId) : [];
  } catch (err) {
    console.log(err);
  }
};

export const updateInstalledApps = (id) => {
  const installedAppsId = loadInstalledAppsId();
  try {
    if (installedAppsId.includes(id)) {
      alert("Already installed....");
    } else {
      const updateInstalledAppsId = [...installedAppsId,id] 
      localStorage.setItem("installedAppsId", JSON.stringify(updateInstalledAppsId));
    }
  } catch (err) {
    console.log(err);
  }
};

export const installedAppsId = (appId) =>{
    const installedAppsId = loadInstalledAppsId();
    try{
        const updateInstalledApps = installedAppsId.filter(id=> id !== appId  ) 
        localStorage.setItem("installedAppsId", JSON.stringify(updateInstalledApps))
    }catch(err){
        console.log(err)
    }
}
