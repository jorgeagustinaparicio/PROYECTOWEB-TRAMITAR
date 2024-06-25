import { Router } from "express";
import {
  getTramite,
  createTramite,
  updateTramite,
  deleteTramite
} from "../controllers/tramite.controller";

const router = Router();

router.get("/", getTramite);
router.post("/create", createTramite);
router.put("/update/:id", updateTramite);
router.delete("/delete/:id", deleteTramite);

export default router;