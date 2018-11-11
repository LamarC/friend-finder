//Dependencies
const express = require("express");
const path = require("path");

//Express configuration
const app = express();
const PORT = 9000;

//Data Parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());


//Routes 
// require("./routes/apiRoutes")(app);
// require("./routes/html")(app);

app.use("./assets", express.static("assets"));

//Listener 
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });