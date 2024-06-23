import { Router } from "express";
import {
  //getOrganismo,
  createOrganismo,
  //updateOrganismo,
  //deleteOrganismo
} from "../controllers/organismo.controller";
const router = Router();
//router.get("/organismo", getOrganismo);
router.post("/organismo", createOrganismo);
//router.put("/organismo/:id", updateOrganismo);
//router.delete("/organismo/:id", deleteOrganismo);

export default router;