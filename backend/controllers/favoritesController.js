const Favorite = require('../models/favorite');

const favoritesController = {
  async createFavorite(req, res) {
    const { userId, movieId } = req.body;
    try {
      const favorite = await Favorite.create(userId, movieId);
      res.status(201).json(favorite);
    } catch (error) {
      console.error('Error creating favorite:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  async getUserFavorites(req, res) {
    const { userId } = req.params;
    try {
      const favorites = await Favorite.getByUserId(userId);
      res.json(favorites);
    } catch (error) {
      console.error('Error getting user favorites:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  async deleteFavorite(req, res) {
    const { userId, movieId } = req.params;
    try {
      await Favorite.delete(userId, movieId);
      res.status(204).end();
    } catch (error) {
      console.error('Error deleting favorite:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

module.exports = favoritesController;
