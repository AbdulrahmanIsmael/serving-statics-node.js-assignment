const express = require("express");
const path = require("path");

const __root = require("../utils/path");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.sendFile(path.join(__root, "views", "index.html"));
});

router.post("/", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
