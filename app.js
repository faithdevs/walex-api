const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT;

// support application/json type post data
app.use(express.json());
//support application/x-www-form-urlencoded post data
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use("/api/v1", require("./routes"));
app.get("*", (req, res) => {
  res.redirect("/api/v1");
});

app.listen(PORT, () => {
  console.log(`Magic happening on http://localhost:${PORT} 🚀`);
});
