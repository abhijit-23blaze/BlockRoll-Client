import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/loginpage';
import HomePage from './components/HomePage';
import QRCodeGenerator from './components/QRCodeGenerator';
import ScheduleImage from './components/ScheduleImage';
import SchedulePage from './components/SchedulePage';  // Import SchedulePage
import './App.css';

const App = () => {
  const [username, setUsername] = useState('');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage setUsername={setUsername} />} />
        <Route path="/home" element={<HomePage username={username} />} />
        <Route path="/qr-generator/:className/:classTime" element={<QRCodeGenerator />} />
        <Route path="/schedule/:className" element={<ScheduleImage />} />
        <Route path="/schedule" element={<SchedulePage />} />  {/* Add this route */}
      </Routes>
    </Router>
  );
};

export default App;
