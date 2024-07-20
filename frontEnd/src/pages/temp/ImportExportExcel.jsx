import React, { useRef } from "react";
import { saveAs } from "file-saver";

const ExcelExportImport = ({ data, fileName, setData }) => {
    // const [d]
  const fileInputRef = useRef();

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

  const handleFileUpload = async (event) => {
    try {
      const file = event.target.files[0];
      const xlsx = await import("xlsx");
      const data = await file.arrayBuffer();
      const workbook = xlsx.read(data, { type: "array" });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = xlsx.utils.sheet_to_json(worksheet);
    //   setData(jsonData);
      console.log(jsonData);
    } catch (error) {
      console.error("Error importing from Excel: ", error);
    }
  };

  return (
    <div>
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
      <input
        type="file"
        accept=".xlsx, .xls"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileUpload}
      />
      <button
        className="
          ml-4
          px-4
          py-2
          bg-blue-500
          text-white
          font-semibold
          rounded-lg
          shadow-md
          hover:bg-blue-700
          focus:outline-none
          focus:ring-2
          focus:ring-offset-2
          focus:ring-blue-500
          text-xl
        "
        onClick={() => fileInputRef.current.click()}
      >
        Import
      </button>
    </div>
  );
};

export default ExcelExportImport;
