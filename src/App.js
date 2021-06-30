import React from 'react';
import './style.css';
import data from './MOCK_DATA.json';
import { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';

function App() {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.first_name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData(data);
    } else {
      setFilteredData(newFilter);
    }
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 150 },
    {
      field: 'first_name',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'last_name',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 250,
      editable: true,
    },
    {
      field: 'gender',
      headerName: 'Gender',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 100,
    },
    {
      field: 'ip_address',
      headerName: 'IP Address',
      width: 200,
      editable: true,
    },
  ];

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleFilter}
      />
    <div style={{ height: 700, width: '100%' }}>
      <DataGrid
        rows={filteredData}
        columns={columns}
        pageSize={10}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
{/* 
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
                <p>{value.first_name} | {value.last_name} {key}</p>
            );
          })}
        </div>
      )} */}
    </div>
  );
}
export default App;
