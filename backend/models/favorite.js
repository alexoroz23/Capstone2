const db = require('../services/databaseService');

const Favorite = {
  async create(userId, movieId) {
    try {
      const query = 'INSERT INTO favorites (user_id, movie_id) VALUES ($1, $2) RETURNING *';
      const values = [userId, movieId];
      const { rows } = await db.query(query, values);
      return rows[0];
    } catch (error) {
      console.error('Error creating favorite:', error);
      throw error;
    }
  },

  async getByUserId(userId) {
    try {
      const query = 'SELECT * FROM favorites WHERE user_id = $1';
      const { rows } = await db.query(query, [userId]);
      return rows;
    } catch (error) {
      console.error('Error getting favorites by user ID:', error);
      throw error;
    }
  },

  async delete(userId, movieId) {
    try {
      const query = 'DELETE FROM favorites WHERE user_id = $1 AND movie_id = $2';
      await db.query(query, [userId, movieId]);
    } catch (error) {
      console.error('Error deleting favorite:', error);
      throw error;
    }
  },

  // Add more functions as needed for interacting with favorites in the database
};

module.exports = Favorite;
