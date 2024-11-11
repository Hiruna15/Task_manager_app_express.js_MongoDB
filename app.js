import express from "express";
import TasksRouter from "./routes/tasksRouter.js";
import connectDB from "./db/connect.js";
import "dotenv/config";
import notFound from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/v1/tasks", TasksRouter);

app.use(notFound);
app.use(errorHandlerMiddleware);

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
