import "reflect-metadata";
import { DataSource, type DataSourceOptions } from "typeorm";
import * as dotenv from "dotenv";

const path = process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : ".env";
dotenv.config({ path });

const port = Number(process.env.DB_PORT) || 5432;

const options: DataSourceOptions = {
    type: "postgres",
    host: process.env.DB_HOST,
    port: port,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: false,
    dropSchema: !!process.env.DB_DROP,
    migrationsRun: !!process.env.DB_MIGRATION,
    entities: [`${__dirname}/**/infrastructure/database/entities/*.{ts,js}`],
    migrations: [`${__dirname}/**/migrations/*.{ts,js}`]
};

const AppDataSource = new DataSource(options);
export default AppDataSource;
