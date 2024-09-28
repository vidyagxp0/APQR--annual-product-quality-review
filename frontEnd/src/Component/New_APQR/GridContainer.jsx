import React from "react";
import { MdNoteAdd } from "react-icons/md";
import ExcelExportImport from "../ImportExportExcel";
import CommonTable from "./CommonTable";

function GridContainer({
  data,
  setData,
  addRowData,
  setimportedData,
  fileName,
  MdNoteAddfun,
  gridNo = 0,
  headers,
  fields
}) {
  const addRow = () => {
    const newData = { ...addRowData }; // Spread the addRowData into a new object
    setData([...data, newData]); // Add the new row to the existing data
  };
  
  return (
    <>
       {/* <div className="AddRows d-flex w-full justify-between items-center text-3xl">
        <div className="flex items-center">
         
          <MdNoteAdd onClick={MdNoteAddfun} />
          <div className="addrowinstruction pl-2">
            Custom functionality by clicking on (+) icon
          </div>
        </div>
      </div>


      <div className="AddRows d-flex w-full justify-between items-center text-3xl">
        <div className="flex items-center">
          <MdNoteAdd onClick={addRow} />
          <div className="addrowinstruction pl-2">
            Add Rows by clicking on (+) icon
          </div>
        </div>
        <div className="flex gap-4 ">
          <ExcelExportImport
            data={data}
            setimportedData={setimportedData}
            fileName={fileName}
            gridNo={gridNo}
          />
        </div>
      
      </div>
        
     
     
      <CommonTable
        headers={headers}
        data={data}
        setData={setData}
        fields={fields}
      /> */}

          
          {/* Conditionally render MdNoteAdd with MdNoteAddfun or addRow based on MdNoteAddfun */}
          {MdNoteAddfun ? (
            <div className="AddRows d-flex w-full justify-between items-center text-3xl">
        <div className="flex items-center">
         
          <MdNoteAdd onClick={MdNoteAddfun} />
          <div className="addrowinstruction pl-2">
            Custom functionality by clicking on (+) icon
          </div>
        </div>
      </div>
          ) : (
            <div className="AddRows d-flex w-full justify-between items-center text-3xl">
            <div className="flex items-center">
              <MdNoteAdd onClick={addRow} />
              <div className="addrowinstruction pl-2">
                Add Rows by clicking on (+) icon
              </div>
            </div>
            <div className="flex gap-4">
              <ExcelExportImport
                data={data}
                setimportedData={setimportedData}
                fileName={fileName}
                gridNo={gridNo}
              />
            </div>
          </div>
          
          )}
       

      <CommonTable headers={headers} data={data} setData={setData} fields={fields} />

    </>
  );
}

export default GridContainer;
