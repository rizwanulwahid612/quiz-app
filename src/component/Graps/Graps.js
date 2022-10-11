import React from 'react';
import graph from '../utlity/Anemation/graph.json'
import Lottie from "lottie-react";
import './Graph.css';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";
const Graps = ({graps}) => {
    const {data}=graps;
    
  
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-48'>
            <div>
            <LineChart
      width={400}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="total" stroke="#82ca9d" />
    </LineChart>
            </div>
        
    <div>
         <Lottie style={{width:'50%',marginLeft:'90px',marginBottom:'90px'}} animationData={graph}></Lottie>
    </div>
        </div>
    );
};

export default Graps;