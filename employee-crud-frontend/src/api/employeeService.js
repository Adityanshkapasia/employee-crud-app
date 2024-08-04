import axios from 'axios';

const API_URL = 'https://free-ap-south-1.cosmocloud.io/development/api/employees'; // Cosmocloud API URL

const headers = {
  'Content-Type': 'application/json',
  projectId: '66abbb604f5cc3a16949083b',
  environmentId: '66abbb604f5cc3a16949083c'
};

export const fetchEmployees = async () => {
  try {
    const response = await axios.get(API_URL, { headers });
    return response.data;
  } catch (error) {
    console.error('Error fetching employees:', error);
    throw error;
  }
};

export const fetchEmployeeById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`, { headers });
    return response.data;
  } catch (error) {
    console.error(`Error fetching employee with id ${id}:`, error);
    throw error;
  }
};

export const createEmployee = async (employee) => {
  try {
    const response = await axios.post(API_URL, employee, { headers });
    return response.data;
  } catch (error) {
    console.error('Error creating employee:', error);
    throw error;
  }
};

export const deleteEmployee = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`, { headers });
  } catch (error) {
    console.error(`Error deleting employee with id ${id}:`, error);
    throw error;
  }
};
