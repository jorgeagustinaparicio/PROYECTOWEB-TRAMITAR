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
import { Tramite } from "./tramite";

@Entity()
export class Organismo extends BaseEntity {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  image_Url: string;

  @OneToOne(() => Tramite)
  @JoinColumn()
  tramite: Tramite;
}