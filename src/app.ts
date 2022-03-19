import express from "express";
import bodyParser from "body-parser";
import RootRouter from "./routes/root";
import http from "http";
import cors from "cors";

const app = express();
const server = http.createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/", RootRouter);

const PORT = 3001;

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});

io.on("connection", (socket: any) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
  socket.on("message", (msg: any) => {
    io.emit("broadcast", msg);
  });
});
