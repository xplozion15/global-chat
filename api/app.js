import express from "express";
const app = express();
import "dotenv/config";

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.json({
    message: "hi world",
  });
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
