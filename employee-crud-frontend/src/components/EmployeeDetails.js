import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Card, ListGroup } from 'react-bootstrap';

const API_URL = process.env.REACT_APP_API_URL || 'https://free-ap-south-1.cosmocloud.io/development/api/employees'; // Use the Cosmocloud API URL or environment variable

const EmployeeDetails = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    axios.get(`${API_URL}/${id}`)
      .then(response => {
        setEmployee(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the employee details!', error);
      });
  }, [id]);

  if (!employee) return <p>Loading...</p>;

  return (
    <Card>
      <Card.Header>
        <h1>Employee Details</h1>
      </Card.Header>
      <Card.Body>
        <Card.Title>{employee.name}</Card.Title>
        <Card.Text>
          <strong>Employee ID:</strong> {employee.emp_id}
        </Card.Text>
        <Card.Text>
          <strong>Address:</strong> {employee.address.line1}, {employee.address.city}, {employee.address.country}, {employee.address.zip_code}
        </Card.Text>
        <ListGroup variant="flush">
          <ListGroup.Item><strong>Contact Methods:</strong></ListGroup.Item>
          {employee.contact_methods.map((contact, index) => (
            <ListGroup.Item key={index}>{contact.contact_method}: {contact.value}</ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default EmployeeDetails;
