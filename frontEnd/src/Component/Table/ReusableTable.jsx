import React from 'react';
import './ReusableTable.css'; // Optional: Add your own styling here

const ReusableTable = ({ rowNames, headings, data, leftHeading }) => {
  return (
    <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr>
            {/* Left Heading for the Row Names column */}
            <th>{leftHeading}</th>
            {/* Main Headings */}
            {headings.map((heading, index) => (
              <th key={index} >{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {/* Left-side Row Names */}
              <td className='font-bold bg-[#012f5b] text-white'>{rowNames[rowIndex]}</td>
              {/* Row Data */}
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReusableTable;
