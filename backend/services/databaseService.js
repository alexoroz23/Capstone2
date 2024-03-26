const { Pool } = require('pg');

// Create a new pool instance using your PostgreSQL connection string
const pool = new Pool({
  user: 'your_database_user',
  host: 'localhost',
  database: 'your_database_name',
  password: 'your_database_password',
  port: 5432, // Default PostgreSQL port
});

// Function to execute a query against the database
const query = async (text, params) => {
  try {
    const start = Date.now();
    const result = await pool.query(text, params);
    const duration = Date.now() - start;
    console.log('Executed query:', { text, duration, rows: result.rowCount });
    return result;
  } catch (error) {
    console.error('Error executing query:', error);
    throw error;
  }
};

module.exports = {
  query,
};
