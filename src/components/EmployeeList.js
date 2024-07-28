import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getEmployees, deleteEmployee } from '../services/api';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getEmployees();
      setEmployees(result);
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    await deleteEmployee(id);
    setEmployees(employees.filter(emp => emp.id !== id));
  };

  return (
    <div>
      <h2>Employee List</h2>
      <Link to="/create-employee">Create Employee</Link>
      <table>
        <thead>
          <tr>
            <th>Unique Id</th>
            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile No</th>
            <th>Designation</th>
            <th>Gender</th>
            <th>Course</th>
            <th>Create date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(emp => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td><img src={emp.image} alt={emp.name} /></td>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.mobile}</td>
              <td>{emp.designation}</td>
              <td>{emp.gender}</td>
              <td>{emp.course}</td>
              <td>{emp.createDate}</td>
              <td>
                <Link to={`/edit-employee/${emp.id}`}>Edit</Link>
                <button onClick={() => handleDelete(emp.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
