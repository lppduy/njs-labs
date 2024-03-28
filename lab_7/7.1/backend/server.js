const express = require('express');
const cors = require('cors');
require('dotenv').config();

const errorController = require('./controllers/errorController');
const adminRoutes = require('./routes/adminRoutes');
const shopRoutes = require('./routes/shopRoutes');

const PORT = process.env.PORT || 5000;
const API_PREFIX = process.env.API_PREFIX || '';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(cors())
app.use(express.json());


app.use(`${API_PREFIX}/admin`, adminRoutes);
app.use(API_PREFIX, shopRoutes);
app.use(errorController.get404);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});