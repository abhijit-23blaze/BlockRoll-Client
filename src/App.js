import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/loginpage';
import QRCodeGenerator from './components/QRCodeGenerator';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <QRCodeGenerator />
    </div>
  );
};

export default App;
