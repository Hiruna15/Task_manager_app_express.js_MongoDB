import express from "express";
const app = express();
const port = 3000;

app.get("/hello", (req, res) => {
  res.status(200).json({ sucess: true });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
