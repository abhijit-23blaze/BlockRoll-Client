import React, { useEffect, useState } from 'react';
import './SchedulePage.css';

const SchedulePage = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [currentDay, setCurrentDay] = useState('');
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    const date = new Date();
    const options = { year: 'numeric', month: '2-digit', day: '2-digit', weekday: 'long' };
    const formattedDate = date.toLocaleDateString('en-GB', options);
    setCurrentDate(formattedDate);
    setCurrentDay(date.toLocaleDateString('en-GB', { weekday: 'long' }));
  }, []);

  useEffect(() => {
    const schedules = {
        Monday: [
          { name: 'OS', time: '11:00 AM - 12:00 PM' },
          { name: 'ML', time: '12:00 PM - 1:00 PM' },
          { name: 'ADSA', time: '2:15 PM - 3:15 PM' },
          { name: 'RANAC', time: '3:15 AM - 4:15 AM' },
          { name: 'DBMS', time: '4:30 PM - 5:30 PM' },
          
        ],
        Tuesday: [
          { name: 'ADSA', time: '8:45 AM - 9:45 AM' },
          { name: 'DBMS', time: '9:45 AM - 10:45 AM' },
          { name: 'OPP', time: '12:00 PM - 1:00 PM' },
          { name: 'ADSA LAB', time: '2:15 PM - 3:15 PM' },
          { name: 'ADSA LAB', time: '3:15 PM - 4:15 PM' },
          { name: 'ADSA LAB', time: '4:30 PM - 5:30 PM' },
        ],
        Wednesday: [
  
          { name: 'ML', time: '9:45 AM - 10:45 AM' },
          { name: 'ML', time: '11:00 AM - 12:00 PM' },
          { name: 'OOP', time: '2:15 PM - 3:15 PM' },
          { name: 'RANAC', time: '3:15 PM - 4:15 PM' },
          { name: 'OS', time:  '4:30 PM - 5:30 PM' },
        ],
        Thursday: [
            { name: 'OOP LAB', time: '8:45 AM - 9:45 AM' },
          { name: 'OOP LAB', time: '9:45 AM - 10:45 AM' },
          { name: 'OOP LAB', time: '11:00 AM - 12:00 PM' },
          { name: 'RANAC', time: '12:00 PM - 1:00 PM' },
          { name: 'OOP', time: '2:15 PM - 3:15 PM' },
          { name: 'OS', time: '3:15 PM - 4:15 PM' },
          { name: 'ADSA', time: '4:30 PM - 5:30 PM' },
        ],
        Friday: [
          { name: 'RANAC', time: '8:45 AM - 9:45 AM' },
          { name: 'OS', time: '9:45 AM - 10:45 AM' },
          { name: 'DBMS', time: '11:00 AM - 12:00 PM' },
          { name: 'ADSA', time: '2:15 PM - 3:15 PM' },
          { name: 'DBMS LAB', time: '3:15 PM - 4:15 PM' },
            { name: 'DBMS LAB', time: '4:30 PM - 5:30 PM' },
        ],
        Saturday: [
          { name: 'Free', time: 'All Day' },
        ],
        Sunday: [
          { name: 'Free', time: 'All Day' },
        ],
  };

    setSchedule(schedules[currentDay] || []);
  }, [currentDay]);

  return (
    <div className="schedule-page-container">
      <div className="date-container">
        {currentDate}
      </div>
      <h2>Class Schedule for {currentDay}</h2>
      <div className="class-schedule">
        {schedule.map((classItem, index) => (
          <div key={index} className="class-item">
            <h3>{classItem.name}</h3>
            <p>{classItem.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchedulePage;
