import { Bootstrap } from "./bootstrap.interface";
import { Application } from "express";
import http from 'http';
import logger from "../plugins/logger/logger";
import { envs } from "../config/envs";

export default class ServerBootstrap implements Bootstrap {

    constructor(private readonly app: Application) { }

    initialize(): Promise<boolean> {

        return new Promise((resolve, reject) => {

            const server = http.createServer(this.app);

            const PORT = envs.PORT;

            server.listen(PORT)
                .on("listening", () => {
                    logger.info(`Server running at http://localhost:${PORT} ✅`)
                    resolve(true);
                })
                .on("error", (error) => {
                    logger.error(`❌ Error server bootstrap: ${error}`);
                    reject(error);
                    process.exit(1);
                });
        });
    }

}