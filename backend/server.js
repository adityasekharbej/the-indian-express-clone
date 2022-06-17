const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
let dotenv = require("dotenv").config();
const newsRouter = require("./routes/news.Route");
const homeRouter = require("./routes/home.Route");
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use("/", (req, res) => {
//   res.send("App is running");
// });

app.use("/home", homeRouter);
app.use("/news", newsRouter);
// console.log(process.env.MongoAtlas);
const PORT = process.env.PORT || 8080;

var mongoDB = process.env.MongoAtlas ;
app.listen(PORT, async () => {
  mongoose
    .connect(mongoDB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("connection successful to server");
    })
    .catch((err) => {
      console.log(err, "Failed to connect to server");
    });
  console.log(`Listening on Port ${PORT}`);
});



// "mongodb+srv://DBuser:54fhXTVTQJxpLPxP@unit5cluster.iipoe.mongodb.net/News?retryWrites=true&w=majority"