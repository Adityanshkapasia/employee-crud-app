import axios from 'axios';

const API_URL = 'https://free-ap-south-1.cosmocloud.io/development/api/employees'; 

export const fetchEmployees = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/employees`);
    return response.data;
  } catch (error) {
    console.error('Error fetching employees:', error);
    throw error;
  }
};

export const fetchEmployeeById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/api/employees/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching employee with id ${id}:`, error);
    throw error;
  }
};

export const createEmployee = async (employee) => {
  try {
    const response = await axios.post(`${API_URL}/api/employees`, employee);
    return response.data;
  } catch (error) {
    console.error('Error creating employee:', error);
    throw error;
  }
};

export const deleteEmployee = async (id) => {
  try {
    await axios.delete(`${API_URL}/api/employees/${id}`);
  } catch (error) {
    console.error(`Error deleting employee with id ${id}:`, error);
    throw error;
  }
};
