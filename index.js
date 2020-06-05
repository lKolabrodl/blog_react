const express = require("express");
const app = express();

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://admin:admin@cluster0-lzvtd.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(5000);
