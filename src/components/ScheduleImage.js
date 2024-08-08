import React from 'react';
import { useParams } from 'react-router-dom';
import './ScheduleImage.css';

const ScheduleImage = () => {
  const { className } = useParams();

  return (
    <div className="schedule-image-container">
      <h2>{className} Schedule</h2>
      <img src="https://via.placeholder.com/800x600" alt="Schedule" />
    </div>
  );
};

export default ScheduleImage;
