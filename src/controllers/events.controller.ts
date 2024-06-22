import { Request, Response } from "express";
import { Event } from "../entities/events"; // Asegúrate de que la importación sea correcta


// Obtener todos los eventos
export const getEvents = async (req: Request, res: Response) => {
  try {
    const events = await Event.find();
    return res.json(events);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

// Crear un nuevo evento
export const createEvent = async (req: Request, res: Response) => {
  const { name, type, date, location } = req.body;
  const event = new Event();
  event.name = name;
  event.type = type;
 // event.date = date;
  event.location = location;
  await event.save();
  return res.json(event);
};

// Actualizar un evento existente
export const updateEvent = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const event = await Event.findOneBy({ id: parseInt(id) });
    if (!event) return res.status(404).json({ message: "Event not found" });

    await Event.update({ id: parseInt(id) }, req.body);
    return res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};


export const deleteEvent = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await Event.delete({ id: parseInt(id) });

    if (result.affected === 0)
      return res.status(404).json({ message: "Event not found" });

    return res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
