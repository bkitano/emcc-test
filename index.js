const express = require("express");
const app = express();
const port = 3000;

app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile("./square.html", {
    root: __dirname,
    headers: { "Content-Type": "text/html" },
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
