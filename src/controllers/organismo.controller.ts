import { Request, Response } from "express";
import { Organismo } from "../entities/organismo";


//Funcion asincronica getOrganismos que podemos usar en cualquier
//parte de la app ya que tiene el "export"
export const getOrganismos = async (req: Request, res: Response) => {
  try {
    const organismos = await Organismo.find({
      relations: {
        tramites: true,
      }
    })
    //console.log(organismos) //este console log permite mostrar el json retornado
    return res.json({ organismos });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message })
    }
  }
}
//////
// Exportamos la función getOrganismo
export const getOrganismo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; // Extraemos el parámetro 'id' de la solicitud
    // Buscamos un organismo en la base de datos cuyo id coincida con el proporcionado
    const organismo = await Organismo.findOne({
      where: { id: parseInt(id) }, // Convertimos el id a un número entero
      relations: ['tramite'] // Incluimos las relaciones con 'tramite'
    });
    if (!organismo) return res.status(404).json({ message: "Organismo no encontrado" })
      console.log(organismo);
    return res.json(organismo);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

//////
// Exportamos la función createOrganismo
export const createOrganismo = async (req: Request, res: Response) => {
  const { name, image_Url } = req.body;  // Extraemos 'name' e 'image_Url' del cuerpo de la solicitud
  const organismo = new Organismo();  // Creamos una nueva instancia de la entidad 'Organismo'

  // Asignamos los valores extraídos a las propiedades de la instancia 'Organismo'
  organismo.name = name;
  organismo.image_Url = image_Url;

  await organismo.save(); // Guardamos la nueva instancia de 'Organismo' en la base de datos
  return res.json(organismo); // Devolvemos la nueva instancia de 'Organismo' como respuesta en formato JSON
};
///////////
// Exportamos la función updateOrganismo
export const updateOrganismo = async (req: Request, res: Response) => {
  const { id } = req.params; // Extraemos el parámetro 'id' de la solicitud
  try {
    // Buscamos un organismo en la base de datos cuyo id coincida con el proporcionado
    const organismo = await Organismo.findOneBy({ id: parseInt(id) });

    if (!organismo) return res.status(404).json({ message: "organismo not found" });
    // Actualizamos el organismo con los datos proporcionados en el cuerpo de la solicitud
    await Organismo.update({ id: parseInt(id) }, req.body);
    return res.sendStatus(204); // Devolvemos un estado 204 sin contenido para indicar que la actualización fue exitosa
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
  } catch (error) { // Si ocurre un error, verificamos si es una instancia de Error
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message }); // Devolvemos un error 500 con el mensaje de error
    }
  }
};

