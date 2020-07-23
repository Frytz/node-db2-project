const express = require('express');
const helmet = require('helmet');

const cars = require('../routes/cars-router')

const server = express();

server.use(helmet());
server.use(express.json());

server.get("/", (req, res) => {
    res.status(200).json({ api: "up" });
});

server.use('/api/cars', cars);

module.exports = server;