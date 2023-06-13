import express from "express";
import {
  loginController,
  registerController,
} from "../controllers/authController.js";

//router object
const router = express.Router();

//routing
//Register Route
router.post("/register", registerController);

//Login Route
router.post("/login", loginController);

export default router;
