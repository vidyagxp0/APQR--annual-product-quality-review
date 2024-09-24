// import React, { useRef } from "react";
// import { saveAs } from "file-saver";

// const ExcelExportImport = ({ data, fileName, setimportedData, setData, gridNo = 0 }) => {
//   // const [d]
//   const fileInputRef = useRef();

//   const exportToExcel = async () => {
//     try {
//       const xlsx = await import("xlsx");
//       const worksheet = xlsx.utils.json_to_sheet(data);
//       const workbook = {
//         Sheets: { data: worksheet },
//         SheetNames: ["data"],
//       };
//       const excelBuffer = xlsx.write(workbook, { bookType: "xlsx", type: "array" });
//       saveAsExcel(excelBuffer, fileName);
//     } catch (error) {
//       console.error("Error exporting to Excel: ", error);
//     }
//   };

//   const saveAsExcel = (buffer, fileName) => {
//     const blob = new Blob([buffer], { type: "application/octet-stream" });
//     saveAs(blob, fileName);
//   };

//   const handleFileUpload = async (event) => {
//     try {
//       const file = event.target.files[0];
//       const xlsx = await import("xlsx");
//       const data = await file.arrayBuffer();
//       const workbook = xlsx.read(data, { type: "array" });
//       const worksheet = workbook.Sheets[workbook.SheetNames[0]];
//       const jsonData = xlsx.utils.sheet_to_json(worksheet);
//       //   setData(jsonData);
//       // console.log(jsonData);
//       setimportedData(jsonData, gridNo);
//     } catch (error) {
//       console.error("Error importing from Excel: ", error);
//     }
//   };

//   return (
//     <div>
//       <button
//         className="
//           px-2
//           py-1
//           mb-1
//          bg-gradient-to-r from-green-400 via-green-500 to-green-600
//           text-white
//           font-semibold
//           rounded-lg
//           shadow-lg
//           hover:bg-green-700
//           focus:outline-none
//           focus:ring-2
//           focus:ring-offset-2
//           focus:ring-green-500
//           text-xl
//         "
//         onClick={exportToExcel}
//       >
//         Export
//       </button>
//       <input
//         type="file"
//         accept=".xlsx, .xls"
//         ref={fileInputRef}
//         style={{ display: "none" }}
//         onChange={handleFileUpload}
//       />
//       <button
//         className="
//           ml-4
//           px-2
//           py-1
//           mb-1
//          bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700
//           text-white
//           font-semibold
//           rounded-lg
//           shadow-lg
//           hover:bg-blue-700
//           focus:outline-none
//           focus:ring-2
//           focus:ring-offset-2
//           focus:ring-blue-500
//           text-xl
//         "
//         onClick={() => fileInputRef.current.click()}
//       >
//         Import
//       </button>
//     </div>
//   );
// };

// export default ExcelExportImport;

// import React, { useRef } from "react";
// import { saveAs } from "file-saver";

// const ExcelExportImport = ({
//   data,
//   fileName,
//   setimportedData,
//   setData,
//   gridNo = 0,
//   sheetNumber = 0,
// }) => {

//   const fileInputRef = useRef();

//   const exportToExcel = async () => {
//     try {
//       const xlsx = await import("xlsx");
//       const worksheet = xlsx.utils.json_to_sheet(data);
//       const workbook = {
//         Sheets: { data: worksheet },
//         SheetNames: ["data"],
//       };
//       const excelBuffer = xlsx.write(workbook, { bookType: "xlsx", type: "array" });
//       saveAsExcel(excelBuffer, fileName);
//     } catch (error) {
//       console.error("Error exporting to Excel: ", error);
//     }
//   };

//   const saveAsExcel = (buffer, fileName) => {
//     const blob = new Blob([buffer], { type: "application/octet-stream" });
//     saveAs(blob, fileName);
//   };

//   const handleFileUpload = async (event) => {
//     console.log("handleFileUpload");

//     try {
//       const file = event.target.files[0];
//       const xlsx = await import("xlsx");
//       const data = await file.arrayBuffer();
//       const workbook = xlsx.read(data, { type: "array" });

//       // Use the sheet number from props to select the sheet
//       if (sheetNumber >= 0 && sheetNumber < workbook.SheetNames.length) {
//         const selectedSheetName = workbook.SheetNames[sheetNumber];
//         const worksheet = workbook.Sheets[selectedSheetName];
//         const jsonData = xlsx.utils.sheet_to_json(worksheet);
//         console.log("jsonData", jsonData);
//         setimportedData(jsonData, gridNo);
//       } else {
//         console.error("Invalid sheet number");
//       }
//     } catch (error) {
//       console.error("Error importing from Excel: ", error);
//     }
//   };

//   return (
//     <div>
//       <button
//         className="
//           px-2
//           py-1
//           mb-1
//          bg-gradient-to-r from-green-400 via-green-500 to-green-600
//           text-white
//           font-semibold
//           rounded-lg
//           shadow-lg
//           hover:bg-green-700
//           focus:outline-none
//           focus:ring-2
//           focus:ring-offset-2
//           focus:ring-green-500
//           text-xl
//         "
//         onClick={exportToExcel}
//       >
//         Export
//       </button>

//       <input
//         type="file"
//         accept=".xlsx, .xls"
//         ref={fileInputRef}
//         style={{ display: "none" }}
//         onChange={handleFileUpload}
//       />
//       <button
//         className="
//           ml-4
//           px-2
//           py-1
//           mb-1
//          bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700
//           text-white
//           font-semibold
//           rounded-lg
//           shadow-lg
//           hover:bg-blue-700
//           focus:outline-none
//           focus:ring-2
//           focus:ring-offset-2
//           focus:ring-blue-500
//           text-xl
//         "
//         onClick={() => fileInputRef.current.click()}
//       >
//         Import
//       </button>
//     </div>
//   );
// };

// export default ExcelExportImport;

import React, { useRef } from "react";
import { saveAs } from "file-saver";

const ExcelExportImport = ({
  data,
  fileName,
  setimportedData,
  setData,
  gridNo = 0,
  sheetNumber = 0,
  headerRowNumber = 0, // New prop for selecting the header row
}) => {
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

      if (sheetNumber >= 0 && sheetNumber < workbook.SheetNames.length) {
        const selectedSheetName = workbook.SheetNames[sheetNumber];
        const worksheet = workbook.Sheets[selectedSheetName];

        // Read the entire sheet into an array of arrays
        const rows = xlsx.utils.sheet_to_json(worksheet, { header: 1 });

        if (rows.length > headerRowNumber) {
          // Get the header row based on headerRowNumber
          const headers = rows[headerRowNumber];

          // Slice the rows after the header row
          const dataRows = rows.slice(headerRowNumber + 1);

          // Map each row to an object based on the headers
          const jsonData = dataRows.map((row) => {
            let rowData = {};
            headers.forEach((header, index) => {
              rowData[header] = row[index];
            });
            return rowData;
          });

          // console.log("jsonData", jsonData);
          setimportedData(jsonData, gridNo);
        } else {
          console.error("Header row exceeds available rows.");
        }
      } else {
        console.error("Invalid sheet number");
      }
    } catch (error) {
      console.error("Error importing from Excel: ", error);
    }
  };

  return (
    <div>
      <button
        className="
          px-2
          py-1
          mb-1
         bg-gradient-to-r from-green-400 via-green-500 to-green-600
          text-white
          font-semibold
          rounded-lg
          shadow-lg
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
          px-2
          py-1
          mb-1
         bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700
          text-white
          font-semibold
          rounded-lg
          shadow-lg
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
