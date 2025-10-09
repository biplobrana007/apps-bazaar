import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { TiStarFullOutline } from "react-icons/ti";
import { Link } from "react-router";
import useApps from "../Hooks/useApps";
import LoadingSpinner from "./LoadingSpinner";

const AppCard = ({ app }) => {
  const {  loading } = useApps();
  if (loading) return <LoadingSpinner></LoadingSpinner>;
  return (
    <Link to={`/apps/${app.id}`}>
      <div className="border bg-white border-gray-300 shadow rounded p-4">
        <div className="bg-gray-100 p-7 rounded-md flex justify-center">
          <img className="" src={`${app.image}`} alt={app.title} />
        </div>
        <h2 className="text-xl font-medium my-4">{app.title}</h2>
        <div className="flex justify-between font-medium">
          <h2 className="flex items-center gap-1  text-green-500 bg-gray-100 py-1 px-2 rounded">
            <MdOutlineFileDownload></MdOutlineFileDownload>
            <span>
              {app.downloads >= 1000000
                ? `${app.downloads / 1000000}M`
                : `${app.downloads / 1000}K`}
            </span>
          </h2>
          <h2 className="flex items-center gap-1 text-amber-500 bg-amber-100 py-1 px-2 rounded">
            <TiStarFullOutline></TiStarFullOutline>
            <span>{app.ratingAvg}</span>
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
