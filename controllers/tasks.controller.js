import TasksModel from "../models/tasks.model.js";

const getTasks = async (req, res) => {
  try {
    const tasks = await TasksModel.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ sucess: false, msge: err });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await TasksModel.create(req.body);
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json({ sucess: false, msge: err });
  }
};

const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await TasksModel.findById(id);
    if (!task) {
      return res.status(404).json({ msge: `no task with id ${id}` });
    }
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json({ sucess: false, msge: err });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await TasksModel.findByIdAndDelete(id);
    if (!task) {
      return res.status(404).json({ msge: `no task with id ${id}` });
    }

    res.status(200).json({ task });
  } catch (err) {
    res.status(500).json({ sucess: false, msge: err });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    await TasksModel.findByIdAndUpdate(id, req.body);

    const updatedTask = await TasksModel.findById(id);
    res.status(200).json(updatedTask);
  } catch (err) {
    res.status(500).json({ sucess: false, msge: err });
  }
};

export default { getTask, createTask, getTasks, updateTask, deleteTask };
