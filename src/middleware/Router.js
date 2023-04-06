import express from "express";
import MainController from "../controller/Main.controller.js";
import UserController from "../controller/User.controller.js";
import URLController from "../controller/Url.controller.js";
import RedirectController from "../controller/Redirect.controller.js";
import ErrorController from "../controller/Error.controller.js";

const router = express.Router();

// Main
router.get("/", MainController.get);

// URL
router.get("/url", URLController.get);
router.post("/url", URLController.post);
router.put("/url", URLController.put);
router.delete("/url", URLController.delete);

// USER
router.get("/login", UserController.get);
router.post("/logout", UserController.post);

// Redirect
router.get("/:short", RedirectController.get);

// Error
router.get("/*", ErrorController.get);

export default router;
