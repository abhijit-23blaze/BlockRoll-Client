import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './loginpass.css';

const LoginPage = ({ setUsername }) => {
  const [localUsername, setLocalUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setUsername(localUsername);
    navigate('/home');
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username: </label>
          <input
            type="text"
            value={localUsername}
            onChange={(e) => setLocalUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
