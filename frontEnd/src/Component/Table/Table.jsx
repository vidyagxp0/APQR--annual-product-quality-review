import React from 'react';
import ReusableTable from './ReusableTable';

const Table = () => {
  

  return (
    <div style={{ padding: '20px' }}>
      <ReusableTable 
        rowNames={rowNames} 
        headings={headings} 
        data={data} 
        leftHeading={leftHeading} 
      />
    </div>
  );
};

export default Table;
