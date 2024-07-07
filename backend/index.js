const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

//Import routes for API from auth.js file
const authRoutes = require('./routes/auth');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());


//Add the routes to the App using app.use function
app.use('/api/auth', authRoutes);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});

module.exports = app;
