//Dependencies
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

//Express configuration
const app = express();
const PORT = process.env.PORT || 3030;

//Data Parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.use(express.static(__dirname + "/app/public"));

//Routes
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

//Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
