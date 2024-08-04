import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';

const API_URL = process.env.REACT_APP_API_URL || 'https://free-ap-south-1.cosmocloud.io/development/api/employees'; // Use the Cosmocloud API URL or environment variable

const headers = {
  environmentId: '66abbb604f5cc3a16949083c',
  projectId: '66abbb604f5cc3a16949083b',
};

const params = {
  limit: 10,
  offset: 0,
};

const EmployeesList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get(API_URL, {
      headers: headers,
      params: params,
    })
      .then(response => {
        setEmployees(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the employees!', error);
      });
  }, []);

  const handleDelete = (emp_id) => {
    axios.delete(`${API_URL}/${emp_id}`, {
      headers: headers
    })
      .then(response => {
        setEmployees(employees.filter(employee => employee.emp_id !== emp_id));
      })
      .catch(error => {
        console.error('There was an error deleting the employee!', error);
      });
  };

  return (
    <div>
      <h1 className="mb-4">Employees List</h1>
      <Link to="/add-employee" className="btn btn-primary mb-3">Add New Employee</Link>
      {employees.length === 0 ? (
        <p>No Employees in the system.</p>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Employee ID</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map(employee => (
              <tr key={employee.emp_id}>
                <td>{employee.name}</td>
                <td>{employee.emp_id}</td>
                <td>
                  <Link to={`/employee/${employee._id}`} className="btn btn-info mr-2">View Details</Link>
                  <Button variant="danger" onClick={() => handleDelete(employee.emp_id)}>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default EmployeesList;
