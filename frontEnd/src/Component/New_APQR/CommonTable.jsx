// import React from "react";

// const CommonTable = ({ headers, data, setData, fields }) => {
//   const handleInputChange = (e, index, field) => {
//     const newData = [...data];

//     if (field === "fileAttachment") {
//       newData[index][field] = e.target.files[0]; 
//     } else {
//       newData[index][field] = e.target.value;
//     }

//     setData(newData);
//   };

//   return (
//     <table>
//       <thead>
//         <tr>
//           {headers.map((header, idx) => (
//             <th key={idx}>{header}</th>
//           ))}
//         </tr>
//       </thead>
//       <tbody>
//         {data.length > 0 &&
//           data.map((item, index) => {
//             return (
//               <tr key={index}>
//                 {headers.includes("SI. No.") && <td>{index + 1}.</td>}

//                 {fields.map((field, idx) => (
//                   <td key={idx}>
//                     {field === "fileAttachment" ? (
//                       <input
//                         type="file"
//                         onChange={(e) => handleInputChange(e, index, field)}
//                       />
//                     ) :  (
//                       <input
//                         type="text"
//                         value={item[field]}
//                         onChange={(e) => handleInputChange(e, index, field)}
//                       />
//                     )}
//                   </td>
//                 ))}
//               </tr>
//             );
//           })}
//       </tbody>
//     </table>
//   );
// };

// export default CommonTable;


import React from "react";

const CommonTable = ({ headers, data, setData, fields }) => {
  const handleInputChange = (e, index, field) => {
    const newData = [...data];

    if (field === "fileAttachment") {
      newData[index][field] = e.target.files[0];
    } else {
      newData[index][field] = e.target.value;
    }

    setData(newData);
  };

  const isSpecialField = (field) =>
    ["LSL", "USL", "LCL", "UCL","observedValue",].includes(field);

  return (
    <table>
      <thead>
        <tr>
          {headers.map((header, idx) => (
            <th key={`${header}-${idx}`}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.length > 0 &&
          data.map((item, index) => (
            <tr key={index}>
              {headers.includes("SI. No.") && <td>{index + 1}.</td>}
              {fields.map((field, idx) => (
                <td key={`${field}-${idx}`}>
                  {field === "fileAttachment" ? (
                    <input
                      type="file"
                      onChange={(e) => handleInputChange(e, index, field)}
                    />
                  ) : isSpecialField(field) ? (
                    <input
                      type="number"
                      value={item[field] || ""}
                      onChange={(e) => handleInputChange(e, index, field)}
                    />
                  ) : (
                    <input
                      type="text"
                      value={item[field] || ""}
                      onChange={(e) => handleInputChange(e, index, field)}
                    />
                  )}
                </td>
              ))}
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default CommonTable;

