import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Earnings from './Earnings'
import { LineChart } from './LineChart'
import { DoughnutChart } from './DoughNutChart'
import { LinearIndeterminate } from './LinearIndeterminate'
import { Illustrations } from './Illustration'
import { ColorsList } from './ColorBar'
import { Card, CardContent, Paper } from "@mui/material";
function App() {
  
  return (
    <div className="app">
    <div>
      <h1>Dashboard</h1>
    </div>
    <Earnings />
    <div className="line-dough">
        <LineChart />
        <DoughnutChart/>
      </div>
    <div className="linear-illustration">
        <LinearIndeterminate />
        <Illustrations/>
    </div>
    <div className="linear-illustration">
        <ColorsList />
        <DevelopmentApproach/>
      </div>
  </div>
  )
}
  function DevelopmentApproach() {
    return (
      <Paper className="development" elevation={3} style={{marginTop:"40px"}}>
        <div>
          <h1 style={{ paddingLeft: "10px" }}>Development Approach</h1>
          <CardContent >
            SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order
            to reduce CSS bloat and poor page performance. Custom CSS classes are
            used to create custom components and custom utility classes. Before
            working with this theme, you should become familiar with the Bootstrap
            framework, especially the utility classes.
          </CardContent>
        </div>
      </Paper>
    );
}

export default App
