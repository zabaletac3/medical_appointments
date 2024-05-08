import express, { Application, Request, Response } from "express";
import cors from "cors"
import compression from 'compression';
import GeneralRoutes from "./shared/routes/general.routes";
import { morganMiddleware } from "./plugins/morgan/morgan.middleware";

class App {

    public app: Application;

    constructor() {
        this.app = express();
        this.handleMiddlewares();
        this.handleRoutes();
    }

    handleMiddlewares() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(cors({
            origin: true,
            methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
            credentials: true,
        }));

        this.app.use(morganMiddleware);
        this.app.use(compression());

    }


    public handleRoutes() {
        this.app.use('/api', new GeneralRoutes().getHandleRouter());
    }

}

const app = new App().app;

export { app }