import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToMany
} from "typeorm";
import { Tramite } from "./tramite";

@Entity()
export class Organismo extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  image_Url: string;

  @OneToMany(() => Tramite, tramite => tramite.organismo)
  tramites: Tramite[];
}