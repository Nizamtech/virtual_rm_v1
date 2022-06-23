import React, { useState } from "react";

import Navbar from "./Navbar";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      {showSidebar ? (
        <button
          className="flex text-4xl text-white items-center cursor-pointer fixed left-10 top-6 z-50"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
      ) : (
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          className="fixed  z-30 flex items-center cursor-pointer left-10 top-6"
          fill="#2B333B"
          viewBox="0 0 100 80"
          width="40"
          height="40"
        >
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      )}

      <div
        className={`top-0 left-0 w-[20vw]  bg-[#2B333B]  p-10  text-white fixed h-full z-40  ease-in-out duration-1000 
          ${showSidebar ? "translate-y-0 " : " -translate-x-full"}`}
      >
        <h3 className=" ml-24 text-4xl  text-white">
          {/* <img src={logo} alt="logo.png" /> */}
        </h3>
        <Navbar />
      </div>
    </>
  );
};
export default Sidebar;
