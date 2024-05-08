import { app } from "./app";
import "reflect-metadata";
import ServerBootstrap from "./bootstrap/server.bootstrap";
import DatabaseBootstrap from "./bootstrap/database.bootstrap";
import logger from "./plugins/logger/logger";

const server = new ServerBootstrap(app);
const typeorm = new DatabaseBootstrap();

(async () => {

    try {


        const listPromises = [
            await server.initialize(),
            await typeorm.initialize(),
        ];

        await Promise.all(listPromises);

    } catch (err) {
        logger.error(`❌ Error index: ${err}`);
        // console.log(err)
        process.exit(1);
    }

})();