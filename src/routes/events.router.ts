import { Router } from "express";
import {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent
} from "../controllers/events.controller";
const router = Router();
router.get("/events", getEvents);
router.post("/events", createEvent);
router.put("/events/:id", updateEvent);
router.delete("/events/:id", deleteEvent);

export default router;
