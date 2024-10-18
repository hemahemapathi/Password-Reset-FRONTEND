import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import ForgotPassword from './components/forgot/Forgot';
import ResetPassword from './components/reset/Reset';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:resetIdentifier" element={<ResetPassword />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;