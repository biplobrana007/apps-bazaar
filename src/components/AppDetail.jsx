import React, { useState } from "react";
import Container from "./Container";
import reviewIcon from "../assets/icon-review.png";
import ratingIcon from "../assets/icon-ratings.png";
import downloadIcon from "../assets/icon-downloads.png";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { updateInstalledApps } from "../utils/localStorage";

const AppDetail = ({ app }) => {
  const [installed, setInstalled] = useState(false);

  console.log(installed);

  let data = app.ratings;
  data = [...data].reverse();

  const handleInsrtallation = (id) => {
    updateInstalledApps(id);
  };
  return (
    <div className="py-10 bg-[#f5f5f5]">
      <Container>
        <div className="px-4">
          {/* detail */}
          <div className="flex gap-10 max-md:flex-col border-b pb-7 border-gray-300">
            <div className="bg-white w-70   p-7  flex justify-center items-center">
              <img className="w-50" src={app.image} alt="" />
            </div>
            <div className="flex flex-col flex-1  justify-between">
              <div className="border-b border-gray-300 pb-5 mb-5">
                <h2 className="text-3xl font-bold">{app.title}</h2>
                <p className="space-x-2 font-medium">
                  <span className="text-gray-500">Developed by</span>
                  <span className="text-blue-600">{app.companyName}</span>
                </p>
              </div>
              <div>
                <div className="flex max-sm:justify-between sm:gap-10 mb-5">
                  <div className="flex flex-col gap-1">
                    <div>
                      <img src={downloadIcon} className="w-6" alt="" />
                    </div>
                    <p className="text-[#001931]">Downloads</p>
                    <span className="text-4xl font-extrabold">
                      {app.downloads >= 1000000
                        ? `${app.downloads / 1000000}M`
                        : `${app.downloads / 1000}K`}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div>
                      <img src={ratingIcon} className="w-6" alt="" />
                    </div>
                    <p className="text-[#001931]">Average Ratings</p>
                    <span className="text-4xl font-extrabold">
                      {app.ratingAvg}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div>
                      <img src={reviewIcon} className="w-6" alt="" />
                    </div>
                    <p className="text-[#001931]">Total Reviews</p>
                    <span className="text-4xl font-extrabold">
                      {app.reviews >= 1000000
                        ? `${app.reviews / 1000000}M`
                        : `${app.reviews / 1000}K`}
                    </span>
                  </div>
                </div>
              </div>
              <button
                disabled={installed && true}
                onClick={() => (
                  handleInsrtallation(app.id), setInstalled(true)
                )}
                className={`py-1 px-3 cursor-pointer rounded text-white font-semibold  bg-[#00D390] w-fit`}
              >
                {installed ? "Installed" : `Install Now (${app.size} MB)`}
              </button>
            </div>
          </div>
          {/* graph */}
          <div>
            <div className="h-80 border-b border-gray-300 ">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={data}
                  layout="vertical"
                  margin={{
                    top: 20,
                    bottom: 5,
                  }}
                >
                  <YAxis
                    dataKey="name"
                    type="category"
                    tickLine={false}
                    axisLine={false}
                  />

                  <XAxis
                    dataKey="count"
                    type="number"
                    domain={[0, 1200]}
                    tickLine={false}
                    axisLine={false}
                  />

                  <Tooltip />

                  <Bar dataKey="count" fill="#ff9933" barSize={20} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          {/* description */}
          <div className="mt-5">
            <h2 className="text-xl font-semibold mb-1">Description</h2>
            <div className="space-y-10 text-gray-600">
              {app.description.map((des, idx) => (
                <p key={idx}>{des}</p>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AppDetail;
