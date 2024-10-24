
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Assets/Logo6.png';
const Sidebar = () => {
  return (
 
    <div className="sidebar">
       <img src={Logo}  alt="Logo" />
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/leads">Leads</Link></li>
        <li><Link to="/analytics">Analytics</Link></li>
        <li><Link to="/reports">Reports</Link></li>
      </ul>
    </div>
   
  );
};

export default Sidebar;
