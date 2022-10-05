import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Order } from "./Order";
import { Product } from "./Product";

@Entity()
export class OrderItem extends BaseEntity {

    @PrimaryGeneratedColumn() 
    id: number;

    @ManyToOne(() => Order, {eager: true, nullable: false})
    order: Order;

    @ManyToOne(() => Product, {eager: true, nullable: false})
    product: Product;

    @Column({nullable: false})
    amount: number;

    @Column({nullable: true, length: 10})
    value: number;

    @CreateDateColumn()
    createdAt: Date;
    
    @UpdateDateColumn()
    updatedAt: Date;
}