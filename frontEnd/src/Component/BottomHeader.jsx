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
        <div className="w-[500px] h-[455px]">
          <div className="grid grid-cols-2 ">
            <div className="bg-orange-400 text-white p-2 flex flex-col items-center justify-center border-r text-[20px]">
              Site/Division
            </div>
            <div className="bg-orange-400 text-white flex flex-col items-center justify-center p-2 text-[20px]">
              Process
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="col-span-1 border-r-2 h-[335px] overflow-y-auto">
              {division?.map((site, index) => {
                return (
                  <div
                    key={index}
                    className={`p-2 px-4 cursor-pointer border-r hover:bg-blue-200  text-[20px] ${
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
                    className="p-2  text-[20px] hover:bg-blue-200 cursor-pointer"
                    onClick={() => navigate(item.route)}
                  >
                    {isSite === "Corpo" ? (
                      <span className=" ">{item.process}</span>
                    ) : null}
                    {isSite === "De" ? (
                      <span className=" ">{item.process}</span>
                    ) : null}
                    {isSite === "IDR" ? (
                      <span className=" ">{item.process}</span>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="border border-gray-300"></div>
          <div className="p-3 flex justify-end">
            <button
              className="bg-orange-400 text-white px-2 py-2 rounded"
              onClick={() => {
                setIsOpen(false), setIsSite("");
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
