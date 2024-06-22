import { Request, Response } from "express";
export const datageo = async (req: Request, res: Response) => {
    try {
        const response = await fetch('https://api64.ipify.org?format=json');
        const datoIP = await response.json();
        console.table(datoIP);
        const ip = String(datoIP.ip);
        console.log(`IP obtenida es: ${ip}`);
        const apiGeografica = await fetch(`http://ip-api.com/json/${ip}`);
        const datosGeograficos = await apiGeografica.json();
        console.log('Datos geográficos obtenidos son:', datosGeograficos);
        return res.json(datosGeograficos);
    } catch (error) {
        console.error('Error en la solicitud:', error);
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        } 
    }
};