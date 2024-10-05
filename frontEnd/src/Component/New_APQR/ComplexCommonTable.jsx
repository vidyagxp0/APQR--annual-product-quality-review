
// const ComplexCommonTable = ({ cdata, setCdata, cheaders, cfields }) => {
//   // Handle input changes and update the cdata state accordingly
//   const handleInputChange = (e, index, field, subField) => {
//     const newcdata = [...cdata]; // Spread the previous data to avoid mutation
//     if (subField) {
//       newcdata[index] = {
//         ...newcdata[index],
//         [field]: { ...newcdata[index][field], [subField]: e.target.value },
//       };
//     } else {
//       newcdata[index] = { ...newcdata[index], [field]: e.target.value }; // Update specific field
//     }
//     setCdata(newcdata); // Set the updated data array in state
//   };

//   return (
//     <div className="overflow-x-auto">
//       <table className="min-w-full border-collapse border border-gray-300">
//         <thead>
//           <tr>
//             {cheaders.map((header, index) => (
//               <th
//                 key={index}
//                 className="border border-gray-300 p-2"
//                 colSpan={header.colspan || 1}
//               >
//                 {header.label}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {cdata.map((item, index) => (
//             <tr key={index}>
//               {cfields.map((field, fieldIndex) => (
//                 <td key={fieldIndex} className="border border-gray-300 p-2">
//                   {field.subFields ? (
//                     field.subFields.map((subField, subIndex) => (
//                       <input
//                         key={subIndex}
//                         type="text"
//                         value={item[field.name][subField] || ""}
//                         onChange={(e) =>
//                           handleInputChange(e, index, field.name, subField)
//                         }
//                         className="w-full p-1"
//                       />
//                     ))
//                   ) : (
//                     <input
//                       type="text"
//                       value={item[field.name] || ""}
//                       onChange={(e) => handleInputChange(e, index, field.name)}
//                       className="w-full p-1"
//                     />
//                   )}
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




// const ComplexCommonTable = ({ cdata, setCdata, cheaders, cfields }) => {
//   // Handle input changes and update the cdata state accordingly
//   const handleInputChange = (e, index, field, subField) => {
//     const newcdata = [...cdata]; // Spread the previous data to avoid mutation
//     if (subField) {
//       newcdata[index] = {
//         ...newcdata[index],
//         [field]: { ...newcdata[index][field], [subField]: e.target.value },
//       };
//     } else {
//       newcdata[index] = { ...newcdata[index], [field]: e.target.value }; // Update specific field
//     }
//     setCdata(newcdata); // Set the updated data array in state
//   };

//   return (
//     <div className="overflow-x-auto">
//       <table className="min-w-full border-collapse border border-gray-300">
//         <thead>
//           <tr>
//             {cheaders.map((header, index) => (
//               <th
//                 key={index}
//                 className="border centerText border-gray-300 p-2"
//                 rowSpan={header.rowSpan || 1}
//                 colSpan={header.colSpan || 1}
//               >
//                 {header.label}
//               </th>
//             ))}
//           </tr>
//           <tr>
//             {cheaders.map((header) =>
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
//           {cdata.map((item, index) => (
//             <tr key={index}>
//               {cfields.map((field, fieldIndex) => (
//                 <td key={fieldIndex} className=" border border-gray-300 p-2">
//                   {field.subFields ? (
//                     field.subFields.map((subField, subIndex) => (
//                       <input
//                         key={subIndex}
//                         type="text"
//                         value={item[field.name]?.[subField] || ""}
//                         onChange={(e) =>
//                           handleInputChange(e, index, field.name, subField)
//                         }
//                         className="w-full p-1"
//                       />
//                     ))
//                   ) : (
//                     <input
//                       type="text"
//                       value={item[field.name] || ""}
//                       onChange={(e) => handleInputChange(e, index, field.name)}
//                       className="w-full p-1"
//                     />
//                   )}
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
const ComplexCommonTable = ({ cdata, setCdata, cheaders, cfields }) => {
  // Handle input changes and update the cdata state accordingly
  const handleInputChange = (e, index, field) => {
    const newcdata = [...cdata]; // Create a copy of the current data array to avoid direct mutation
    newcdata[index] = { ...newcdata[index], [field]: e.target.value }; // Update specific field
    setCdata(newcdata); // Update the state with the new data
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            {cheaders.map((header, index) => (
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
            {cheaders.map((header) =>
              header.children
                ? header.children.map((child, childIndex) => (
                    <th key={childIndex} className="border centerText border-gray-300 p-2">
                      {child.label} // Render child header labels
                    </th>
                  ))
                : null
            )}
          </tr>
        </thead>
        <tbody>
          {cdata.map((item, index) => (
            <tr key={index}>
              {cfields.map((field, fieldIndex) => (
                <td key={fieldIndex} className="border border-gray-300 p-2">
                  <input
                    type="text"
                    value={item[field.name] || ""} // Access field value directly
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
