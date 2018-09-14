import * as express from 'express';
// import * as fs from 'fs';
// import * as https from 'https';
import * as bodyParser from 'body-parser';
import * as log4js from 'log4js';
import * as cors from 'cors';

// サーバ構築
class App {

    public app: express.Application;
    private accessLogger: log4js.Logger;

    constructor() {
        this.app = express();
        this.accessLogger = log4js.getLogger('access');
        this.config();
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
