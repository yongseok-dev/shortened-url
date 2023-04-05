import dotenv from "dotenv";
import express from "express";
import router from "./src/middleware/Router.js";

dotenv.config();
const port = process.env.PORT || "3000";

const app = express();
app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(router);

app.listen(port, () => {
  const nodeEnv = process.env.NODE_ENV;
  console.log(
    `NODE_ENV is set to ${nodeEnv}\nExample app listening on port ${port}`
  );
});
