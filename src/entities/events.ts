import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    CreateDateColumn,
    UpdateDateColumn,
  } from "typeorm";
  
  @Entity() // Se puede pasar como parámetro el nombre de tabla ej: 'eventsTable'
  export class Event extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;
  
    @Column()
    type: string;
  
    @Column({ nullable: true })
    location?: string; // Por ejemplo, una columna opcional para la ubicación del evento
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
    date: any;
  }
  