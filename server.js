const config = require("./config");
// import config from './config';
const apiRouter = require("./api");
// import apiRouter from "./api";
const express = require("express");
// import express from "express";
const server = express();

import sassMiddleware from "node-sass-middleware";
const path = require("path");

server.use(
  sassMiddleware({
    src: path.join(__dirname, "sass"),
    dest: path.join(__dirname, "public"),
  })
);
server.set("view engine", "ejs");

import serverRender from "./serverRender";

server.get("/", (req, res) => {
  serverRender()
    .then((content) => {
      res.render("index", {
        content,
      });
    })
    .catch(console.error);
});

server.use("/api", apiRouter);
server.use(express.static("public"));

server.listen(config.default.port, config.default.host, () => {
  console.info("Express listening on port", config.default.serverUrl);
});
