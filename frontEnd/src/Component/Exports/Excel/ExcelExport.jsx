import React from "react";
import { saveAs } from "file-saver";

const ExcelExport = ({ data, fileName }) => {
  const exportToExcel = async () => {
    try {
      const xlsx = await import("xlsx");
      const worksheet = xlsx.utils.json_to_sheet(data);
      const workbook = {
        Sheets: { data: worksheet },
        SheetNames: ["data"],
      };
      const excelBuffer = xlsx.write(workbook, { bookType: "xlsx", type: "array" });
      saveAsExcel(excelBuffer, fileName);
    } catch (error) {
      console.error("Error exporting to Excel: ", error);
    }
  };

  const saveAsExcel = (buffer, fileName) => {
    const blob = new Blob([buffer], { type: "application/octet-stream" });
    saveAs(blob, fileName);
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
        text-xl
      "
      onClick={exportToExcel}
    >
      Export
    </button>
  );
};

export default ExcelExport;
