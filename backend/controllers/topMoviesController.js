const TopMovie = require('../models/topMovie');

const topMoviesController = {
  async getTopMovies(req, res) {
    try {
      const topMovies = await TopMovie.getAll();
      res.json(topMovies);
    } catch (error) {
      console.error('Error getting top movies:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

module.exports = topMoviesController;
