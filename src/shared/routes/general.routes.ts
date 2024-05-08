import BaseRoutes from "./base.routes";
import { Response } from "express";

export default class GeneralRoutes extends BaseRoutes {

    constructor() {
        super();
        this.handleRoutes();
    }

    protected handleRoutes(): void {

        this.router.get('/test', (req, res: Response) => {
            res.json({ message: "It's working!" })
        });

        

    }

}