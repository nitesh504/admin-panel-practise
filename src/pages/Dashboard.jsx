import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const Dashboard = () => {
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'age', headerName: 'Age', width: 90 }
  ];

  const rows = [
    { id: 1, name: 'Nitesh Dulal', age: 25 },
    { id: 2, name: 'Jane Smith', age: 32 },
    { id:3, name:'Nitesh Dulal' ,age:21}
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
};

export default Dashboard;
