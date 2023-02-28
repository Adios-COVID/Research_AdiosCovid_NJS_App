import { useState, useEffect } from 'react';

function JsonDataVisualization() {
  const [data, setData] = useState([]);

  // Add state for handling errors
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://rprwae53w2.execute-api.us-west-2.amazonaws.com/v-1/latino-populations');
        const json = await response.json();
        setData(json.data);
      } catch (error) {
        setErrorMessage('Error fetching data');
      }
    }
    fetchData();
  }, []);

  // Conditionally render an error message if an error occurs
  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }

  return (
    <div>
      <h3 class="text-center">Table of Latino Population</h3>
      <table class="table table-striped text-center">
        <thead>
          <tr>
            <th scope="col">County</th>
            <th scope="col">Population Estimate</th>
            <th scope="col">% Latino</th>
            <th scope="col">Estimated Latino Population</th>
          </tr>
        </thead>
        <tbody>
        {data.map(({ County, Pop_Estimate, Pct_Latino, Estimated_Latino_Pop }) => (
          <tr key={County} scope="row">
            <td>{County}</td>
            <td>{Pop_Estimate}</td>
            <td>{Pct_Latino}%</td>
            <td>{Estimated_Latino_Pop}</td>
          </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

/*
      <table>
      <thead>
        <tr>
          <th>County</th>
          <th>Population Estimate</th>
          <th>% Latino</th>
          <th>Estimated Latino Population</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ County, Pop_Estimate, Pct_Latino, Estimated_Latino_Pop }) => (
          <tr key={County}>
            <td>{County}</td>
            <td>{Pop_Estimate}</td>
            <td>{Pct_Latino}</td>
            <td>{Estimated_Latino_Pop}</td>
          </tr>
        ))}
      </tbody>
      </table>
  */
export default JsonDataVisualization;