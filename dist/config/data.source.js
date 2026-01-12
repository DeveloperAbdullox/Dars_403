import { DataSource } from "typeorm";
import { Authors } from "../entities/authors.entity.js";
import { Course } from "../entities/course.entity.js";
export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: String(process.env.DB_PASSWORD),
    synchronize: true,
    entities: [Authors, Course]
});
