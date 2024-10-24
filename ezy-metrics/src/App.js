
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Leads from './components/Leads';
import Analytics from './components/Analytics';
import Reports from './components/Reports';

const App = () => {
  return (
    <>
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/leads" element={<Leads />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </Router>
    </>
  );
};

export default App;
