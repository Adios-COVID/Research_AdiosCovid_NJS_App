import { React, useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Dropdown } from "@nextui-org/react";
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function IncomeVisualization() {
    const [data, setData] = useState([]);
    // Add state for handling errors
    const [errorMessage, setErrorMessage] = useState('');
  
    useEffect(() => {
      async function fetchData() {
        try {
          const response = await fetch('https://rprwae53w2.execute-api.us-west-2.amazonaws.com/v-1/latino-income');
          const json = await response.json();
          setData(json.data);
        } catch (error) {
          setErrorMessage('Error fetching data');
        }
      }
      fetchData();
    }, []);
    const countyData = {"county":[], "income_less_10000":[], "income_10000_to_14999":[], "income_15000_to_19999":[], "income_20000_to_24999":[], "income_25000_to_29999":[],
                      "income_30000_to_34999":[], "income_35000_to_39999":[], "income_40000_to_44999":[], "income_45000_to_49999":[], "income_50000_to_54999":[],
                  "income_55000_to_59999": [], "income_60000_to_74999":[], "income_75000_to_99999":[], "income_100000_to_124999":[], "income_125000_to_149999":[],
              "income_150000_to_199999":[], "income_200000_or_more":[]};
  
    for (let i = 0; i < data.length; i++) {
      countyData["county"].push(data[i].County);
      countyData["income_less_10000"].push(data[i].Income_less_10000);
      countyData["income_10000_to_14999"].push(data[i].Income_10000_to_14999);
      countyData["income_15000_to_19999"].push(data[i].Income_15000_to_19999);
      countyData["income_20000_to_24999"].push(data[i].Income_20000_to_24999);
      countyData["income_25000_to_29999"].push(data[i].Income_25000_to_29999);
      countyData["income_30000_to_34999"].push(data[i].Income_30000_to_34999);
      countyData["income_35000_to_39999"].push(data[i].Income_35000_to_39999);
      countyData["income_40000_to_44999"].push(data[i].Income_40000_to_44999);
      countyData["income_45000_to_49999"].push(data[i].Income_45000_to_49999);
      countyData["income_50000_to_54999"].push(data[i].Income_50000_to_54999);
      countyData["income_55000_to_59999"].push(data[i].Income_55000_to_59999);
      countyData["income_60000_to_74999"].push(data[i].Income_60000_to_74999);
      countyData["income_75000_to_99999"].push(data[i].Income_75000_to_99999);
      countyData["income_100000_to_124999"].push(data[i].Income_100000_to_124999);
      countyData["income_125000_to_149999"].push(data[i].Income_125000_to_149999);
      countyData["income_150000_to_199999"].push(data[i].Income_150000_to_199999);
      countyData["income_200000_or_more"].push(data[i].Income_200000_or_more);
    }
    // Conditionally render an error message if an error occurs
    if (errorMessage) {
      return <div>{errorMessage}</div>;
    }

    const [initialData, setInitialData] = useState({county:"Adams", income_less_10000:[166], income_10000_to_14999:[256]});
  const handleGraph = (event) => {
      countyData.forEach(each=>{
          if(each.County === event.currentTarget.id){
              setInitialData({county: each.County, income_less_10000:each.Income_less_10000, income_10000_to_14999:each.Income_10000_to_14999})
          }
      })
  }
  const income_viz = {
    labels: initialData.county.split(','),
    datasets: [
        {
        label: 'Income Less than 10,000',
        data: initialData.income_less_10000,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)'
          /*'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',*/
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)'
          /*'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',*/
        ],
        borderWidth: 1,
        },
        {
            label: 'Income Between 10,000-14,999',
            data: initialData.income_10000_to_14999,
            backgroundColor: [
              'rgba(54, 162, 235, 0.2)'
              /*'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',*/
            ],
            borderColor: [
              'rgba(54, 162, 235, 1)'
              /*'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',*/
            ],
            borderWidth: 1,
        }
    ],
  };
  return (
    
    <div>
        <h3>Income of Latino Population</h3>
        <button className="btn btn m-1 btn-primary" id='Adams' onClick={handleGraph}>Adams</button>
        <button className="btn btn m-1 btn-primary" id='Asotin' onClick={handleGraph}>Asotin</button>
        <button className="btn btn m-1 btn-primary" id='Benton' onClick={handleGraph}>Benton</button>
        

        <Doughnut data={income_viz}/>
    </div>
  );
}
/*<Dropdown>
            <Dropdown.Button flat>County</Dropdown.Button>
            <Dropdown.Menu aria-label="Static Actions">
                <Dropdown.Item key="Adams" onClick={handleBarGraph}>Adams</Dropdown.Item>
                <Dropdown.Item key="Asotin" onClick={handleBarGraph}>Asotin</Dropdown.Item>
                <Dropdown.Item key="Benton" onClick={handleBarGraph}>Benton</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown> */
export default IncomeVisualization;