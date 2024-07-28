const employees = [
    {
      id: 1,
      image: 'image1.png',
      name: 'Hukum Gupta',
      email: 'hcgupta@cstech.in',
      mobile: '954010044',
      designation: 'HR',
      gender: 'Male',
      course: ['MCA'],
      createDate: '13-Feb-21',
    },
    
  ];
  
  export const getEmployees = async () => {
    return employees;
  };
  
  export const getEmployeeById = async (id) => {
    return employees.find(emp => emp.id === parseInt(id));
  };
  
  export const createEmployee = async (employee) => {
    employee.id = employees.length + 1;
    employees.push(employee);
  };
  
  export const updateEmployee = async (id, updatedEmployee) => {
    const index = employees.findIndex(emp => emp.id === parseInt(id));
    if (index !== -1) {
      employees[index] = updatedEmployee;
    }
  };
  
  export const deleteEmployee = async (id) => {
    const index = employees.findIndex(emp => emp.id === parseInt(id));
    if (index !== -1) {
      employees.splice(index, 1);
    }
  };
  