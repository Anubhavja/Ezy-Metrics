
import React from 'react';
import { CSVLink } from 'react-csv';


const reportData = [
  ['Name', 'Email', 'Status'],
  ['John Doe', 'john@example.com', 'New'],
  ['Jane Smith', 'jane@example.com', 'Contacted']
];

const Reports = () => {
  return (
    <div className="reports">
      <h2>Generate Reports</h2>
      <CSVLink data={reportData} filename={"report.csv"}>
        Download CSV Report
      </CSVLink>
    </div>
  );
};

export default Reports;
