import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Estado extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:false, length:50})
    name: string;

    @Column({nullable:false, length:50})
    sigla: string;

    @CreateDateColumn()
    createdAt: Date;

    @CreateDateColumn()
    updatedAt: Date;

}
