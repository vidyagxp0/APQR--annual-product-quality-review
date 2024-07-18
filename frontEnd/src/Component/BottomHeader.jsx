import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function BottomHeader() {
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
            onClick={() => navigate("/new-pqr")}
            className="bg-green-600 text-white font-bold py-2 px-4 rounded-lg  hover:bg-green-700"
          >
            New APQR
          </button>
        </div>
      </div>
    </>
  );
}
