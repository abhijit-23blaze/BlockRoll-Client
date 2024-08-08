import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './HomePage.css';
import Schedule from './Shedule';

const HomePage = ({ username }) => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState('');

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleSignOut = () => {
    navigate('/');
  };

  const handleSwitchAccount = () => {
    navigate('/');
  };

  useEffect(() => {
    const date = new Date();
    const options = { year: 'numeric', month: '2-digit', day: '2-digit', weekday: 'long' };
    const formattedDate = date.toLocaleDateString('en-GB', options);
    setCurrentDate(formattedDate);
  }, []);

  return (
    <div className="home-container">
      <header className="home-header">
        <div className="username">Welcome, {username}</div>
        <div className="header-right">
          <div className="current-date">{currentDate}</div>
          <Link to="/schedule" className="schedule-button">Schedule</Link>
          <div className="profile-pic" onClick={toggleMenu}>
            <img src={`${process.env.PUBLIC_URL}/profile.jpg`} alt="" />
            {showMenu && (
              <div className="dropdown-menu">
                <button onClick={handleSignOut}>Sign Out</button>
                <button onClick={handleSwitchAccount}>Switch Account</button>
              </div>
            )}
          </div>
        </div>
      </header>
      <div className="schedule-section">
        <h3>Today's Classes</h3>
        <Schedule />
      </div>
    </div>
  );
};

export default HomePage;
