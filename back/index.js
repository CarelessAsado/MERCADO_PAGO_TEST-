const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
const port = process.env.PORT || 5000;
app.listen(port, () => console.log("server ON"));

const MProutes = require("./routes/MP");
app.use("/api/v1/checkout/pagos", MProutes);
app.get("/", (req, res) => res.send("hola"));
