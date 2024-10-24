
import React from 'react';
import { Line } from 'react-chartjs-2'; // Correct import
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
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
    <div className="dashboard">
      <h2>Performance</h2>
      <Line data={data} />  {/* Use Line component */}
    </div>
  );
};

export default Dashboard;
