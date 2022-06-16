const News = require("../models/News");
const { Router } = require("express");

const homeRouter = Router();

// get data using tags
homeRouter.get("/", async (req, res) => {
  try {
    const data = await News.find().sort({ heading: 1 }).limit(15);
    res.status(200).send({
      message: "data received successfully",
      data: data,
    });
  } catch (err) {
    res.status(404).send({ message: "Data not found" });
  }
});

module.exports = homeRouter;
