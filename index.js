const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes");
const bodyParser = require("body-parser");

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(userRoutes);
app.listen(8081, () => {
  console.log("running");
}); //porta
