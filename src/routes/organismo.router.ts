import { Router } from "express";
import {
  getOrganismo,
  createOrganismo,
  updateOrganismo,
  deleteOrganismo
} from "../controllers/organismo.controller";

const router = Router();

router.get("/", getOrganismo);
router.post("/create", createOrganismo);
router.put("/update/:id", updateOrganismo);
router.delete("/delete/:id", deleteOrganismo);

export default router;