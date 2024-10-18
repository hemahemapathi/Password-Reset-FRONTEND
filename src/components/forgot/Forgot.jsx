import React, { useState } from 'react';
import axios from 'axios';
import './forgot.css'

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post('https://password-reset-backend-lo48.onrender.com/api/auth/forgot-password', { email });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('');
    }
    setIsLoading(false);
  };

  return (
    <div className="reset-container">
      <div className="reset-card">
        <h2 className="reset-title">Forgot Password</h2>
        <form onSubmit={handleSubmit} className="reset-form">
          <div className="form-group">
            <label htmlFor="email">Email address:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="reset-button" disabled={isLoading}>
            {isLoading ? 'Sending...' : 'Reset Password'}
          </button>
        </form>
        {message && <div className="message">{message}</div>}
      </div>
    </div>
  );
};

export default ForgotPassword;