const config = require("./config");
// import config from './config';
const apiRouter = require("./api");
// import apiRouter from "./api";
const express = require("express");
// import express from "express";
const server = express();

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
