const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes");

const app = express();
app.use(express.json());
app.use(cors());
app.use(userRoutes);
app.listen(8081, () => {
  console.log("teste2");
}); //porta
