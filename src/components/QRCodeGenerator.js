import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import './qrcode.css';

const QRCodeGenerator = () => {
  const [randomCode, setRandomCode] = useState('');
  const [showCode, setShowCode] = useState(false);

  function generateRandomCode() {
    return Math.random().toString(36).substring(2, 15);
  }

  const generateQRCode = () => {
    setRandomCode(generateRandomCode());
    setShowCode(true);
  };

  const toggleShowCode = () => {
    setShowCode(!showCode);
  };

  return (
    <div className="qr-code-container">
      <h2>QR Code Generator</h2>
      <button className="generate-button" onClick={generateQRCode}>
        Generate QR Code
      </button>
      {randomCode && (
        <div className="qr-code">
          <QRCode value={randomCode} />
          {showCode && <p className="code-text">Code: {randomCode}</p>}
          <button className="toggle-button" onClick={toggleShowCode}>
            {showCode ? 'Hide Code' : 'Show Code'}
          </button>
        </div>
      )}
    </div>
  );
};

export default QRCodeGenerator;
