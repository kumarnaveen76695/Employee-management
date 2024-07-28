import React, { useState } from 'react';

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === 'password') {
      localStorage.setItem('isLoggedIn', true);
      setIsLoggedIn(true);
    } else {
      alert('Invalid login details');
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <input type="text" placeholder="User Name" value={username} onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
