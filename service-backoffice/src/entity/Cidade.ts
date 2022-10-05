import { Estado } from './Estado';

import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Cidade extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:false, length:50})
    name:string;

    @ManyToOne(() => Estado,{eager: true, nullable:false})
    estado:Estado;
       
    
    @CreateDateColumn()
    createdAt: Date;

    @CreateDateColumn()
    updatedAt: Date;

}