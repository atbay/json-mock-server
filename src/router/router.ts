import { Request, Response, Application } from 'express';
import { Telemetory } from '../controller/telemetory';

const ver1: string = 'v1';

export class Router {

    private telemetory: Telemetory = new Telemetory();

    public roters(app: Application) :void {

        // test api
        app.route('/')
        .get((req: Request, res: Response) => {
            // res.json({'message': 'It Works!!'});
            res.status(200).send({
                message: 'GET request successfulll!!!!',
            });
        });

        // telmetory api
        // app.route(`${ver1}/telemetory`)
        app.route(`/${ver1}/telemetory`)
        .get(this.telemetory.get)
        .post(this.telemetory.post)
        .delete(this.telemetory.delete);

        app.route(`/${ver1}/telemetory/:id`)
        .get(this.telemetory.getById)
        .put(this.telemetory.put)
        .delete(this.telemetory.delete);
    }

}
