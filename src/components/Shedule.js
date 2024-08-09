import React from 'react';
import { Link } from 'react-router-dom';
import './Shedule.css';

const Schedule = () => {
  const getDaySchedule = () => {
    const dayOfWeek = new Date().getDay(); // Get the current day of the week (0 - Sunday, 6 - Saturday)

    const schedules = [
      [{ name: 'No Classes', time: 'Day Off' }],
      [
        { name: 'OS UG-2 SEC-03', time: '09:45 AM - 10:45 AM' },
        { name: 'BTP UG-3 OPT', time: '12:00 PM - 01:00 PM' },
        { name: 'Data Structures UG-2', time: '10:00 AM - 11:00 AM' },
        { name: 'Algorithms UG-2', time: '02:00 PM - 03:00 PM' },
        { name: 'Artificial Intelligence UG-3', time: '10:00 AM - 11:00 AM' },
        { name: 'Machine Learning UG-3', time: '02:00 PM - 03:00 PM' },
      ],
      [
        { name: 'Data Structures UG-2', time: '10:00 AM - 11:00 AM' },
        { name: 'Algorithms UG-2', time: '02:00 PM - 03:00 PM' },
        { name: 'Artificial Intelligence UG-3', time: '10:00 AM - 11:00 AM' },
        { name: 'Machine Learning UG-3', time: '02:00 PM - 03:00 PM' },
      ],
      [
        { name: 'DBMS UG-2 SEC-01', time: '11:00 AM - 12:00 PM' },
        { name: 'Software Engineering UG-3', time: '03:00 PM - 04:00 PM' },
        { name: 'Data Structures UG-2', time: '10:00 AM - 11:00 AM' },
        { name: 'Algorithms UG-2', time: '02:00 PM - 03:00 PM' },
        { name: 'Artificial Intelligence UG-3', time: '10:00 AM - 11:00 AM' },
        { name: 'Machine Learning UG-3', time: '02:00 PM - 03:00 PM' },
      ],
      [
        { name: 'Computer Networks UG-2', time: '09:00 AM - 10:00 AM' },
        { name: 'Operating Systems UG-2', time: '12:00 PM - 01:00 PM' },
        { name: 'Data Structures UG-2', time: '10:00 AM - 11:00 AM' },
        { name: 'Algorithms UG-2', time: '02:00 PM - 03:00 PM' },
        { name: 'Artificial Intelligence UG-3', time: '10:00 AM - 11:00 AM' },
        { name: 'Machine Learning UG-3', time: '02:00 PM - 03:00 PM' },
      ],
      [
        { name: 'Theory of Computation UG-2', time: '08:00 AM - 09:00 AM' },
        { name: 'BTP UG-3 OPT', time: '01:00 PM - 02:00 PM' },
        { name: 'Data Structures UG-2', time: '10:00 AM - 11:00 AM' },
        { name: 'Algorithms UG-2', time: '02:00 PM - 03:00 PM' },
        { name: 'Artificial Intelligence UG-3', time: '10:00 AM - 11:00 AM' },
        { name: 'Machine Learning UG-3', time: '02:00 PM - 03:00 PM' },
      ],
      [
        { name: 'Artificial Intelligence UG-3', time: '10:00 AM - 11:00 AM' },
        { name: 'Machine Learning UG-3', time: '02:00 PM - 03:00 PM' },
        { name: 'Data Structures UG-2', time: '10:00 AM - 11:00 AM' },
        { name: 'Algorithms UG-2', time: '02:00 PM - 03:00 PM' },
      ],
    ];

    return schedules[dayOfWeek];
  };

  const classes = getDaySchedule();

  // Define a list of colors for the buttons
  const colors = ['#3f51b5', '#f44336', '#4caf50', '#ff9800', '#9c27b0', '#2196f3', '#009688'];

  return (
    <div className="schedule-container">
      <div className="class-buttons">
        {classes.map((classItem, index) => (
          <Link
            key={index}
            to={`/qr-generator/${classItem.name}/${classItem.time}`}
            className="class-button"
            style={{ backgroundColor: colors[index % colors.length] }} // Assign colors cyclically
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
