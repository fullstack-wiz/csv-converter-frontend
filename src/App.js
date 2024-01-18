import React, { useState } from 'react';
import './App.css';

function App() {
  const [jsonData, setJsonData] = useState(null);

  const handleCSVInputChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const csvData = e.target.result;
        // You can directly set the CSV data to jsonData for now
        setJsonData(csvData);
      };

      reader.readAsText(file);
    } else {
      setJsonData(null);
    }
  };

  return (
    <div className="card">
      <input type="file" accept=".csv" onChange={handleCSVInputChange} />

      {jsonData ? (
        <div className="json-container">
          {/* Display CSV data for now */}
          <pre>{jsonData}</pre>
        </div>
      ) : (
        <p>Please select a CSV file</p>
      )}
    </div>
  );
}

export default App;
