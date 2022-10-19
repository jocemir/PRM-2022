import { BaseEntity, Column, CreateDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Customer } from "./Customer";
import { Order } from "./Order";
import { Product } from "./Product";

@Entity()
export class OrderItem extends BaseEntity {
    @PrimaryGeneratedColumn() 
    id: number;

    @ManyToMany(() => Order, {eager: true, nullable: false})
    order: Order;

    @ManyToMany(() => Product, {eager: true, nullable: false})
    customer: Product;

    @Column({nullable: false})
    amount: number;

    @Column('decimal', {nullable: false, precision: 10, scale: 2})
    value: number;

    @CreateDateColumn()
    createdAt: Date;
    
    @UpdateDateColumn()
    updatedAt: Date;
}