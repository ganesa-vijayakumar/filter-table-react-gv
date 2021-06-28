import React from 'react';
import './style.css';
import data from './MOCK_DATA.json';
import { useState } from 'react';

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

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleFilter}
      />
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a className="dataItem" href={value.link} target="_blank">
                <p>{value.first_name} {key}</p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}
export default App;
