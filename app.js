import express from "express";
import mongoose from "mongoose";
import tasksModel from "./models/tasks.model.js";
const app = express();
const port = 3000;

app.get("/hello", (req, res) => {
  res.status(200).json({ sucess: true });
});

//   /api/vi/tasks
// get all the tasks
// create a new task
// get a single task
// update a task
// delete task

// app.get("/api/v1/tasks", (res, req) => {});

connectToMongoDB().catch((err) => console.log(err));

async function connectToMongoDB() {
  await mongoose.connect(
    "mongodb+srv://hirunadilmith15:G13lZMBoxk67OuR3@backenddb.xspqi.mongodb.net/Task-manager-app?retryWrites=true&w=majority&appName=BackendDB"
  );
  console.log("Connected to the Database");
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}
