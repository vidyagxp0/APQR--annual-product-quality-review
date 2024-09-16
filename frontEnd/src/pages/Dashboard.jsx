import React, { useState, useEffect } from "react";
import Header from "../Component/Header";
import BottomHeader from "../Component/BottomHeader";
import { useLocation, useNavigate } from "react-router-dom";
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";
import { IoEyeSharp } from "react-icons/io5";
import axios from "axios";

export default function Dashboard() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState({});
  const [viewLoading, setviewLoading] = useState({});
  const [tableDataLoading, setTableDataLoading] = useState(false);
  const [data, setData] = useState([]);
  const location = useLocation(); // To track navigation and state

  useEffect(() => {
    const fetchData = async () => {
      setTableDataLoading(true);
      try {
        const response = await axios.get("http://localhost:4000/get-all-apqr");
        setData(response.data);
        console.log(response.data[0]);
      } catch (error) {
        console.error("There was a problem with the API call:", error);
      } finally {
        setTableDataLoading(false);
      }
    };

    setTimeout(fetchData, 500);
  }, [location]);

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

  const openChatPdf = async (pqrId) => {
    setviewLoading((prevLoading) => ({ ...prevLoading, [pqrId]: true }));
    try {
      const response = await fetch(`http://localhost:4000/report/chat-pdf/${pqrId}`);
      const { filename } = await response.json();
      // const filename=data.filename

      // navigate("/view-report",  { state: { pqrId, filename } });

      const reportUrl = `/view-report?pqrId=${pqrId}&filename=${filename}`;

      // Open the report in a new tab
      window.open(reportUrl, "_blank", "noopener,noreferrer");
    } catch (error) {
      console.log("Error opening chat pdf PDF:", error);
    }
    setviewLoading((prevLoading) => ({ ...prevLoading, [pqrId]: false }));
  };
  return (
    <>
      <Header />
      <BottomHeader />
      <div
        className="container mt-5 mb-10 w-full mx-12 max-h-[75vh] overflow-y-auto scrollbar-custom"
        style={{ width: "100%", maxWidth: "95%" }}
      >
        <table className="w-full">
          <thead className="bg-slate-500 sticky top-0 text-white">
            <tr>
              <th className="px-4 py-2 border-r-2 w-1/12">PQR id</th>
              <th className="px-4 py-2 border-r-2">Product Name</th>
              <th className="px-4 py-2 border-r-2">Generic Name</th>
              <th className="px-4 py-2 border-r-2">Product Description</th>
              <th className="px-4 py-2 border-r-2">Initiated by</th>
              <th className="px-4 py-2 border-r-2">Review Start Date</th>
              <th className="px-4 py-2 border-r-2">Reports</th>
            </tr>
          </thead>
          <tbody className="w-full">
            {tableDataLoading ? (
              <tr>
                <td colSpan="7">
                  <div className="flex items-center justify-center h-40">
                    <div className="flex items-center justify-center">
                      <div className="relative w-16 h-16">
                        <div className="w-16 h-16 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
                      </div>
                      <span className="text-[28px] pl-5 text-blue-500 font-semibold">
                        Loading...
                      </span>
                    </div>
                  </div>
                </td>
              </tr>
            ) : (
              data?.map((item, index) => (
                <tr className="border border-black" key={index}>
                  <td
                    className="px-4 py-2 border-r-2 cursor-pointer hover:text-blue-700"
                    onClick={() => {
                      navigate("/apqr-panel", { state: item });
                    }}
                  >
                    {`Corporate/APQR/` + item.pqrId}
                  </td>
                  <td className="px-4 py-2 border-r-2">{item.productName}</td>
                  <td className="px-4 py-2 border-r-2">{item.genericName}</td>
                  <td className="px-4 py-2 border-r-2">{item.productDescription}</td>
                  <td className="px-4 py-2 border-r-2">{item.initiator}</td>
                  <td className="px-4 py-2 border-r-2">
                    {new Intl.DateTimeFormat("en-GB", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "2-digit",
                    }).format(new Date(item.reviewStartDate))}
                  </td>
                  <td className="px-4 py-2 border-r-2 flex gap-6">
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
                    <button
                      className="p-[6px] border border-gray-800 rounded flex gap-2 items-center bg-slate-200"
                      onClick={() => openChatPdf(item.pqrId)}
                      disabled={viewLoading[item.pqrId]}
                    >
                      View Report
                      {viewLoading[item.pqrId] ? (
                        <div className="h-5 w-5 border-t-2 border-b-2 border-black animate-spin rounded-full"></div>
                      ) : (
                        <IoEyeSharp />
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
