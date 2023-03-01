import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, RadialLinearScale, Tooltip, Legend } from 'chart.js';
import Dropdown from 'react-bootstrap/Dropdown';
import { PolarArea } from 'react-chartjs-2';

ChartJS.register(ArcElement, RadialLinearScale, Tooltip, Legend);
export const options = {
    plugins: {
      title: {
        display: true,
        text: 'Income Rates of Latinos by County',
      },
    },
    responsive: true,
}

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
    var countyData = [];
    for (let i = 0; i < data.length; i++) {
        countyData.push(data[i].County);
    }
    console.log(countyData);
    /*
    const countyData = {"county":[], "Income_less_10000":[], "Income_10000_to_14999":[], "Income_15000_to_19999":[], "Income_20000_to_24999":[], "Income_25000_to_29999":[],
                      "Income_30000_to_34999":[], "Income_35000_to_39999":[], "Income_40000_to_44999":[], "Income_45000_to_49999":[], "Income_50000_to_54999":[],
                  "Income_55000_to_59999": [], "Income_60000_to_74999":[], "Income_75000_to_99999":[], "Income_100000_to_124999":[], "Income_125000_to_149999":[],
              "Income_150000_to_199999":[], "Income_200000_or_more":[]};
    for (let i = 0; i < data.length; i++) {
      countyData["county"].push(data[i].County);
      countyData["Income_less_10000"].push(data[i].Income_less_10000);
      countyData["Income_10000_to_14999"].push(data[i].Income_10000_to_14999);
      countyData["Income_15000_to_19999"].push(data[i].Income_15000_to_19999);
      countyData["Income_20000_to_24999"].push(data[i].Income_20000_to_24999);
      countyData["Income_25000_to_29999"].push(data[i].Income_25000_to_29999);
      countyData["Income_30000_to_34999"].push(data[i].Income_30000_to_34999);
      countyData["Income_35000_to_39999"].push(data[i].Income_35000_to_39999);
      countyData["Income_40000_to_44999"].push(data[i].Income_40000_to_44999);
      countyData["Income_45000_to_49999"].push(data[i].Income_45000_to_49999);
      countyData["Income_50000_to_54999"].push(data[i].Income_50000_to_54999);
      countyData["Income_55000_to_59999"].push(data[i].Income_55000_to_59999);
      countyData["Income_60000_to_74999"].push(data[i].Income_60000_to_74999);
      countyData["Income_75000_to_99999"].push(data[i].Income_75000_to_99999);
      countyData["Income_100000_to_124999"].push(data[i].Income_100000_to_124999);
      countyData["Income_125000_to_149999"].push(data[i].Income_125000_to_149999);
      countyData["Income_150000_to_199999"].push(data[i].Income_150000_to_199999);
      countyData["Income_200000_or_more"].push(data[i].Income_200000_or_more);
    }*/
    // Conditionally render an error message if an error occurs
    if (errorMessage) {
      return <div>{errorMessage}</div>;
    }
    //{county:data[Object.keys("County")[0]], Income_less_10000:data[Object.keys("Income_less_10000")[0]], Income_10000_to_14999:data[Object.keys("Income_10000_to_14999")[0]]}
    const [initialData, setInitialData] = useState({});
  const handleGraph = (event) => {
      data.forEach(each=>{
          if(each.County === event.currentTarget.id){
              setInitialData({County: each.County, Income_less_10000:each.Income_less_10000, Income_10000_to_14999:each.Income_10000_to_14999, 
                Income_15000_to_19999:each.Income_15000_to_19999, Income_20000_to_24999:each.Income_20000_to_24999, Income_25000_to_29999:each.Income_25000_to_29999,
                Income_30000_to_34999:each.Income_30000_to_34999, Income_35000_to_39999:each.Income_35000_to_39999, Income_40000_to_44999:each.Income_40000_to_44999,
                Income_45000_to_49999:each.Income_45000_to_49999, Income_50000_to_54999:each.Income_50000_to_54999, Income_55000_to_59999:each.Income_55000_to_59999,
                Income_60000_to_74999:each.Income_60000_to_74999, Income_75000_to_99999:each.Income_75000_to_99999, Income_100000_to_124999:each.Income_100000_to_124999,
                Income_125000_to_149999:each.Income_125000_to_149999, Income_150000_to_199999:each.Income_150000_to_199999, Income_200000_or_more:each.Income_200000_or_more})
          }
      })
  }
  const income_viz = {
    labels: ["Income less than 10000", "Income between 10000-14999",
    "Income between 15000-19999", "Income between 20000-24999", "Income between 25000-29999", "Income between 30000-34999", "Income between 35000-39999", "Income between 40000-44999", "Income between 45000-49999",
    "Income between 50000-54999", "Income between 55000-59999", "Income between 60000-74999 ", "Income between 75000-99999", "Income between 100000-124999", "Income between 125000-149999", "Income between 150000-199999",
    "Income over 200000", ],
    datasets: [
        {
        label: initialData.County,
        data: [initialData.Income_less_10000, initialData.Income_10000_to_14999, initialData.Income_15000_to_19999, initialData.Income_20000_to_24999, initialData.Income_25000_to_29999, initialData.Income_30000_to_34999, initialData.Income_35000_to_39999,
            initialData.Income_40000_to_44999, initialData.Income_45000_to_49999, initialData.Income_50000_to_54999, initialData.Income_55000_to_59999, initialData.Income_60000_to_74999, initialData.Income_75000_to_99999, initialData.Income_100000_to_124999, initialData.Income_125000_to_149999, initialData.Income_150000_to_199999,
            initialData.Income_200000_or_more],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          "#f2fbea",
          "#f0fae6",
          "#faf3fc",
          "#f2fdfb",
          "#fcdff4",
          "#dbffdb",
          "#fde4d9",
          "#e2f5f6",
          "#f5dbe0",
          "#fef9f5",
          "#fbfce9",
          "#e3fef5",
          "#f9dcff"
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          "#d4f1b9",
          "#cdedac",
          "#eed6f6",
          "#d4faf1",
          "#f695da",
          "#86ff88",
          "#f9a680",
          "#9fdde2",
          "#dd8697",
          "#fbecde",
          "#f2f6b5",
          "#a3fcdd",
          "#ea89ff"
        ],
        //borderWidth: 1,
        }
    ],
  };
  return (
    
    <div class="incomeViz">
        <h1>Income Visualization</h1>
        <p>Start seeing the visualization by selecting the county you would like to observe!</p>
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                County
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item id="Adams" onClick={handleGraph}>Adams</Dropdown.Item>
                <Dropdown.Item id="Asotin" onClick={handleGraph}>Asotin</Dropdown.Item>
                <Dropdown.Item id="Benton" onClick={handleGraph}>Benton</Dropdown.Item>
                <Dropdown.Item id="Chelan" onClick={handleGraph}>Chelan</Dropdown.Item>
                <Dropdown.Item id="Columbia" onClick={handleGraph}>Columbia</Dropdown.Item>
                <Dropdown.Item id="Douglas" onClick={handleGraph}>Douglas</Dropdown.Item>
                <Dropdown.Item id="Ferry" onClick={handleGraph}>Ferry</Dropdown.Item>
                <Dropdown.Item id="Franklin" onClick={handleGraph}>Franklin</Dropdown.Item>
                <Dropdown.Item id="Garfield" onClick={handleGraph}>Garfield</Dropdown.Item>
                <Dropdown.Item id="Grant" onClick={handleGraph}>Grant</Dropdown.Item>
                <Dropdown.Item id="Kittitas" onClick={handleGraph}>Kittitas</Dropdown.Item>
                <Dropdown.Item id="Klickitat" onClick={handleGraph}>Klickitat</Dropdown.Item>
                <Dropdown.Item id="Lincoln" onClick={handleGraph}>Lincoln</Dropdown.Item>
                <Dropdown.Item id="Okanogan" onClick={handleGraph}>Okanogan</Dropdown.Item>
                <Dropdown.Item id="Pend Oreille" onClick={handleGraph}>Pend Oreille</Dropdown.Item>
                <Dropdown.Item id="Spokane" onClick={handleGraph}>Spokane</Dropdown.Item>
                <Dropdown.Item id="Stevens" onClick={handleGraph}>Stevens</Dropdown.Item>
                <Dropdown.Item id="Walla Walla" onClick={handleGraph}>Walla Walla</Dropdown.Item>
                <Dropdown.Item id="Washington" onClick={handleGraph}>Washington</Dropdown.Item>
                <Dropdown.Item id="Whitman" onClick={handleGraph}>Whitman</Dropdown.Item>
                <Dropdown.Item id="Yakima" onClick={handleGraph}>Yakima</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        <PolarArea data={income_viz} options={options}/>
    </div>
  );
}
/* */
export default IncomeVisualization;