const express = require("express");
const app = express();

const twilioRouter = require("./routes/twilio");


app.use("/twilio", twilioRouter);

app.get("/", (req, res) => {
  res.end("ok");
})

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("listening on", PORT);
});
