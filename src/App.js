import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import EmployeeList from './components/EmployeeList';
import CreateEmployee from './components/CreateEmployee';
import EditEmployee from './components/EditEmployee';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(!!loggedIn);
  }, []);

  return (
    <Router>
      <Route exact path="/" render={() => (isLoggedIn ? <Navigate to="/dashboard" /> : <Login setIsLoggedIn={setIsLoggedIn} />)} />
      <Route path="/dashboard" render={() => (isLoggedIn ? <Dashboard /> : <Navigate to="/" />)} />
      <Route path="/employee-list" render={() => (isLoggedIn ? <EmployeeList /> : <Navigate to="/" />)} />
      <Route path="/create-employee" render={() => (isLoggedIn ? <CreateEmployee /> : <Navigate to="/" />)} />
      <Route path="/edit-employee/:id" render={() => (isLoggedIn ? <EditEmployee /> : <Navigate to="/" />)} />
    </Router>
  );
};

export default App;
