const express = require("express");
const projectRouter = require("./routers/projectRouter");
const server = express();

server.use(express.json());
server.use(projectRouter);

module.exports = server;
