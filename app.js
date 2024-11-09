import express from "express";
import mongoose from "mongoose";
import Router from "./routes/tasksRouter";
const app = express();
const port = 3000;

app.use(express.json());

app.use("/api/v1/tasks", Router);

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
