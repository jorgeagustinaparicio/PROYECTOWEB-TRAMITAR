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
  
  @Entity() 
  export class Organismo extends BaseEntity {
    @PrimaryGeneratedColumn()
    id_organismo: number;
  
    @Column()
    name: string;
  
    @Column()
    image_Url: string;
    
   /*  @OneToMany(() => tramite)
    @JoinColumn()
    profile: tramite; */
  }