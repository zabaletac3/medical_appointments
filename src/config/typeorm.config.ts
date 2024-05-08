import { DataSource, DataSourceOptions } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";
import { envs } from "./envs";
import { join } from "node:path";
// import { VacationEntity } from "../modules/vacation/infracstructure/typeorm/vacations.entity";

export const Config: DataSourceOptions = {
    type: "mysql",
    host: envs.DB_HOST,
    port: envs.DB_PORT,
    username: envs.DB_USER,
    password: envs.DB_PASSWORD,
    database: envs.DB_DATABASE,
    entities: [
        "dist/**/*.entity.{js,ts}",
        __dirname + "../../src/**/*.entity.{js,ts}",
    ],
    // entities: [VacationEntity],


    migrations: [
        "../src/config/typeorm/migrations/*{.ts,.js}",
        __dirname + "../config/typeorm/migrations/*{.ts,.js}",
        join(__dirname, '../config/typeorm/migrations/*{.ts,.js}').replace(/\\/g, '/')
    ],
    synchronize: false,
    migrationsRun: false,
    logging: "all",
    namingStrategy: new SnakeNamingStrategy(),
    multipleStatements: true
}

