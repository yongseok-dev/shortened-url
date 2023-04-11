import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import router from "./src/middleware/Router.js";
import { verifyToken } from "./src/middleware/Auth.js";

dotenv.config();
const port = process.env.PORT || "3000";

const app = express();
app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(verifyToken);
app.use(router);

app.listen(port, () => {
  const nodeEnv = process.env.NODE_ENV;
  console.log(
    `NODE_ENV is set to ${nodeEnv}\nExample app listening on port ${port}`
  );
});
