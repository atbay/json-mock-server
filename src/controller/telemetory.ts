import { Request, Response, NextFunction } from 'express';
import { Common } from '../common/Common';
// import { TelemetmoryModel } from '../model/TelemetoryModel';

const dbpath: string = 'db/data.json';

export class Telemetory {

    public async get(request: Request, response: Response, next: NextFunction) {
        const json: any = await Common.readJson(dbpath);
        console.log(json[0].id);
        response.status(200).send(json);
    }

    public async getById(request: Request, response: Response, next: NextFunction) {
        const json: any = await Common.readJson(dbpath);
        if (json) {
            const id = request.param('id');
            for (const index in json) {
                console.log(json[index]);
                if (json[index].id === id) {
                    response.status(200).send(json[index]);
                }
            }
        }

        response.status(404).send({ message: 'not found' });
    }

    public async post(request: Request, response: Response, next: NextFunction) {
        response.send('OK!');
    }

    public async put(request: Request, response: Response, next: NextFunction) {
        response.send('called put method!');
    }

    public async delete(request: Request, response: Response, next: NextFunction) {
        response.send('called delete method!');
    }
}
