




// // Component to render a complex table
// const ComplexCommonTable = ({ data, setdata, headers, fields }) => {
//   // Handle input changes and update the data state accordingly
//   const handleInputChange = (e, index, field) => {
//     const newcdata = [...data]; // Create a copy of the current data array to avoid direct mutation
//     newcdata[index] = { ...newcdata[index], [field]: e.target.value }; // Update specific field
//     setdata(newcdata); 
//   };

//   return (
//     <div className="overflow-x-auto">
//       <table className="min-w-full border-collapse border border-gray-300">
//         <thead>
//           <tr>
//             {headers.map((header, index) => (
//               <th
//                 key={index}
//                 className="border centerText border-gray-300 p-2"
//                 rowSpan={header.rowSpan || 1} // Use rowSpan if defined
//                 colSpan={header.colSpan || 1} // Use colSpan if defined
//               >
//                 {header.label}
//               </th>
//             ))}
//           </tr>
//           <tr>
//             {headers.map((header) =>
//               header.children
//                 ? header.children.map((child, childIndex) => (
//                     <th key={childIndex} className="border centerText border-gray-300 p-2">
//                       {child.label} 
//                     </th>
//                   ))
//                 : null
//             )}
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item, index) => (
//             <tr key={index}>
//                 {headers.includes("SI. No.") && <td>{index + 1}.</td>}

//               {fields.map((field, fieldIndex) => (
//                 <td key={fieldIndex} className="border border-gray-300 p-2">
//                   <input
//                     type="text"
//                     value={item[field.name] } // Access field value directly
//                     onChange={(e) => handleInputChange(e, index, field.name)} // Handle changes for main field
//                     className="w-full p-1"
//                   />
                  
//                 </td>
              
//               ))}
//             </tr>
//           ))}
  
  
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ComplexCommonTable;




// Component to render a complex table
const ComplexCommonTable = ({ data, setdata, headers, fields }) => {
  // Handle input changes and update the data state accordingly
  const handleInputChange = (e, index, field) => {
    const newcdata = [...data]; // Create a copy of the current data array to avoid direct mutation
    newcdata[index] = { ...newcdata[index], [field]: e.target.value }; // Update specific field
    setdata(newcdata); 
  };

  // Check if any header has the label "SI. No."
  const showIndex = headers.some(header => header.label === "SI.No.");

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            {showIndex && (
              <th className="border centerText border-gray-300 p-2" rowSpan={2}>
                SI. No.
              </th>
            )}
            {headers.map((header, index) => (
              <th
                key={index}
                className="border centerText border-gray-300 p-2"
                rowSpan={header.rowSpan || 1} // Use rowSpan if defined
                colSpan={header.colSpan || 1} // Use colSpan if defined
              >
                {header.label}
              </th>
            ))}
          </tr>
          <tr>
            {headers.map((header) =>
              header.children
                ? header.children.map((child, childIndex) => (
                    <th key={childIndex} className="border centerText border-gray-300 p-2">
                      {child.label} 
                    </th>
                  ))
                : null
            )}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {showIndex && <td className="border border-gray-300 p-2">{index + 1}.</td>}
              
              {fields.map((field, fieldIndex) => (
                <td key={fieldIndex} className="border border-gray-300 p-2">
                  <input
                    type="text"
                    value={item[field.name]} // Access field value directly
                    onChange={(e) => handleInputChange(e, index, field.name)} // Handle changes for main field
                    className="w-full p-1"
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComplexCommonTable;
