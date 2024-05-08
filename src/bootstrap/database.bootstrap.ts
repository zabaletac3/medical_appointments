import { DataSource } from 'typeorm';
import { Bootstrap } from './bootstrap.interface';
import { Config } from "../config/typeorm.config";
import logger from "../plugins/logger/logger";

export default class DatabaseBootstrap implements Bootstrap {

    public static appDataSource = new DataSource(Config);

    async initialize(): Promise<boolean | DataSource> {
        try {

            await DatabaseBootstrap.appDataSource.initialize();
            logger.info("DataBase Connected. ✅✅")
            return DatabaseBootstrap.appDataSource;

        } catch (error) {
            logger.error(`❌ Database: ${error}`);
            // this.close();
            return false;
        }
    }

    close(): void {
        DatabaseBootstrap.appDataSource?.destroy();
    }

    static get dataSource(): DataSource {
        return DatabaseBootstrap.appDataSource;
    }

    static instance() {
        return new DataSource(Config);
    }


}
