import { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmailError('');
    setPasswordError('');
    setSuccess('');

    if (!email) {
      setEmailError('Email is required');
    }

    if (!password) {
      setPasswordError('Password is required');
    }

    if (email && password) {
      setSuccess('Successfully logged in');
    }
  };

  return (
    <div className="login-container">
      <h2 className="title">Login Form</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label className="title">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="form-input"
          />
          {emailError && <p className="error-message">{emailError}</p>}
        </div>

        <div className="form-group">
          <label className="title">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="form-input"
          />
          {passwordError && <p className="error-message">{passwordError}</p>}
        </div>
        <button type="submit" className="submit-btn">Login</button>
      </form>
      {success && <p className="success-message">{success}</p>}
    </div>
  );
}

export default App;
