import React from "react";
import Header from "../Component/Header";
import BottomHeader from "../Component/BottomHeader";
import { useSelector } from "react-redux";

export default function Dashboard() {
  const data=useSelector((state) => state.form.forms)
  console.log(data)
  return (
    <>
      <Header />
      <BottomHeader />
      <div className="container mt-5 w-full mx-12" style={{ width: "100%", maxWidth: "95%" }}>
        <table className="w-full">
          <thead className="bg-slate-500 text-white">
            <tr>
              <th className="px-4 py-2 border-r-2 w-1/12">PQR id</th>
              <th className="px-4 py-2 border-r-2 ">Product Name</th>
              <th className="px-4 py-2 border-r-2">Short Description</th>
              <th className="px-4 py-2 border-r-2">Initiated by</th>
              <th className="px-4 py-2 border-r-2">Initiated on</th>
              <th className="px-4 py-2 border-r-2">Current Status</th>
            </tr>
          </thead>
          <tbody className="w-full">
            <tr className="bg-slate-100">
              <td className="px-4 py-2 border-r-2">Row 1</td>
              <td className="px-4 py-2 border-r-2">Row 2</td>
              <td className="px-4 py-2 border-r-2">Row 3</td>
              <td className="px-4 py-2 border-r-2">Row 4</td>
              <td className="px-4 py-2 border-r-2">Row 4</td>
              <td className="px-4 py-2 border-r-2">Row 6</td>
            </tr>
            <tr className="bg-white">
              <td className="px-4 py-2 border-r-2">Row 1</td>
              <td className="px-4 py-2 border-r-2">Row 2</td>
              <td className="px-4 py-2 border-r-2">Row 3</td>
              <td className="px-4 py-2 border-r-2">Row 4</td>
              <td className="px-4 py-2 border-r-2">Row 5</td>
              <td className="px-4 py-2 border-r-2">Row 6</td>
            </tr>
            <tr className="bg-slate-100">
              <td className="px-4 py-2 border-r-2">Row 1</td>
              <td className="px-4 py-2 border-r-2">Row 2</td>
              <td className="px-4 py-2 border-r-2">Row 3</td>
              <td className="px-4 py-2 border-r-2">Row 4</td>
              <td className="px-4 py-2 border-r-2">Row 5</td>
              <td className="px-4 py-2 border-r-2">Row 6</td>
            </tr>
            <tr className="bg-white">
              <td className="px-4 py-2 border-r-2">Row 1</td>
              <td className="px-4 py-2 border-r-2">Row 2</td>
              <td className="px-4 py-2 border-r-2">Row 3</td>
              <td className="px-4 py-2 border-r-2">Row 4</td>
              <td className="px-4 py-2 border-r-2">Row 5</td>
              <td className="px-4 py-2 border-r-2">Row 6</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
