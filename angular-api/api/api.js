const express = require("express");
const app = express();
const port = 3000;

app.get("/api/weatherforecast", (req, res) => {
  res.send([
    {
      temperatureC: "1",
      temperatureF: "2",
      summary: "3",
    },
    {
      temperatureC: "11",
      temperatureF: "22",
      summary: "33",
    },
  ]);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
