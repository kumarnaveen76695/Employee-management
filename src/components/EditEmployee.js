import React, { useState, useEffect } from 'react';
import { getEmployeeById, updateEmployee } from '../services/api';

const EditEmployee = ({ match, history }) => {
  const [employee, setEmployee] = useState({});
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await getEmployeeById(match.params.id);
      setEmployee(result);
    };
    fetchData();
  }, [match.params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateEmployee(employee.id, employee);
    history.push('/employee-list');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  return (
    <div>
      <h2>Edit Employee</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={employee.name} onChange={handleChange} required />
        <input type="email" name="email" value={employee.email} onChange={handleChange} required />
        <input type="text" name="mobile" value={employee.mobile} onChange={handleChange} required />
        <select name="designation" value={employee.designation} onChange={handleChange} required>
          <option value="HR">HR</option>
          <option value="Manager">Manager</option>
          <option value="Sales">Sales</option>
        </select>
        <div>
          <label>
            <input type="radio" name="gender" value="Male" checked={employee.gender === 'Male'} onChange={handleChange} />
            Male
          </label>
          <label>
            <input type="radio" name="gender" value="Female" checked={employee.gender === 'Female'} onChange={handleChange} />
            Female
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" name="course" value="MCA" checked={employee.course.includes('MCA')} onChange={handleChange} />
            MCA
          </label>
          <label>
            <input type="checkbox" name="course" value="BCA" checked={employee.course.includes('BCA')} onChange={handleChange} />
            BCA
          </label>
          <label>
            <input type="checkbox" name="course" value="BSC" checked={employee.course.includes('BSC')} onChange={handleChange} />
            BSC
          </label>
        </div>
        <input type="file" onChange={e => setEmployee({ ...employee, image: e.target.files[0] })} />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditEmployee;
