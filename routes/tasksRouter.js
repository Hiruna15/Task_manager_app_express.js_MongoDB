import express from "express";
import taskController from "../controllers/tasks.controller.js";
const { getTask, getTasks, updateTask, deleteTask, createTask } =
  taskController;

const Router = express.Router();

Router.get("/", getTasks);

Router.post("/", createTask);

Router.get("/:id", getTask);

Router.put("/:id", updateTask);

Router.delete("/:id", deleteTask);

export default Router;
