const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile("./index.html", {
    root: __dirname,
    headers: { "Content-Type": "text/html" },
  });
});

app.get("/models", (req, res) => {
  const model = req.query.model;
  res.sendFile(`./models/ggml-model-whisper-${model}.en.bin`, {
    root: __dirname,
    headers: { "Content-Type": "application/octet-stream" },
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
