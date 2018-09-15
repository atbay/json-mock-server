import { Request, Response, NextFunction } from 'express';
import { Common } from '../common/Common';
// import { TelemetmoryModel } from '../model/TelemetoryModel';

const dbpath: string = 'db/data.json';

export class Telemetory {

    /**
     * リソース取得(all)
     * @param request request
     * @param response response
     * @param next next
     */
    public async get(request: Request, response: Response, next: NextFunction) {
        const json: any = await Common.readJson(dbpath);
        response.status(200).send(json);
    }

    /**
     * リソース取得(ID)
     * @param request request
     * @param response response
     * @param next next
     */
    public async getById(request: Request, response: Response, next: NextFunction) {
        try {
            const json: any = await Common.readJson(dbpath);
            if (json) {
                const id = request.param('id');
                for (const index in json) {
                    if (json[index].UtmId === id) {
                        const resJson = json[index];
                        resJson.Result = 'Success';
                        response.status(200).send(resJson);
                        break;
                    }
                }
                return;
            }
            response.status(404).send({ message: 'Not Found.' });
        } catch (error) {
            console.log(error);
            response.status(500).send({ message: 'Internal Server Error.' });
        }

    }

    /**
     * リソース追加
     * @param request request
     * @param response response
     * @param next next
     */
    public async post(request: Request, response: Response, next: NextFunction) {
        if (request.headers['content-type'] !== 'application/json') {
            response.status(400).send({
                message: `Bad Content-type [${request.headers['content-type'] }]`,
            });
            return;
        }

        try {
            const json: any = await Common.readJson(dbpath);
            if (json) {
                json.push(request.body);
            }
            Common.writeJson(dbpath, JSON.stringify(json, undefined, 1)); // 整形した形で出力
            response.status(201).send('OK!');
        } catch (error) {
            console.log(error);
        }
    }

    public async put(request: Request, response: Response, next: NextFunction) {
        response.send('called put method!');
    }

    public async delete(request: Request, response: Response, next: NextFunction) {
        try {
            const json: any = await Common.readJson(dbpath);
            if (json) {
                const id = request.param('id');
                for (const index in json) {
                    if (json[index].UtmId === id) {
                        json.splice(index, 1);
                        await Common.writeJson(dbpath, JSON.stringify(json));
                        response.status(200).send();
                        break;
                    }
                }
                return;
            }
            response.status(200).send();
        } catch (error) {
            console.log(error);
            response.status(500).send({ message: 'Internal Server Error.' });
        }
    }
}
