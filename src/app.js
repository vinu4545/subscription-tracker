const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const routes = require("./routes");
const errorHandler = require("./middlewares/error.middleware");

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

// Global Error Handler
app.use(errorHandler);

module.exports = app;