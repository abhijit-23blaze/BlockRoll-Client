import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode.react';
import { useParams } from 'react-router-dom';
import './qrcode.css';

const QRCodeGenerator = () => {
  const { className, classTime } = useParams();
  const [randomCode, setRandomCode] = useState('');
  const [scanCount, setScanCount] = useState(0);
  const [countdown, setCountdown] = useState(30);
  const [isVisible, setIsVisible] = useState(true);

  const generateQRCode = () => {
    const newCode = Math.random().toString(36).substring(2, 15);
    setRandomCode(newCode);
  };

  useEffect(() => {
    generateQRCode();
  }, [className, classTime]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(prevCountdown => prevCountdown - 1);
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

  return (
    <div className="qr-code-container">
      <div className="info-container">
        <h2 className="class-info">{className}</h2>
        <h3 className="class-info-time">{classTime}</h3>
      </div>
      {isVisible && (
        <div className="qr-code" onClick={handleScan}>
          <QRCode value={randomCode} size={256} />
          <p className="code-text">Code: {randomCode}</p>
          <button className="generate-button" onClick={generateQRCode}>
            Regenerate QR Code
          </button>
        </div>
      )}
      <div className="scan-count-container">
        <p className="scan-count">QR Code Scanned: {scanCount} times</p>
      </div>
      <div className="countdown-timer">
        {isVisible ? `Hiding in ${countdown} seconds...` : 'QR code is hidden.'}
      </div>
    </div>
  );
};

export default QRCodeGenerator;
