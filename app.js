import express from "express";
import mongoose from "mongoose";
import TasksModel from "./models/tasks.model.js";
const app = express();
const port = 3000;

app.use(express.json());

app.get("/hello", (req, res) => {
  res.status(200).json({ sucess: true });
});

//   /api/vi/tasks
// get all the tasks
// create a new task
// get a single task
// update a task
// delete a task

app.get("/api/v1/tasks", async (req, res) => {
  try {
    const tasks = await TasksModel.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(400).json({ sucess: false, msge: err.message });
  }
});

app.post("/api/v1/tasks", async (req, res) => {
  try {
    const task = await TasksModel.create(req.body);
    res.status(200).json(task);
  } catch (err) {
    res.status(400).json({ sucess: false, msge: err.message });
  }
});

app.get("/api/v1/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const task = await TasksModel.findById(id);
    res.status(200).json(task);
  } catch (err) {
    res.status(400).json({ sucess: false, msge: err.message });
  }
});

app.put("/api/v1/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await TasksModel.findByIdAndUpdate(id, req.body);

    const updatedTask = await TasksModel.findById(id);
    res.status(200).json(updatedTask);
  } catch (err) {
    res.status(400).json({ sucess: false, msge: err.message });
  }
});

app.delete("/api/v1/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await TasksModel.findByIdAndDelete(id);
    res.status(200).json({ sucess: true, msge: "Task Deleted" });
  } catch (err) {
    res.status(400).json({ sucess: false, msge: err.message });
  }
});

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
