import express from "express";
import mongoose from "mongoose";
import TasksRouter from "./routes/tasksRouter.js";
const app = express();
const port = 3000;

app.use(express.json());
app.use("/api/v1/tasks", TasksRouter);

connectToMongoDB().catch((err) => console.log(`Error occured:  ${err}`));

async function connectToMongoDB() {
  const uri =
    "mongodb+srv://hirunadilmith15:G13lZMBoxk67OuR3@backenddb.xspqi.mongodb.net/Task-manager-app?retryWrites=true&w=majority&appName=BackendDB";
  await mongoose.connect(uri);

  console.log("Connected to the Database");
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}
