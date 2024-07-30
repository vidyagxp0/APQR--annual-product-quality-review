import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Dialog from "@mui/material/Dialog";

export default function BottomHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSite, setIsSite] = useState("");
  const division = [
    {
      site: "Corporate",
      set: "Corpo",
    },
    {
      site: "Dewas",
      set: "De",
    },
    {
      site: "Indore",
      set: "IDR",
    },
  ];
  const process = [
    {
      processId: 2,
      process: "APQR",
      route: "/new-pqr",
    },
  ];
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-between  bg-slate-300 px-10">
        {/* <div className="flex items-center">
          <img src="./gxplogo.png" className="h-10 mr-2" alt="" />
        </div> */}
        <div className="flex gap-4 items-center justify-center bg-slate-300 py-2 text-blue-500 font-medium">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `text-blue-500 ${
                isActive
                  ? "text-blue-600 underline text-xl underline-offset-8"
                  : "underline-offset-4 hover:underline"
              }`
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/analytics"
            className={({ isActive }) =>
              `text-blue-500 ${
                isActive
                  ? "text-blue-600 underline text-xl underline-offset-8"
                  : "underline-offset-4 hover:underline"
              }`
            }
          >
            Analytics
          </NavLink>
          <NavLink
            to="/notification"
            className={({ isActive }) =>
              `text-blue-500 ${
                isActive
                  ? "text-blue-600 underline  text-xl underline-offset-8"
                  : "underline-offset-4 hover:underline"
              }`
            }
          >
            Notification
          </NavLink>
        </div>
        <div className="p-4">
          <button
            onClick={() => {
              setIsOpen(true);
            }}
            className="bg-green-600 text-white font-bold py-2 px-4 rounded-lg  hover:bg-green-700"
          >
            New APQR
          </button>
        </div>
      </div>
      <Dialog open={isOpen}>
  <div className="w-[600px] h-[455px] bg-white shadow-lg overflow-hidden animate-fadeIn">
    <div className="grid grid-cols-2 ">
      <div className="bg-gray-800 text-white p-4 flex flex-col items-center justify-center border-r text-[20px] font-semibold">
        Site/Division
      </div>
      <div className="bg-gray-800 text-white flex flex-col items-center justify-center p-4 text-[20px] font-semibold" >
        Process
      </div>
    </div>
    <div className="grid grid-cols-2">
      <div className="col-span-1 border-r-2 h-[335px] overflow-y-auto">
        {division?.map((site, index) => {
          return (
            <div
              key={index}
              className={`p-3 px-5 cursor-pointer border-b hover:bg-blue-100 transition-all duration-200 ease-in-out text-[20px] ${
                isSite === site.set ? "bg-blue-200" : ""
              }`}
              onClick={() => {
                setIsSite(site.set);
              }}
            >
              {site.site}
            </div>
          );
        })}
      </div>
      <div className="col-span-1">
        {process.map((item, index) => {
          return (
            <div
              key={index}
              className="p-3 text-[20px] hover:bg-blue-100 cursor-pointer transition-all duration-200 ease-in-out"
              onClick={() => navigate(item.route)}
            >
              {isSite === "Corpo" && <span>{item.process}</span>}
              {isSite === "De" && <span>{item.process}</span>}
              {isSite === "IDR" && <span>{item.process}</span>}
            </div>
          );
        })}
      </div>
    </div>
    <div className="border-t border-gray-300"></div>
    <div className="p-3 flex justify-end">
      <button
        className="bg-slate-500 text-white px-4 py-2 rounded hover:bg-slate-600 transition-all duration-200 ease-in-out active:scale-95"
        onClick={() => {
          setIsOpen(false);
          setIsSite("");
        }}
      >
        Cancel
      </button>
    </div>
  </div>
</Dialog>

    </>
  );
}
