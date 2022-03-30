import { BaseEntity } from "typeorm";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Role_Users extends BaseEntity {


    @PrimaryGeneratedColumn()   
    id_Role!: Number; 

    @Column()
    role_name!: string; 

    @Column()
    role_description!: string; 


}; 