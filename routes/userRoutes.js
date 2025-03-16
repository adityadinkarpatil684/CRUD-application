import express from "express";
import { getUsers, addUser, updateUser, deleteUser,getUserById } from "../controllers/userController.js";


const router = express.Router();

router.get("/", getUsers);         // Fetch all users
router.post("/", addUser);         // Add a new user
router.put("/:id", updateUser);    // Update user details
router.delete("/:id", deleteUser); // Delete a user
router.get("/:id", getUserById); // Fetch a user by ID


export default router;
