import axios from 'axios';

const API_URL = 'http://localhost:5000/api/employees';

export const fetchEmployees = async () => {
  return await axios.get(API_URL);
};

export const fetchEmployeeById = async (id) => {
  return await axios.get(`${API_URL}/${id}`);
};

export const createEmployee = async (employee) => {
  return await axios.post(API_URL, employee);
};

export const deleteEmployeeById = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};
