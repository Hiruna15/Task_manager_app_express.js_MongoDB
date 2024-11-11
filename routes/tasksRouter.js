import express from "express";
import taskController from "../controllers/tasks.controller.js";
const { getTask, getTasks, updateTask, deleteTask, createTask } =
  taskController;

const router = express.Router();

router.route("/").get(getTasks).post(createTask);

router.route("/:id").get(getTask).put(updateTask).delete(deleteTask);

export default router;
