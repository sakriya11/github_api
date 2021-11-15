const express = require("express");

const app = express();
const api_route = require("./router/apiRoute");

app.use(api_route);

app.listen(3000, function () {
  console.log("The server is runnning");
});
