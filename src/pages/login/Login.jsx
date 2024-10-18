import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [notification, setNotification] = useState({ type: '', message: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://password-reset-backend-lo48.onrender.com/api/auth/login', {
        email: email,
        password: password
      });
      console.log(response.data);
      setNotification({ type: 'success', message: 'Login successful!' });
      // You might want to add navigation or other actions here after successful login
    } catch (error) {
      if (error.message === 'Network Error') {
        console.error('Network error. Please check your connection.');
        setNotification({ type: 'error', message: 'Network error. Please check your connection.' });
      } else {
        console.error('Login error:', error.response ? error.response.data : error.message);
        setNotification({ type: 'error', message: 'Login failed. Please check your credentials.' });
      }
    }
  };
  

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      {notification.message && (
        <div className={`notification ${notification.type}`}>
          {notification.message}
        </div>
      )}
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            autoComplete="email"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            autoComplete="current-password"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <button type="submit" className="login-button">Login</button>
          <button className="signup-button" onClick={() => navigate('/register')}>New User? Register Here</button>
          <button className="forgot-password-button" onClick={() => navigate('/forgot-password')}>Forgot Password?</button>
        </div>
      </form>
      {message && <div className="message">{message}</div>}
    </div>
  );
};

export default Login;