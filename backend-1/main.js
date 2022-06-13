const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello");
});
app.get("/info", (req, res) => {
  res.send("informacion 2 ");
});

app.post("/user", (req, res) => {
  res.send("Hiciste un post request");
});

app.listen(port, () => {
  console.log("Listening on port " + port);
});
