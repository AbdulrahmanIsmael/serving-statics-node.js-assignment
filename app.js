const express = require("express");

const path = require("path");
const bodyParser = require("body-parser");

const mainRoute = require("./routes/mainRoute");
const usersRoute = require("./routes/usersRoute");

const app = express();

// Parsing Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// serving static files middlewares
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use(mainRoute);
app.use(usersRoute);

app.listen(3030);
