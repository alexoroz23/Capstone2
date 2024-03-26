// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { dbConnect } = require('./services/dbService');
const movieRoutes = require('./routes/movieRoutes');
const userRoutes = require('./routes/userRoutes');

// Create Express app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to the PostgreSQL database
dbConnect();

// Define routes
app.use('/api/movies', movieRoutes);
app.use('/api/users', userRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
