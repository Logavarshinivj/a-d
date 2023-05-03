import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';


import CardContent from '@mui/material/CardContent';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const options = {
  responsive: true,
  plugins: {
    legend: {
     
      position: 'bottom',
    },
  },
};
 const data = {
  labels: [
    "Jan",
    "feb",
    "Mar",
    "Apr",
    "May",
    "jun",
    "Jul",
    "Aug",
    "sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Dataset 1",
      data: [
        "7000",
        "8000",
        "7500",
        "9000",
        "8500",
        "10000",
        "9500",
        "11000",
        "10500",
        "12000",
        "11500",
        "13000",
      ],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

export function LineChart() {

  return (
    <Paper className="con" elevation={3}>
      <div className="heading">
        <h1 className="heading-1">Earnings Overview</h1>
    
      <CardContent style={{ width: 800, height: 400 }}>
        <Line options={options} data={data} />

      </CardContent>
      </div>
    </Paper>

  );
}
