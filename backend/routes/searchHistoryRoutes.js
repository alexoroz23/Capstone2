const express = require('express');
const router = express.Router();
const db = require('../databaseService');

// POST a new search history entry
router.post('/search_history', async (req, res) => {
  const { user_id, query } = req.body;
  try {
    const result = await db.query('INSERT INTO search_history (user_id, query) VALUES ($1, $2) RETURNING *', [user_id, query]);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error creating search history entry:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET search history entries for a specific user
router.get('/search_history/:user_id', async (req, res) => {
  const { user_id } = req.params;
  try {
    const result = await db.query('SELECT * FROM search_history WHERE user_id = $1', [user_id]);
    res.json(result.rows);
  } catch (error) {
    console.error('Error getting search history entries:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Add more routes as needed for CRUD operations on search history

module.exports = router;
