const express = require("express");
const apiMiddleware = require("api-express-exporter");
const app = express();
app.use(apiMiddleware());
const port = 3000;

app.get("/api", (req, res) => {
  res.status(200).send("Api Works.");
});
app.get("/api/fast/", (req, res) => {
  res.status(200).send("Fast response!");
});
app.get("/api/slow", (req, res) => {
  setTimeout(() => {
    res.status(200).send("Slow response...");
  }, 1000);
});

app.get("/api/error", (req, res, next) => {
  try {
    throw new Error("Something broke...");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/api/list/:listId", (req, res, next) => {
  res.status(200).send(`Retrieved list ${req.params.listId}`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
