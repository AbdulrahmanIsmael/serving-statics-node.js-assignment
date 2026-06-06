const express = require("express");
const path = require("path");

const __root = require("../utils/path");

const router = express.Router();

router.get("/users", (req, res, next) => {
  res.sendFile(path.join(__root, "views", "users.html"));
});

module.exports = router;
