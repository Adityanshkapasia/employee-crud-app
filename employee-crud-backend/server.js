// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const employeesRouter = require('./routes/employees');

const app = express();

// CORS configuration
app.use(cors({ origin: 'http://localhost:3000', optionsSuccessStatus: 200 }));

app.use(express.json());

mongoose.connect('mongodb://localhost/employeeDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err.message);
});

app.use('/api/employees', employeesRouter);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
