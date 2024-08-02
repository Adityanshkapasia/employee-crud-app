import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Row, Col } from 'react-bootstrap';

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    name: '',
    address: { line1: '', city: '', country: '', zip_code: '' },
    contact_methods: [{ contact_method: 'EMAIL', value: '' }]
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setEmployee({
      ...employee,
      address: { ...employee.address, [name]: value }
    });
  };

  const handleContactMethodChange = (e, index) => {
    const { name, value } = e.target;
    const updatedContactMethods = employee.contact_methods.map((item, i) =>
      i === index ? { ...item, [name]: value } : item
    );
    setEmployee({ ...employee, contact_methods: updatedContactMethods });
  };

  const addContactMethod = () => {
    setEmployee({
      ...employee,
      contact_methods: [...employee.contact_methods, { contact_method: 'EMAIL', value: '' }]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting Employee:', employee);

    try {
      const response = await axios.post('http://localhost:5000/api/employees', employee);
      console.log('Employee added:', response.data);
      setEmployee({
        name: '',
        address: { line1: '', city: '', country: '', zip_code: '' },
        contact_methods: [{ contact_method: 'EMAIL', value: '' }]
      });
    } catch (error) {
      console.error('There was an error adding the employee!', error);
      if (error.response) {
        console.log('Data:', error.response.data);
        console.log('Status:', error.response.status);
        console.log('Headers:', error.response.headers);
      } else if (error.request) {
        console.log('Request:', error.request);
      } else {
        console.log('Error Message:', error.message);
      }
      console.log('Config:', error.config);
    }
  };

  return (
    <div>
      <h1>Add New Employee</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} controlId="formPlaintextName">
          <Form.Label column sm="2">
            Name
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" name="name" value={employee.name} onChange={handleChange} required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintextAddress">
          <Form.Label column sm="2">
            Address Line 1
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" name="line1" value={employee.address.line1} onChange={handleAddressChange} required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintextCity">
          <Form.Label column sm="2">
            City
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" name="city" value={employee.address.city} onChange={handleAddressChange} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintextCountry">
          <Form.Label column sm="2">
            Country
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" name="country" value={employee.address.country} onChange={handleAddressChange} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintextZip">
          <Form.Label column sm="2">
            Zip Code
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" name="zip_code" value={employee.address.zip_code} onChange={handleAddressChange} />
          </Col>
        </Form.Group>
        <h3>Contact Methods:</h3>
        {employee.contact_methods.map((method, index) => (
          <Form.Group as={Row} key={index} controlId={`formPlaintextContact${index}`}>
            <Col sm="5">
              <Form.Control as="select" name="contact_method" value={method.contact_method} onChange={(e) => handleContactMethodChange(e, index)}>
                <option value="EMAIL">Email</option>
                <option value="PHONE">Phone</option>
              </Form.Control>
            </Col>
            <Col sm="7">
              <Form.Control type="text" name="value" value={method.value} onChange={(e) => handleContactMethodChange(e, index)} />
            </Col>
          </Form.Group>
        ))}
        <Button type="button" onClick={addContactMethod}>Add Another Contact Method</Button>
        <Button type="submit" className="ml-2">Add Employee</Button>
      </Form>
    </div>
  );
};

export default AddEmployee;
