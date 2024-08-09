import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode.react';
import { useParams } from 'react-router-dom';
import './qrcode.css';

const QRCodeGenerator = () => {
  const { className, classTime } = useParams();
  const [randomCode, setRandomCode] = useState('');
  const [scanCount, setScanCount] = useState(0);
  const [countdown, setCountdown] = useState(15);  // Set timer to 15 seconds
  const [isVisible, setIsVisible] = useState(true);
  const [showCode, setShowCode] = useState(false); // Start with the code hidden

  const generateQRCode = () => {
    const newCode = Math.random().toString(36).substring(2, 15);
    setRandomCode(newCode);
  };

  useEffect(() => {
    generateQRCode();
  }, [className, classTime]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    if (countdown <= 0) {
      clearInterval(interval);
      setIsVisible(false);
    }

    return () => clearInterval(interval);
  }, [countdown]);

  const handleScan = () => {
    setScanCount(scanCount + 1);
  };

  const toggleCodeVisibility = () => {
    setShowCode(!showCode);
  };

  return (
    <div className="qr-code-container">
      <div className="info-container">
        <h2 className="class-info">{className}</h2>
        <h3 className="class-info-time">{classTime}</h3>
      </div>
      <div className="qr-code-wrapper">
        {isVisible && (
          <div className="qr-code" onClick={handleScan}>
            <QRCode value={randomCode} size={256} />
            <p className={`code-text ${!showCode && 'hidden'}`}>Code: {randomCode}</p>
            <button className="toggle-button" onClick={toggleCodeVisibility}>
              {showCode ? 'Hide Code' : 'Show Code'}
            </button>
          </div>
        )}
        <div className="countdown-timer">
          {isVisible ? countdown : 'QR code is hidden.If you are not able to scan Please contact the faculty.'}
        </div>
      </div>
      <div className="bottom-container">
        <div className="scan-count-container">
          <p className="scan-count">Attendies Count: {scanCount}</p>
        </div>
      </div>
    </div>
  );
};

export default QRCodeGenerator;
