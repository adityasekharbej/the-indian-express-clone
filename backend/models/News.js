const { Schema, model } = require("mongoose");

const NewsSchema = new Schema(
  {
    heading: String,
    subHeading: String,
    description: String,
    img: String,
    imgSrc: String,
    author: String,
    tags: String,
    place: String,
    date: String,
  },
  { collection: "news" }
);

const News = model("User", NewsSchema, "news");

module.exports = News;
