const db = require('../services/databaseService');

const SearchHistory = {
  async create(userId, query) {
    try {
      const query = 'INSERT INTO search_history (user_id, query) VALUES ($1, $2) RETURNING *';
      const values = [userId, query];
      const { rows } = await db.query(query, values);
      return rows[0];
    } catch (error) {
      console.error('Error creating search history:', error);
      throw error;
    }
  },

  async getByUserId(userId) {
    try {
      const query = 'SELECT * FROM search_history WHERE user_id = $1';
      const { rows } = await db.query(query, [userId]);
      return rows;
    } catch (error) {
      console.error('Error getting search history by user ID:', error);
      throw error;
    }
  },

  // Add more functions as needed for interacting with search history in the database
};

module.exports = SearchHistory;
