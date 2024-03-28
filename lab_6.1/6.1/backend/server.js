const express = require('express');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(cors())
app.use(express.json());

const USERS = [

];

app.get('/users', (req, res) => {
  res.status(200).json({ users: USERS });
});

app.post('/users', (req, res) => {
  const user = USERS.push(req.body);
  res.status(201).json(user);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});