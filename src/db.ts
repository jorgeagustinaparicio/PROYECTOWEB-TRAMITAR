import { DataSource } from "typeorm";
import { User } from "./entities/User";
import { Event } from "./entities/events";
import { Profile } from "./entities/profile";
import { Organismo } from "./entities/organismo";

/*import { Profile } from "./entity/Profile";
import { Photo } from "./entity/Photo"; */

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "12345",
  database: "proyectofinal",
  // logging: true, // muestra peticiones a la bd
  synchronize: true,
  entities: [User,Event,Profile,Organismo],
});