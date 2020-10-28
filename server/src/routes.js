const {Router} = require('express');
const path = require('path');

const routes = new Router();

// Routes files statics
routes.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

module.exports = routes;
