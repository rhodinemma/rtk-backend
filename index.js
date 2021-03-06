import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv"
import userRouter from "./routes/user.js";
import tourRouter from "./routes/tour.js";

const app = express();
dotenv.config();

app.use(morgan("dev"));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/users", userRouter); //http://localhost:5000/users/signup
app.use("/tour", tourRouter);  //http://localhost:5000/tour/createTour

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`Server started at ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));
