import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  plugins: {
    title: {
      display: true,
      text: "Hospitalized vs. Non Hospitalized in Eastern Washington Between Different Age Group",
      padding: {
        top: 10,
        bottom: 10
      },
      font: {
        size: "15rem",
        family: 'Roboto',
        weight: 'normal'
      },
      color: "black"
    },
  },
  labels: {
    color: "black"
  },
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    mode: 'index',
    intersect: true,
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
}

function  AgeBarVis() {
  const [data, setData] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('https://rprwae53w2.execute-api.us-west-2.amazonaws.com/v-1/age-group-estimate')
        const json = await res.json()
        setData(json.data);
      } catch (error) {
        setErrorMessage('Error fetching data');
      }
    }
    fetchData();
  }, []);
    var hosCount = [];
    var noHosCount = [];
    var ageGrouop = [];
    for (let i = 0; i < data.length - 1; i++) {
        if (i % 2 == 0) {
            hosCount.push(data[i].Count);
            ageGrouop.push(data[i].AgeGroup);
        } else {
            noHosCount.push(data[i].Count);
        }
    }
    if (errorMessage) {
      return <div>{errorMessage}</div>;
    }

  const age = {
      labels: ageGrouop,
      datasets: [
        {
          label: 'Hospitalized',
          data: hosCount,
          backgroundColor: 'rgb(237, 231, 45)',

          stack: 'Stack 0',
        },
        {
          label: 'Non Hospitalized',
          data: noHosCount,
          backgroundColor: 'rgb(245, 122, 122)',
          stack: 'Stack 1',
        }
      ],
    };

    return(<div class="ageViz">
            <Bar options={options} data={age} />
          </div>
    );
}

export default AgeBarVis;