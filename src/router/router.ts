import * as express from 'express';

import { Telemetory } from '../model/telemetory';

const ver1: string = 'v1';

export class Router {

    private telemetory: Telemetory = new Telemetory();

    public roters(app: express.Application) :void {

        // telmetory api
        app.route(`${ver1}/telemetory`)
        .get(this.telemetory.get)
        .post(this.telemetory.post)
        .delete(this.telemetory.delete);

        app.route(`${ver1}/telemetory:id`)
        .get(this.telemetory.getById)
        .put(this.telemetory.put)
        .delete(this.telemetory.delete);
    }

}
