import { Category } from './Category';

import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Brand } from "./Brand";

@Entity()
export class Product extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:false, length:50})
    name:string;

    @Column('text',{nullable: true})
    description:string;

    @Column({nullable: true})
    price:number;

    @Column({nullable:false, length: 1})
    active:string;

    @ManyToOne(() => Category,{eager: true, nullable:false})
    category:Category;

    @ManyToOne(() => Brand,{eager: true, nullable:false})
    Brand: Brand;
    

    @CreateDateColumn()
    createdAt: Date;

    @CreateDateColumn()
    updatedAt: Date;

}