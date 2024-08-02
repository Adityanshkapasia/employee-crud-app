# Employee CRUD Application

A simple CRUD application to manage employees, built with React and Node.js.

## Description

This application allows users to:
- View a list of employees
- Add a new employee
- View employee details
- Delete an employee

## Motivation

This project was created as a demonstration of my skills in full-stack development, particularly in building RESTful APIs with Node.js and creating dynamic user interfaces with React.

## Features

- **Employee Listing**: View all employees in a tabular format.
- **Add Employee**: Add a new employee with details including name, address, and contact methods.
- **Employee Details**: View detailed information of a specific employee.
- **Delete Employee**: Remove an employee from the system.

## Screenshots


## Prerequisites

Make sure you have the following installed on your local machine:
- Node.js (https://nodejs.org/)
- npm (https://www.npmjs.com/)
- MongoDB (https://www.mongodb.com/)

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository**
    ```bash
    git clone https://github.com/Adityanshkapasia/employee-crud-app.git
    cd employee-crud-app
    ```

2. **Backend Setup**
    ```bash
    cd backend
    npm install
    ```

3. **Frontend Setup**
    ```bash
    cd ../frontend
    npm install
    ```

## Running the Application

1. **Start MongoDB**
    Make sure MongoDB is running. You can start it using:
    ```bash
    mongod
    ```

2. **Start the Backend Server**
    ```bash
    cd backend
    node server.js
    ```

3. **Start the Frontend Server**
    Open a new terminal and navigate to the frontend directory:
    ```bash
    cd ../frontend
    npm start
    ```

    The application should now be running at `http://localhost:3000`.

## File Structure

