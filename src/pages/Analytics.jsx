import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Analytics = () => {
  const data = [
    { name: 'A', value: 10 },
    { name: 'B', value: 20 },
    { name: 'C', value: 30 },
    { name: 'D', value: 15 },
  ];

  return (
    <BarChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="#8884d8" />
    </BarChart>
  );
};

export default Analytics;
