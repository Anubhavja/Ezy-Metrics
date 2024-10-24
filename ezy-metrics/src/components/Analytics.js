// components/Analytics.js
import './style.css';
import React from 'react';
import { Line } from 'react-chartjs-2';
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

// Register chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Analytics = () => {
  const data = {
    labels: ['January', 'February', 'March'],
    datasets: [{
      label: 'Leads',
      data: [10, 20, 15],
      fill: false,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
    }],
  };

  return (
    <div className="analytics">
      <h2>Analytics</h2>
      <Line data={data} />
    </div>
  );
};

export default Analytics;
