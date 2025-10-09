import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { TiStarFullOutline } from "react-icons/ti";
import { installedAppsId } from "../utils/localStorage";
import { ToastContainer, toast } from "react-toastify";

const InstalledApp = ({ installedApp, storedAppIds, setStoredAppIds }) => {
  const handleUninstllBtn = (appId) => {
    installedAppsId(appId);
  };

  const notify = () => toast("uninstalling...");

  return (
    <div>
    <ToastContainer />
      <div className="flex gap-5 max-sm:flex-col max-sm:items-start border p-3 bg-white rounded border-gray-200">
        <div className="bg-[#f5f5f5] p-3 rounded">
          <img className="w-10" src={installedApp.image} alt="" />
        </div>
        <div className="flex justify-between w-full">
          <div className="flex flex-col justify-between">
            <h2 className="font-bold">{installedApp.title}</h2>
            <div className="flex items-center gap-5">
              <h2 className="flex items-center gap-1  text-green-500 ">
                <MdOutlineFileDownload></MdOutlineFileDownload>
                <span>
                  {installedApp.downloads >= 1000000
                    ? `${installedApp.downloads / 1000000}M`
                    : `${installedApp.downloads / 1000}K`}
                </span>
              </h2>
              <h2 className="flex items-center gap-1 text-amber-500  ">
                <TiStarFullOutline></TiStarFullOutline>
                <span>{installedApp.ratingAvg}</span>
              </h2>
              <h2 className="text-gray-400">{`${installedApp.size} MB`}</h2>
            </div>
          </div>
          <div className="flex items-center">
            <button
              onClick={() => (
                notify(),
                handleUninstllBtn(installedApp.id),
                setTimeout(() => {
                  setStoredAppIds(
                    storedAppIds.filter((id) => id !== installedApp.id)
                  );
                  
                }, 100)
              )}
              className="py-1 px-3 cursor-pointer font-semibold bg-green-500 text-white rounded"
            >
              Uninstall
            </button>
           
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default InstalledApp;
