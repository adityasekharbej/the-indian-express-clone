const express = require("express");
const mongoose = require("mongoose");
const dbConfig = require("./storage/db");
const cors = require("cors");
const newsRouter = require("./routes/news.Route");
const homeRouter = require("./routes/home.Route");
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", homeRouter);
app.use("/news", newsRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, async () => {
  mongoose
    .connect(
      "mongodb+srv://DBuser:54fhXTVTQJxpLPxP@unit5cluster.iipoe.mongodb.net/News?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log("connection successful to server");
    })
    .catch((err) => {
      console.log(err, "Failed to connect to server");
    });
  console.log("Server started on http://localhost:8080");
});
