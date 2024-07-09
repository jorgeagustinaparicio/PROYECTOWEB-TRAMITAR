import { Request, Response } from "express";
import { Organismo } from "../entities/organismo";

export const getOrganismos = async (req: Request, res: Response) => {
  try {

    const organismos = await Organismo.find({
      relations: {
        tramites: true,
      }
    })
    let organismosAux: any = [];
    organismos.forEach(o => {
      let tramitesAux: any = [];
      o.tramites.forEach(t => {
        let tramite = {
          id: t.id,
          nombre: t.name,
          link: t.link,
          descripcion: t.descripcion
        }
        tramitesAux.push(tramite);
      })
      let organismo = {
        id: o.id,
        nombre: o.name,
        imagen: o.image_Url,
        tramites: tramitesAux
      }
      organismosAux.push(organismo)
    })

    return res.json({
      organismos: organismosAux
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message })
    }
  }
}

//////
export const getOrganismo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const organismo = await Organismo.findOne({
      where: { id: parseInt(id) },
      relations: ['tramite']
    });

    if (!organismo) return res.status(404).json({ message: "Organismo no encontrado" })

    return res.json(organismo);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

//////
export const createOrganismo = async (req: Request, res: Response) => {
  const { name, image_Url } = req.body;
  const organismo = new Organismo();

  organismo.name = name;
  organismo.image_Url = image_Url;

  await organismo.save();
  return res.json(organismo);
};
///////////
export const updateOrganismo = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const organismo = await Organismo.findOneBy({ id: parseInt(id) });

    if (!organismo) return res.status(404).json({ message: "organismo not found" });

    await Organismo.update({ id: parseInt(id) }, req.body);
    return res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
////////////////
export const deleteOrganismo = async (req: Request, res: Response) => {

  const { id } = req.params;

  try {
    const result = await Organismo.delete({ id: parseInt(id) });

    if (result.affected === 0) return res.status(404).json({ message: "Organismo not found" });

    return res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

