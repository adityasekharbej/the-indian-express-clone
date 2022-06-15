const express = require("express");
const connection = require("./storage/db");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 8080;
app.listen(PORT, async () => {
  await connection;
  console.log("connection established with db");
  console.log("Server started on http://localhost:8080");
});
