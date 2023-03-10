import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, RadialLinearScale, Tooltip, Legend } from 'chart.js';
import Dropdown from 'react-bootstrap/Dropdown';
//import ChartDataLabels from 'chartjs-plugin-datalabels';
import { PolarArea } from 'react-chartjs-2';

ChartJS.register(ArcElement, RadialLinearScale, Tooltip, Legend);
const incomeOptions = {
    plugins: {
      title: {
        display: true,
        text: 'Income Rates of Latinos by County',
      },
      legend: {
        display: false
      },
    },
    layout: {
      padding: {
        top: 0,
        bottom: 30
      },
    },
    responsive: true,
    maintainAspectRatio: false,
}
/* */
function IncomeVisualization() {
    const [data, setData] = useState([]);
    // Add state for handling errors
    const [errorMessage, setErrorMessage] = useState('');
    const [selectedItem, setSelectedItem] = useState("Adams");
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
    if (errorMessage) {
      return <div>{errorMessage}</div>;
    }
    const listOfCounty = {
      
    }
    const [initialData, setInitialData] = useState({County: "Adams", Income_less_10000: 166, Income_10000_to_14999: 256, Income_15000_to_19999: 228, Income_20000_to_24999: 247, Income_25000_to_29999: 137, Income_30000_to_34999: 70, Income_35000_to_39999: 171, Income_40000_to_44999: 277, Income_45000_to_49999: 68, Income_50000_to_54999: 206, Income_55000_to_59999: 401, Income_60000_to_74999: 455, Income_75000_to_99999: 455, Income_100000_to_124999: 108, Income_125000_to_149999: 83, Income_150000_to_199999: 42, Income_200000_or_more: 43});
  const handleGraph = (event) => {
      setSelectedItem(event);
      data.forEach(each=>{
          if(each.County === event){
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
        <h2>Visualization of Latino Incomes by County</h2>
        <p>Start seeing the visualization by selecting the county you would like to observe!</p>
        <Dropdown onSelect={handleGraph}>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            {selectedItem}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {countyData.map(item => (
              <Dropdown.Item eventKey={item} key={item}>
                {item}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      <PolarArea data={income_viz} options={incomeOptions}/>
    </div>
  );
}
export default IncomeVisualization;