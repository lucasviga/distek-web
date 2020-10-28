require('dotenv/config');

const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');

const path = require('path');

const routes = require('./routes');


class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares(){
    this.server.use(cors());
    this.server.use(bodyParser.json());
    this.server.use(express.static(path.join(__dirname, 'build')));
  }

  routes(){
    this.server.use(routes);
  }
}

module.exports = new App().server;


