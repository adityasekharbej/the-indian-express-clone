const News = require("../models/News");
const { Router } = require("express");

const newsRouter = Router();

// const DATA_SOURCE = "Unit5Cluster";
// const DATABASE = "News";
// const COLLECTION = "news";

// get data using tags
newsRouter.get("/:tags", async (req, res) => {
  const { tags } = req.params;
  // console.log("params", tags);
  try {
    const data = await News.find({ tags: tags });
    // console.log(data);
    res.status(200).send({
      message: "data received successfully",
      data: data,
    });
  } catch (err) {
    res.status(404).send({ message: "Data not found" });
  }
});

// Search by author name
// newsRouter.get("/q", (req, res) => {
//   const { author } = req.query;
//   console.log("query", author);
//   News.find({ author: author })
//     .then((res) => {
//       res.status(200).send({ message: "data received successfully" });
//     })
//     .catch((err) => {
//       res.status(404).send({ message: "No author matches your request" });
//     });
// });

// To add new news to the data base
newsRouter.post("/new", async (req, res) => {
  const news = new News(req.body);
  news.save((err, success) => {
    if (err) {
      return res.status(500).send({ message: "Error Occured" });
    }
    return res.status(201).send("success"); // use jwt to work with token
  });
});

module.exports = newsRouter;
