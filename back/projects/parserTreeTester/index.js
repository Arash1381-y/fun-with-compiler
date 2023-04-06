// add all routes and middlewares then import index in app.js to identify the project routes.
const express = require('express');
require("dotenv").config();

const program = require('./routes/program');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(program);
console.log("hi");
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

