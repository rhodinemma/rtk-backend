import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import userRouter from "./routes/user.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/users", userRouter);

const MONGO_URI = "ajfe2krn13901421-i";
const port = 5000;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    app.listen(port, () => console.log(`Server started at ${port}`));
  })
  .catch((error) => console.log(`${error} did not connect`));
