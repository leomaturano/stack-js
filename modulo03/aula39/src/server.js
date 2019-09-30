const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const { uriMongo } = require('./config/database');
const appRoutes = require('./routes');

class App {
    constructor() {
        this.express = express();
        this.isDev = process.env.NODE_ENV !== 'production';

        this.database();
        this.middlewares();
        this.routes();
    }

    // eslint-disable-next-line class-methods-use-this
    database() {
        mongoose.connect(uriMongo, {
            useCreateIndex: true,
            useNewUrlParser: true,
        });
    }

    middlewares() {
        this.express.use(express.json());
    }

    routes() {
        this.express.use(appRoutes);
    }
}
module.exports = new App().express;
