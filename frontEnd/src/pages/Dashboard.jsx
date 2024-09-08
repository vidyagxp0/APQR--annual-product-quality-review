import React, { useState, useEffect } from "react";
import Header from "../Component/Header";
import BottomHeader from "../Component/BottomHeader";
import { useNavigate } from "react-router-dom";
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";
import axios from "axios";

export default function Dashboard() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState({});
  const [tableDataLoading, setTableDataLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setTableDataLoading(true);
      try {
        const response = await axios.get("http://localhost:4000/get-all-apqr");
        setData(response.data);
      } catch (error) {
        console.error("There was a problem with the API call:", error);
      } finally {
        setTableDataLoading(false);
      }
    };

    fetchData();
  }, []);

  const downloadPDF = async (pqrId) => {
    setLoading((prevLoading) => ({ ...prevLoading, [pqrId]: true }));
    try {
      const response = await fetch(`http://localhost:4000/report/generate-report/${pqrId}`);
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
    }
    setLoading((prevLoading) => ({ ...prevLoading, [pqrId]: false }));
  };

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
            {tableDataLoading ? (
              <div className="flex items-center justify-center">
                <div className="relative w-16 h-16">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-16 h-16 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin">
                      <span> Fetching Apqrs.....</span>
                      <br />
                    </div>
                  </div>
                </div>
                <span className="text-[28px] pl-5 text-blue-500 font-semibold"></span>
              </div>
            ) : (
              data?.map((item, index) => (
                <tr className="border border-black" key={index}>
                  <td
                    className="px-4 py-2 border-r-2 cursor-pointer hover:text-blue-700"
                    onClick={() => {
                      navigate("/apqr-panel", { state: item });
                    }}
                  >
                    {item.pqrId}
                  </td>
                  <td className="px-4 py-2 border-r-2">{item.productName}</td>
                  <td className="px-4 py-2 border-r-2">{item.genericName}</td>
                  <td className="px-4 py-2 border-r-2">{item.initiator}</td>
                  <td className="px-4 py-2 border-r-2">
                    <button
                      className="p-[6px] border border-gray-800 rounded flex gap-2 items-center bg-slate-200"
                      onClick={() => downloadPDF(item.pqrId)}
                      disabled={loading[item.pqrId]}
                    >
                      Generate Report
                      {loading[item.pqrId] ? (
                        <div className="h-5 w-5 border-t-2 border-b-2 border-black animate-spin rounded-full"></div>
                      ) : (
                        <BsFillFileEarmarkPdfFill />
                      )}
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
