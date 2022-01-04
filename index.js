const express = require("express");
const req = require("express/lib/request");
const app = express();
const mongoose = require("mongoose");
const path = require("path")

const MONGOOSE_URL = "mongodb+srv://sa:lX9QuWT6TiEkLfH1@blog.ryq3k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(MONGOOSE_URL).then(() => {
    console.log("Connected");
}).catch(() => {
    console.log("Error on connect");
});

app.use(express.static(__dirname + "/dist/mean-blog"))

app.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname + "/dist/mean-blog/index.html"))
})


app.listen(8080, () => {
    console.log("Listening on port 8080");
})