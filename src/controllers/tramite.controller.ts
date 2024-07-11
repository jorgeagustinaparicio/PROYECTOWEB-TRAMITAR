import { Request, Response } from "express";
import { Tramite } from "../entities/tramite";
import { Organismo } from "../entities/organismo";

export const createTramite = async (req: Request, res: Response) => {
  const { name, link, descripcion, id_organismo } = req.body;
  const tramite = new Tramite();

  tramite.name = name;
  tramite.link = link;
  tramite.descripcion = descripcion;
  tramite.organismo = id_organismo;

  await tramite.save();
  return res.json(tramite);
};
//////

export const getTramite = async (req: Request, res: Response) => {
  try {

    const tramite = await Tramite.find();

    return res.json(tramite);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
///////////
export const updateTramite = async (req: Request, res: Response) => {

  const { id } = req.params;
  try {
    const tramite = await Tramite.findOneBy({ id: parseInt(id) });
    if (!tramite) return res.status(404).json({ message: "Tramite not found" });
    console.log(req.body)
    await Tramite.update({ id: parseInt(id) }, req.body);
    return res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
////////////////
export const deleteTramite = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await Tramite.delete({ id: parseInt(id) });
    if (result.affected === 0) return res.status(404).json({ message: "Tramite not found" });
    return res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

//Metodo que permite obtener un tramite por id desde la base de datos
//Sirve para el editar
export const getTramiteById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; //
    const t = await Tramite.findOne({
      where: { id: parseInt(id) }, // Convrtimos el id a un número entero
      relations: ['organismo']
    });
    return res.json({
      ...t,
      organismo: t?.organismo.id
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};