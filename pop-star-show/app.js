const express = require('express');
const cors = require('cors');
const router = require('./app/routes/route');


const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", router);

module.exports = app;
