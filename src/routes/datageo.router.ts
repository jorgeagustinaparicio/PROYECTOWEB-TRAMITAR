import { Router } from "express";
import { 
    //createTodo,
    //deleteTodo,
    //getTodo,
    datageo,
    //updateTodo,

} from "../controllers/datageo.controller";

const router = Router();

router.get("/", datageo);
//router.get("/:id", getTodo);
//router.post("/", createTodo);
//router.put("/:id", updateTodo);
//router.delete("/:id", deleteTodo);
export default router;