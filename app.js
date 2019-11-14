const express = require("express");
const path = require("path");

//initializing express
const app = express();

//Port to run server on
const PORT = 5000;

//middleware
app.use("/asserts", express.static(path.resolve(__dirname, "public")));

//View folder is where our template engine files will sit
app.set("views", path.resolve(__dirname, "view"));

//Setting Template Engine to Pug
app.set("view engine", "pug");

//route
app.get("/", function(req, res) {
  return res.sendFile(path.resolve(__dirname, "index.html"));
});

app.get("/person/:name", function(req, res) {
  // console.log(req.params);
  // console.log(req.query);
  return res.render("person", { name: req.params.name });
});

//Make the server to go live
app.listen(PORT, function() {
  console.log(`server running on port ${5000}`);
});
