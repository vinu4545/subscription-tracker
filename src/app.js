const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

const routes = require("./routes");

const app = express();

// Security
app.use(helmet());

// Logging
app.use(morgan("dev"));

// Parse JSON
app.use(express.json());

// Enable CORS
app.use(cors());

// Routes
app.use("/", routes);

module.exports = app;