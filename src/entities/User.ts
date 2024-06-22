import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    CreateDateColumn,
    UpdateDateColumn,
    OneToOne,
    JoinColumn,
  } from "typeorm";
  import { Profile } from "./profile";
  
  @Entity() // se puede pasar como parametro el nombre de tabla ej: 'usersTable' 
  export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    firstname: string;
  
    @Column()
    lastname: string;
    
    @Column()
    email: string;
  
    @Column()
    password: string;
    @Column({ default: true })
    active: boolean;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;

    @OneToOne(() => Profile)
    @JoinColumn()
    profile: Profile;
  }