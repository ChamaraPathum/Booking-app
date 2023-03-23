import express from "express";
require("dotenv").config();
import cors from "cors";
import mongoose from "mongoose";
import authRoute from "./routes/Auth.js";
import usershRoute from "./routes/Users.js";
import hotelsRoute from "./routes/Hotels.js";
import roomsRoute from "./routes/Rooms.js";
import bodyParser from "body-parser";
import cookieparser from "cookie-parser";


const app = express();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("connect to the Mongodb");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MongodDB disconnected");
});
mongoose.connection.on("connected", () => {
  console.log("MongodDB connected");
});

//middelewares
app.use(cookieparser());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usershRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(8800, () => {
  connect();
  console.log("connected to the backend.");
});

app.use(cors);
app.use(bodyParser.json());
