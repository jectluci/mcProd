const express = require("express");
const morgan = require("morgan");
const productsRoutes = require("./routes/routes");

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(productsRoutes);

app.listen(3001);
console.log("server run");
