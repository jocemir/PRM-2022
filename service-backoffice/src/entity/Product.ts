import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Brand } from "./Brand";
import { Category } from "./Category";

@Entity()
export class Product extends BaseEntity {

    @PrimaryGeneratedColumn() 
    id: number;

    @Column({nullable: false, length: 50})
    name: string;

    @Column('text', {nullable: true})
    description: string;

    @Column('decimal', {nullable: false, precision: 10, scale: 2})
    price: number;

    @Column({nullable: false, length: 1})
    active: string;

    @ManyToOne(() => Category, {eager: true, nullable: false})
    category: Category;

    @ManyToOne(() => Brand, {eager: true, nullable: true})
    brand: Brand;

    @CreateDateColumn()
    createdAt: Date;
    
    @UpdateDateColumn()
    updatedAt: Date;
}