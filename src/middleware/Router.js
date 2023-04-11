import express from "express";
import UserController from "../controller/User.controller.js";
import URLController from "../controller/Url.controller.js";
import RedirectController from "../controller/Redirect.controller.js";
import ErrorController from "../controller/Error.controller.js";

const router = express.Router();

// URL
router.get("/", URLController.get);
router.post("/url", URLController.post);
router.delete("/url", URLController.delete);
// router.put("/url", URLController.put);

// USER
router.get("/hasUser", UserController.info);
router.get("/login", UserController.login);
router.get("/callback", UserController.callback);
router.delete("/logout", UserController.logout);

// Redirect
router.get("/:urlShort", RedirectController.get);

// Error
router.get("/*", ErrorController.get);

export default router;
