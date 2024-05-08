import express, { Router } from "express";

export default class BaseRoutes {

    protected router: express.Router = Router();

    constructor() {
        this.handleRoutes();
    }

    public getHandleRouter(): Router {
        return this.router;
    }

    protected handleRoutes(): void { }

}