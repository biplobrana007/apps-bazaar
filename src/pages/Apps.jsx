import React, { useState } from "react";
import Container from "../components/Container";
import useApps from "../Hooks/useApps";
import AppCard from "../components/AppCard";

const Apps = () => {
  const { apps } = useApps();
  const [inputValue, setInputValue] = useState("");
  console.log(inputValue);
  const foundApps = apps.filter((app) =>
    app.title.toLowerCase().includes(inputValue.trim().toLowerCase())
  );
  console.log(foundApps);
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div className="py-10  bg-[#f5f5f5]">
      <Container>
        <div className="px-4">
          <div className="text-center font-bold mb-10">
            <h2 className="text-5xl">Our All Applications</h2>
            <p className="text-xl font-normal my-5 text-black/60">
              Explore All Apps on the Market developed by us. We code for
              Millions.
            </p>
          </div>
          <div className="my-4 flex justify-between items-center max-sm:flex-col-reverse gap-10 mb-7">
            <h2 className="text-2xl font-semibold">{`(${foundApps.length}) Apps Found`}</h2>
            <label className="input">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                type="search"
                value={inputValue}
                onChange={handleChange}
                required
                placeholder="Search"
              />
            </label>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {foundApps.map((app) => (
              <AppCard key={app.id} app={app}></AppCard>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Apps;
