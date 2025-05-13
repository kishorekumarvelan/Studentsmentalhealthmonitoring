const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./config/db');
const studentRoutes = require('./routes/students');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/students', studentRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
