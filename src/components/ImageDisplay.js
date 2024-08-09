import React from 'react';
import './ImageDisplay.css';

const ImageDisplay = () => {
  return (
    <div className="image-container">
      <img src={`${process.env.PUBLIC_URL}/your-image.jpg`} alt="Your Image" />
    </div>
  );
};

export default ImageDisplay;
