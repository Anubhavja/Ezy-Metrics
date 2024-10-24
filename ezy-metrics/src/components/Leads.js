
import React from 'react';

const leadsData = [
  { id: 1, name: 'John Doe', email: 'john@example.com', status: 'New' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Contacted' },
  { id: 3, name:'Nikhil Dsooza',email:'nik@exam.com',status:'Not-Contacted'   },
];

const Leads = () => {
  return (
    <div className="leads">
      <h2>Lead Management</h2>
      <table className='lead-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {leadsData.map(lead => (
            <tr key={lead.id}>
              <td>{lead.name}</td>
              <td>{lead.email}</td>
              <td>{lead.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leads;
