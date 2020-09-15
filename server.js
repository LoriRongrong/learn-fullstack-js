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

server.get("/", (req, res) => {
  res.render("index", {
    content: "...",
  });
});

server.use("/api", apiRouter);
server.use(express.static("public"));

server.listen(config.default, () => {
  console.info("Express listening on port", config.default);
});
