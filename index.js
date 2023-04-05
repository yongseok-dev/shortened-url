import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || "3000";
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  const nodeEnv = process.env.NODE_ENV;
  console.log(
    `NODE_ENV is set to ${nodeEnv}\nExample app listening on port ${port}`
  );
});
