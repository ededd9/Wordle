const express = require("express");
const app = express();
app.use(express.static("public"));

app.get("/wordl", (req, res) => {
  res.send(`you are in the ${req.query.name} page`);
  console.log(`successfully connected to ${req.originalUrl}`);
  console.log(req.query.name);
});
app.put("/test", (req, res) => {
  res.send(`got a PUT request at ${req.originalUrl}`);
});

app.listen(3000);
