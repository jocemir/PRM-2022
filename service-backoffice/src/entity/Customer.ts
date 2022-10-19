import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Customer extends BaseEntity {
    @PrimaryGeneratedColumn() 
    id: number;

    @Column({nullable: false, length: 50})
    name: string;

    @Column({nullable: true, length: 255})
    address: string;

    @Column({nullable: true, length: 8})
    zipcode: string;

    @Column({nullable: true, length: 2})
    state: string;


    @Column({nullable: true, length: 50})
    city: string;

    @CreateDateColumn()
    createdAt: Date;
    
    @UpdateDateColumn()
    updatedAt: Date;
}