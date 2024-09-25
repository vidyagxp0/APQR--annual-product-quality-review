import React from "react";

const CommonTable = ({ headers, data, setData, fields }) => {
  const handleInputChange = (e, index, field) => {
    const newData = [...data];
    newData[index][field] = e.target.value;
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
        {data.map((item, index) => (
          <tr key={index}>
            {fields.map((field, idx) => (
              <td key={idx}>
                <input
                  value={item[field]}
                  onChange={(e) => handleInputChange(e, index, field)}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CommonTable;
