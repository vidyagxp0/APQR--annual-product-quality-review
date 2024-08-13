import React from "react";

const DownloadReportButton = () => {
  const downloadPDF = async () => {
    try {
      const response = await fetch("http://localhost:3000/report/generate-pdf");
      console.log("Response:", response);
      const blob = await response.blob();
      console.log("Blob:", blob);
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
  };

  return <button >Download APQR Report</button>;
};

export default DownloadReportButton;
