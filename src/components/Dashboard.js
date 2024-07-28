import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    window.location.reload();
  };

  return (
    <div>
      <h2>Welcome Admin Panel</h2>
      <nav>
        <Link to="/employee-list">Employee List</Link>
        <button onClick={handleLogout}>Logout</button>
      </nav>
    </div>
  );
};

export default Dashboard;
