import React, { useState } from 'react';
import "./Login.css"

    // User Login Component
const Login = ({ onLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleLogin = (e) => {
      e.preventDefault();
      // Call the onLogin function with email and password
      onLogin(email, password);
    };


  
    return (
        <div className='login-dashboard'>
          <h2>Login to Task Manager</h2>
          <form  onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
          </form>
        </div>
      );
}

export default Login