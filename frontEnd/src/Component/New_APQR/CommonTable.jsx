import React from "react";

const CommonTable = ({ headers, data, setData, fields }) => {
 
  

  const handleInputChange = (e, index, field) => {
    const newData = [...data];
    const value = e.target.value; // Get the value from the input
    const type = e.target.type; // Get the input type
    
    if (field === "fileAttachment") {
      newData[index][field] = e.target.files[0]; // Handle file input
    }
    else if (
      field === "LSL" ||
      field === "USL" ||
      field === "LCL" ||
      field === "UCL" ||
      field === "observedValue"
    ) {
      newData[index][field] = type === "number" ? parseFloat(value) : value; // Handle number input
    }
    else {
      newData[index][field] = value; // Handle text input
    }
  
    setData(newData);
  };
  
  

  return (
    <table>
      <thead>
        <tr>
          {headers.map((header, idx) => (
            <th key={idx}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.length > 0 &&
          data.map((item, index) => {
            return (
              <tr key={index}>
                {headers.includes("SI. No.") && <td>{index + 1}.</td>}

                {fields.map((field, idx) => (
                  <td key={idx}>
                    {field === "fileAttachment" ? (
                      <input
                        type="file"
                        onChange={(e) => handleInputChange(e, index, field)}
                      />
                    ) : 
                    field === "LSL" ||
                      field === "USL" ||
                      field === "LCL" ||
                      field === "UCL" ||
                      field === "observedValue" ? (
                      <input
                        type="number"
                        value={item[field] || ""}
                        onChange={(e) => handleInputChange(e, index, field)}
                      />
                    ):
                    (
                      <input
                        type="text"
                        value={item[field] || ""}
                        onChange={(e) => handleInputChange(e, index, field)}
                      />
                    )
                    }
                  </td>
                ))}
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default CommonTable;



