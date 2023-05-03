import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const Earnings = () => {
    const data = [{
        "heading": "EARNINGS (MONTHLY)",
        "earnings": "$40,000"
    },
      {
        "heading": "EARNINGS (ANNUAL)",
        "earnings": "$215,000"
      },
      {
        "heading": "TASKS",
        "earnings": "50%"
      },
      {
        "heading": "PENDING REQUESTS",
        "earnings": "18"
      }];
  return (
    <div className="data-earn">
      {data.map((data, index) => (<EarningsCard key={index} data={data} />))}
    </div>
  )
}

function EarningsCard({ data }) {
  const styles={
    card1:{
      background:"linear-gradient( rgb(182, 244, 146), rgb(51, 139, 147))",
        boxShadow: "0px 10px 20px 0px #e0c6f5",
       
    },
  }

    return (
     
       
          <Paper  className="earnings" sx={{width:"250px"}}linear-illustration elevation={3}  style={styles.card1} >
            <CardContent>
              <Typography sx={{ fontSize: 12 }} color="primary" gutterBottom>
                {data.heading}
               
              </Typography>
              <Typography sx={{ fontSize: 24 }} color="text.primary" gutterBottom>
                {data.earnings}
              </Typography>
            </CardContent>
          </Paper>
  
  
       
     
    );
  }

export default Earnings