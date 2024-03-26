const db = require('../services/databaseService');

const TopMovie = {
  async getAll() {
    try {
      const query = 'SELECT * FROM topmovies';
      const { rows } = await db.query(query);
      return rows;
    } catch (error) {
      console.error('Error getting top movies:', error);
      throw error;
    }
  },

  async getById(movieId) {
    try {
      const query = 'SELECT * FROM topmovies WHERE id = $1';
      const { rows } = await db.query(query, [movieId]);
      return rows[0];
    } catch (error) {
      console.error('Error getting top movie by ID:', error);
      throw error;
    }
  },

  // Add more functions as needed for interacting with top movies in the database
};

module.exports = TopMovie;
