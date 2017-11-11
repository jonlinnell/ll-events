const models = require('../models');

module.exports = (app) => {
  app.get('/', (req, res) => {
    models.Event.findAll()
      .then((events) => {
        res.json(events);
      });
  });
};
