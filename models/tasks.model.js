import mongoose from "mongoose";
const { Schema } = mongoose;

const taskSchema = new Schema({
  task: {
    type: String,
    required: [true, "must provide the task name"],
    trim: true,
    maxlength: [20, "name cannot be more than 20 characters"],
  },
  completed: { type: Boolean, default: false },
});

const TasksModel = mongoose.model("Task", taskSchema);

export default TasksModel;
