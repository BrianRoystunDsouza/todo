const express = require("express");
const mongoose = require("mongoose");

const app = express();

// conenction to mongodb
mongoose.connect("mongodb://localhost/todo_express", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");



// routes
app.use(require("./routes/index"))
app.use(require("./routes/todo"))


// server configurations....
const PORT = process.env.PORT || 1000;

app.listen(PORT, console.log(`server run in port ${PORT}`));