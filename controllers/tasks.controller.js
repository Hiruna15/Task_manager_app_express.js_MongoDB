import TasksModel from "../models/tasks.model.js";
import asyncWrapper from "../middleware/async.js";

const getTasks = asyncWrapper(async (req, res) => {
  const tasks = await TasksModel.find();
  res.status(200).json(tasks);
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await TasksModel.create(req.body);
  res.status(200).json(task);
});

const getTask = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const task = await TasksModel.findById(id);
  if (!task) {
    return res.status(404).json({ msge: `no task with id ${id}` });
  }
  res.status(200).json(task);
});

const deleteTask = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const task = await TasksModel.findByIdAndDelete(id);
  if (!task) {
    return res.status(404).json({ msge: `no task with id ${id}` });
  }

  res.status(200).json({ task });
});

const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await TasksModel.findOneAndUpdate({ _id: taskId }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!task) {
    return res.status(404).json({ msge: `no task with id ${id}` });
  }

  res.status(200).json(task);
});

export default { getTask, createTask, getTasks, updateTask, deleteTask };
