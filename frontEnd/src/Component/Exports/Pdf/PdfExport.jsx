import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const PdfExport = ({ contentId, fileName }) => {
  const generatePDF = () => {
    const input = document.getElementById(contentId);
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save(fileName);
    });
  };

  return (
    <button
      className="
        px-4
        py-2
        bg-green-500
        text-white
        font-semibold
        rounded-lg
        shadow-md
        hover:bg-green-700
        focus:outline-none
        focus:ring-2
        focus:ring-offset-2
        focus:ring-green-500
      "
      onClick={generatePDF}
    >
      Download PDF
    </button>
  );
};

export default PdfExport;
