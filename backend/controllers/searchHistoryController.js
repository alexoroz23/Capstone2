const SearchHistory = require('../models/searchHistory');

const searchHistoryController = {
  async getAllSearches(req, res) {
    try {
      const searches = await SearchHistory.getAll();
      res.json(searches);
    } catch (error) {
      console.error('Error getting search history:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

module.exports = searchHistoryController;
