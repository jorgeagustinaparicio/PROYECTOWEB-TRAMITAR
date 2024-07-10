import { DataSource } from "typeorm";
import { Organismo } from "./entities/organismo";
import { Tramite } from "./entities/tramite";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "12345",
  database: "tramitar",
  // logging: true, // muestra peticiones a la bd
  synchronize: true,
  entities: [Organismo, Tramite],
}); 