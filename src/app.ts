import * as express from 'express';
// import * as fs from 'fs';
// import * as https from 'https';
import * as bodyParser from 'body-parser';
import * as log4js from 'log4js';
import * as cors from 'cors';

import { Router } from './router/router';

// サーバ構築
class App {

    public app: express.Application;
    private accessLogger: log4js.Logger;
    private router: Router = new Router();

    constructor() {
        this.app = express();
        this.accessLogger = log4js.getLogger('access');
        this.config();
        this.router.roters(this.app);
    }

    private config() :void {
        // logging
        log4js.configure({
            appenders: {
                access: { type: 'console' },
            },
            categories: {
                default: { appenders: ['access'], level: 'info' },
            },
        });

        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
        this.app.use(cors());
        this.app.use(log4js.connectLogger(this.accessLogger, {
            level : 'INFO',
        }));
    }

}
export default new App().app;
