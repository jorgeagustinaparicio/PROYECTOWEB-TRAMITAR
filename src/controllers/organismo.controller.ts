import { Request, Response } from "express";
import { Organismo } from "../entities/organismo";

export const createOrganismo = async (req: Request, res: Response) => {
    const { name, image_Url} = req.body;
    const organismo = new Organismo();
    organismo.name = name;
    organismo.image_Url=image_Url;
    await organismo.save();
    return res.json(organismo);
  };
