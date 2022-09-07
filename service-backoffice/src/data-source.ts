import "reflect-metadata"
import { DataSource } from "typeorm"
import { Brand } from "./entity/Brand"
import { Category } from "./entity/Category"
import { Product } from "./entity/Product"


export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "88304918",
    database: "prmdb",
    synchronize: true,
    logging: false,
    entities: [Brand, Category, Product],
})