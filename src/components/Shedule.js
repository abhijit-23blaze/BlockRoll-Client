import React from 'react';
import { Link } from 'react-router-dom';
import './Shedule.css';

const Schedule = () => {
  const classes = [
    { name: 'OS UG-2 SEC-03', time: '09:45 AM - 10:45 AM' },
    { name: 'BTP UG-3 OPT', time:   '12:00 AM - 01:00 AM' },
   
  ];

  return (
    <div className="schedule-container">
      <div className="class-buttons">
        {classes.map((classItem, index) => (
          <Link
            key={index}
            to={`/qr-generator/${classItem.name}/${classItem.time}`}
            className="class-button"
            style={{ backgroundColor: index % 2 === 0 ? '#3f51b5' : '#f44336' }}
          >
            <div className="class-button-content">
              <h4>{classItem.name}</h4>
              <p>{classItem.time}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
