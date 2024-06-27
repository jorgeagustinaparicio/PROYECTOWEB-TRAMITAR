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
export class Tramite extends BaseEntity {
  
<<<<<<< HEAD
  @Entity() 
  export class Tramite extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;
  
    @Column()
    link: string;
                
   //Descripcion
    
   /*  @OneToMany(() => tramite)
    @JoinColumn()
    profile: tramite; */
  }
=======
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  link: string;

}
>>>>>>> f12a95f6924bfd8b8a4abf842debe37d3e11ce07
