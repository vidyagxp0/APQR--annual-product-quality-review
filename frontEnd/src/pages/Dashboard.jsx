import React from "react";
import Header from "../Component/Header";
import BottomHeader from "../Component/BottomHeader";

export default function Dashboard() {
  return (
    <>
      <Header />
      <BottomHeader />
      <div className="container mt-5 w-full" style={{width: "100vw" }}>
        <table className="w-full">
          <thead className="bg-slate-500 text-white">
            <tr>
              <th className="px-4 py-2 border-r-2 w-1/12">Column 1</th>
              <th className="px-4 py-2 border-r-2">Column 2</th>
              <th className="px-4 py-2 border-r-2">Column 3</th>
              <th className="px-4 py-2 border-r-2">Column 4</th>
              <th className="px-4 py-2 border-r-2">Column 5</th>
              <th className="px-4 py-2 border-r-2 ">Column 6</th>
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
