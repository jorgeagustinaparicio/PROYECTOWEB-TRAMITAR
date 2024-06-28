import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
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

  @OneToOne(() => Organismo)
  @JoinColumn()
  organismo: Organismo;
}