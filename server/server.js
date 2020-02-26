const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require('./configuration/keys.js').mongoURI;
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(cors());
app.use('/cities', require('./routes/cities'))//mi ruta http://localhost:5000/cities/test

app.listen(port, () => {
  console.log("Server is running on" + port + "port");
});




const mongoose = require("mongoose");

mongoose.connect(db, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true  })
    .then(() => console.log('Connection to Mongo DB established'))
    .catch(err => console.log(err));