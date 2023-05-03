import { Doughnut } from 'react-chartjs-2';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';

import CardContent from '@mui/material/CardContent';
ChartJS.register(ArcElement, Tooltip, Legend);

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

export const data = {
  labels: [ ' Direct ',  'Social', 'Referral'],
  datasets: [
    {
      data: [55, 30, 15],
      backgroundColor: [
     
        'red',
        'purple',
        'yellow',
      ],
      borderColor: [
        
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth:1,
    },
  ],
};
export function DoughNutChart() {
  return (
    <Paper className="bar-chart" elevation={3}>
      <div className="heading">
        <h1 className="heading-1" style={{"color":"rimary"}}>Revenue Sources</h1>
    
      <CardContent >
        <Doughnut data={data} />
      </CardContent>
      </div>
    </Paper>

  );
}
