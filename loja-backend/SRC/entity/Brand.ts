import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Brand extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:false, length:50})
    name: string;

    @CreateDateColumn()
    createdAt: Date;

    @CreateDateColumn()
    updatedAt: Date;

}
