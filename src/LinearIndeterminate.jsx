import Card from '@mui/material/Card';
import LinearProgress from '@mui/material/LinearProgress';
import CardContent from '@mui/material/CardContent';
import Paper from '@mui/material/Paper';



export function LinearIndeterminate() {
  return (

    <Paper className="progress-bar">
      <div className='heading'>
        <h1 className='heading-1'>Projects</h1>
      
    <CardContent>
      <h4>Server Migration --20%</h4>
      <LinearProgress color="error" sx={{ 'height': '20px', 'borderRadius': 15 }} variant="determinate" value={20} />

      <h4>Sales Tracking--40%</h4>
      <LinearProgress color="warning" sx={{ 'height': '20px', 'borderRadius': 15 }} variant="determinate" value={40} />

      <h4>Customer Database--60%</h4>
      <LinearProgress color="primary" sx={{ 'height': '20px', 'borderRadius': 15 }} variant="determinate" value={60} />

      <h4>Payout Details--80%</h4>
      <LinearProgress color="secondary" sx={{ 'height': '20px', 'borderRadius': 15 }} variant="determinate" value={80} />

      <h4> Account Setup--100%</h4>
      <LinearProgress color="success" sx={{ 'height': '20px', 'borderRadius': 15 }} variant="determinate" value={100} />
      </CardContent>
      </div>
    </Paper>
  );
}
