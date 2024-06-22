import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
@Entity()
export class Profile  extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    gender: string
 
    @Column()
    photo: string
}