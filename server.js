import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connetDB from "./config/db.js";

dotenv.config();

//database config
connetDB();

const app = express();

//middlewares
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("<h1>Welcome to ecommerce app</h1>");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(
    `Server is running on ${process.env.DEV_MODE} mode on ${PORT}`.bgCyan.white
  );
});
