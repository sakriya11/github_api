const express = require("express");
const cors = require("cors");

const app = express();
const api_route = require("./router/apiRoute");
app.use(cors());
app.use(api_route);

app.listen(90, function () {
  console.log("The server is runnning");
});
