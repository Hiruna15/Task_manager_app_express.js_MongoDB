import TasksModel from "../models/tasks.model.js";

const getTasks = async (req, res) => {
  try {
    const tasks = await TasksModel.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(400).json({ sucess: false, msge: err.message });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await TasksModel.create(req.body);
    res.status(200).json(task);
  } catch (err) {
    res.status(400).json({ sucess: false, msge: err.message });
  }
};

const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await TasksModel.findById(id);
    res.status(200).json(task);
  } catch (err) {
    res.status(400).json({ sucess: false, msge: err.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    await TasksModel.findByIdAndUpdate(id, req.body);

    const updatedTask = await TasksModel.findById(id);
    res.status(200).json(updatedTask);
  } catch (err) {
    res.status(400).json({ sucess: false, msge: err.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    await TasksModel.findByIdAndDelete(id);
    res.status(200).json({ sucess: true, msge: "Task Deleted" });
  } catch (err) {
    res.status(400).json({ sucess: false, msge: err.message });
  }
};

export default { getTask, createTask, getTasks, updateTask, deleteTask };
