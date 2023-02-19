const form = document.querySelector('form');
const input = document.querySelector('input');
const result = document.querySelector('#result');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get the job title from the form input
  const jobTitle = input.value;

  // Make an API call to the Flask server
  fetch(`/predict/${jobTitle}`)
    .then(response => response.json())
    .then(data => {
      // Update the UI with the prediction result
      result.textContent = data;
    })
    .catch(error => console.error(error));
});

import { useState, useEffect } from "react";

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/api/data")
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);

    return (
        <div>
            {data.map((item) => (
                <div key={item._id}>{item.title}</div>
            ))}
        </div>
    );
}

export default App;

