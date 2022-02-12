import express from "express";
import bodyParser from "body-parser";
import RootRouter from "./routes/root";
import dbService from "./service/db";

const cors = require("cors");

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/", RootRouter);

const init = async () => {
  try {
    await dbService.connect();
    await app.listen(3000 as number, "0.0.0.0");
    console.log(`App started listenint`);
  } catch (err) {
    console.log(err);
    console.log("Error while starting server");
  }
};

init();
