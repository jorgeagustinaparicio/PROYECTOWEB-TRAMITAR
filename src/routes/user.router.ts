import { Router } from "express";
import {
  createUser,
  deleteUser,
  getUsers,
  updateUser
} from "../controllers/user.controller";

const router = Router();
router.get("/users", getUsers);
router.get("/users",getUsers);
router.post("/users", createUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);
export default router;