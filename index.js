const express = require('express');
const dotenv = require('dotenv');
const app = express();


dotenv.config({ path: './config.env' })

require('./db/connection.js')
app.use(express.json());


app.use(require('./routes/route'))
    // const jwt = require('jsonwebtoken');

if (process.env.NODE_ENV == "production") {
    app.use(express.static("frontend/build"));
    const path = require("path");
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Success");
})