const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

app.use(express.json());
app.use(cors());



app.get("/", (req, res) => {
    res.send("Welcome to our website");
});
app.listen(port, () => {
    console.log(`Website is running at port ${port}`)
})