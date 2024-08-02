const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb://localhost/employeeDB', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());
app.use(cors());

const employeeRoutes = require('./routes/employees');
app.use('/api/employees', employeeRoutes);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
