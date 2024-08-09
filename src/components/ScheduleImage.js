import React from 'react';
import './ScheduleImage.css';

const ScheduleImage = () => {
  return (
    <div className="schedule-image-container">
      <img src={`${process.env.PUBLIC_URL}./IMAGES/Timetable.jpg`} alt="" className=" " />
    </div>
  );
};

export default ScheduleImage;
