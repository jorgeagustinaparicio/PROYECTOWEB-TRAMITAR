import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { Organismo } from "./organismo";

@Entity()
export class Tramite extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  link: string;

  @Column()
  descripcion: string;

  @ManyToOne(() => Organismo, organismo => organismo.tramites)
  @JoinColumn({name : 'id_organismo'})
  organismo: Organismo;
}