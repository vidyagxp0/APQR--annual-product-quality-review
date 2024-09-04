import React, { useState } from "react";
import Header from "../Component/Header";
import BottomHeader from "../Component/BottomHeader";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";

export default function Dashboard() {
  const navigate = useNavigate();
  const [loadingStates, setLoadingStates] = useState({});

  const downloadPDF = async (form_id) => {
    setLoadingStates((prev) => ({ ...prev, [form_id]: true }));
    try {
      const response = await fetch("https://apqrapi.mydemosoftware.com/report/generate-pdf");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "APQR_Report.pdf");
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    } catch (error) {
      console.error("Error downloading PDF:", error);
    } finally {
      setLoadingStates((prev) => ({ ...prev, [form_id]: false }));
    }
  };

  const data = useSelector((state) => state.form.forms);

  return (
    <>
      <Header />
      <BottomHeader />
      <div className="container mt-5 w-full mx-12" style={{ width: "100%", maxWidth: "95%" }}>
        <table className="w-full">
          <thead className="bg-slate-500 text-white">
            <tr>
              <th className="px-4 py-2 border-r-2 w-1/12">PQR id</th>
              <th className="px-4 py-2 border-r-2">Product Name</th>
              <th className="px-4 py-2 border-r-2">Generic Name</th>
              <th className="px-4 py-2 border-r-2">Initiated by</th>
              <th className="px-4 py-2 border-r-2">Reports</th>
            </tr>
          </thead>
          <tbody className="w-full">
            {data?.map((item, index) => (
              <tr className="border border-black" key={index}>
                <td
                  className="px-4 py-2 border-r-2 cursor-pointer hover:text-blue-700"
                  onClick={() => {
                    navigate("/apqr-panel", { state: item });
                  }}
                >
                  {item.form_id}
                </td>
                <td className="px-4 py-2 border-r-2">{item.productName}</td>
                <td className="px-4 py-2 border-r-2">{item.genericName}</td>
                <td className="px-4 py-2 border-r-2">{item.initiator}</td>
                <td className="px-4 py-2 border-r-2">
                  <button
                    className="p-[6px] border border-gray-800 rounded flex gap-2 items-center bg-slate-200"
                    onClick={() => downloadPDF(item.form_id)}
                    disabled={loadingStates[item.form_id]}
                  >
                    Generate Report
                    {loadingStates[item.form_id] ? (
                      <div className="h-5 w-5 border-t-2 border-b-2 border-black animate-spin rounded-full"></div>
                    ) : (
                      <BsFillFileEarmarkPdfFill />
                    )}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
