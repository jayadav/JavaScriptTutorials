// const path = require("path")
const express = require("express");
const app = express();
const port = 5000;
// Define a route
app.get("/", (req, res) => {
  res.send("Hello, World! dsd");
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
