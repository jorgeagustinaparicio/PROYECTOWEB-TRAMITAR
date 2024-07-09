import { Router } from "express";
import {
  createOrganismo,
  updateOrganismo,
  deleteOrganismo,
  getOrganismos
} from "../controllers/organismo.controller";

const router = Router();

router.get("/", getOrganismos);
router.post("/create", createOrganismo);
router.put("/update/:id", updateOrganismo);
router.delete("/delete/:id", deleteOrganismo);

export default router;



