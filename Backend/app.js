const express = require("express");
const bodyParser = require("body-parser");
const colors = require("colors");
require("dotenv").config();
const cors = require("cors");
const connect = require("./db");
const app = express();

const airQualityPredictionRoute = require("./routes/airQualityPrediction");

//  Connect to Database
connect();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/aqi", airQualityPredictionRoute);

app.get("/", (req, res) => {
    res.send("Air Wingman App");
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`App is Running: ${process.env.PORT}`.cyan.underline);
});
