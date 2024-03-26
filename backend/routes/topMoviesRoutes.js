const express = require('express');
const router = express.Router();
const db = require('../databaseService');

// GET all top movies
router.get('/topmovies', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM topmovies');
    res.json(result.rows);
  } catch (error) {
    console.error('Error getting top movies:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET a single top movie by ID
router.get('/topmovies/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.query('SELECT * FROM topmovies WHERE id = $1', [id]);
    if (result.rowCount === 0) {
      res.status(404).json({ error: 'Top movie not found' });
    } else {
      res.json(result.rows[0]);
    }
  } catch (error) {
    console.error('Error getting top movie by ID:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Add more routes as needed for CRUD operations on top movies

module.exports = router;
