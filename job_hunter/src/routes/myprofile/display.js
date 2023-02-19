import React, { useState, useEffect } from 'react';
import MyProfile from './MyProfile';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/data")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="App">
      <MyProfile />
      <div>
        {data.map((item) => (
          <div key={item._id}>{item.title}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
