import express from "express";
import TasksRouter from "./routes/tasksRouter.js";
import connectDB from "./db/connect.js";
import "dotenv/config";

const app = express();
const port = 3000;

app.use(express.json());
app.use("/api/v1/tasks", TasksRouter);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("Connected to the DB....");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
