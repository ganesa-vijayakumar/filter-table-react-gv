import React from 'react';
import './style.css';
import JSONDATA from './MOCK_DATA.json';
import { useState } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={event => {
          setSearchTerm(event.targer.value);
        }}
      />
      {JSONDATA.filter(val => {
        if (searchTerm == '') {
          return val;
        } else if (
          val.first_name.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return 'val';
        }
      }).map((val, key) => {
        return (
          <div key={key}>
            <p>{val.first_name}</p>
          </div>
        );
      })}
    </div>
  );
}
export default App;
