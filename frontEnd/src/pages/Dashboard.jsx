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
              <th className="px-4 py-2 border-r-2">Generic Name</th>
              <th className="px-4 py-2 border-r-2">Initiated by</th>

  
            </tr>
          </thead>
          <tbody className="w-full">
          {data?.map((item)=>{
            return   <tr className="border border-black " >
            <td className="px-4 py-2 border-r-2">{item.form_id}</td>
            <td className="px-4 py-2 border-r-2">{item.productName}</td>
            <td className="px-4 py-2 border-r-2">{item.genericName}</td>
            <td className="px-4 py-2 border-r-2">{item.initiator}</td>
         
          </tr>
          })}
           
          </tbody>
        </table>
      </div>
    </>
  );
}
