import React, { useState } from 'react';
import { createEmployee } from '../services/api';

const CreateEmployee = ({ history }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [designation, setDesignation] = useState('');
  const [gender, setGender] = useState('');
  const [course, setCourse] = useState([]);
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newEmployee = { name, email, mobile, designation, gender, course, image };
    await createEmployee(newEmployee);
    history.push('/employee-list');
  };

  return (
    <div>
      <h2>Create Employee</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <input type="text" placeholder="Mobile No" value={mobile} onChange={e => setMobile(e.target.value)} required />
        <select value={designation} onChange={e => setDesignation(e.target.value)} required>
          <option value="">Select Designation</option>
          <option value="HR">HR</option>
          <option value="Manager">Manager</option>
          <option value="Sales">Sales</option>
        </select>
        <div>
          <label>
            <input type="radio" value="Male" checked={gender === 'Male'} onChange={e => setGender(e.target.value)} />
            Male
          </label>
          <label>
            <input type="radio" value="Female" checked={gender === 'Female'} onChange={e => setGender(e.target.value)} />
            Female
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" value="MCA" checked={course.includes('MCA')} onChange={e => setCourse([...course, 'MCA'])} />
            MCA
          </label>
          <label>
            <input type="checkbox" value="BCA" checked={course.includes('BCA')} onChange={e => setCourse([...course, 'BCA'])} />
            BCA
          </label>
          <label>
            <input type="checkbox" value="BSC" checked={course.includes('BSC')} onChange={e => setCourse([...course, 'BSC'])} />
            BSC
          </label>
        </div>
        <input type="file" onChange={e => setImage(e.target.files[0])} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateEmployee;
