const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.end("And endpoint");
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("listening on", PORT);
});
