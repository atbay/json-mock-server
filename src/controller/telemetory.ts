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
        if (request.headers['content-type'] !== 'application/json' ||
         (request.body == null && request.body.UtmId == null)) {
            console.log(`post reqeust ${request.body}`);
            response.status(400).send({
                message: `Bad Content-type [${request.headers['content-type'] }]`,
                requestBody: `${request.body}`,
            });
            return;
        }

        try {
            let json: any = await Common.readJson(dbpath);
            if (!json) {
                json = [];
            }
            // 重複するIDを削除
            for (const index in json) {
                if (json[index].UtmId === request.body.UtmId) {
                    json.splice(index, 1);
                    await Common.writeJson(dbpath, JSON.stringify(json));
                    break;
                }
            }
            json.push(request.body);
            // await this.deleteId(request.body.UtmId);
            console.log(`add data ${json}`);
            Common.writeJson(dbpath, JSON.stringify(json, undefined, 1)); // 整形した形で出力
            response.status(201).send('OK!');
        } catch (error) {
            console.log(error);
            response.status(500).send({
                message: 'Internal Server Error.',
                requestBody: `${request.body}`,
            });
        }
    }

    public async put(request: Request, response: Response, next: NextFunction) {
        response.send('called put method!');
    }

    /**
     * リソース削除
     * @param request request
     * @param response response
     * @param next next
     */
    public async delete(request: Request, response: Response, next: NextFunction) {
        try {
            const id = request.param('id');
            const json: any = await Common.readJson(dbpath);
            if (json) {
                for (const index in json) {
                    if (json[index].UtmId === id) {
                        json.splice(index, 1);
                        await Common.writeJson(dbpath, JSON.stringify(json));
                        break;
                    }
                }
            }
            // await this.deleteId(id);
            response.status(200).send({ message: 'OK!' });
        } catch (error) {
            console.log(error);
            response.status(500).send({ message: 'Internal Server Error.' });
        }
    }

    // private async deleteId(id: string) {
    //     console.log('call!!!');
    //     const json: any = await Common.readJson(dbpath);
    //     if (json) {
    //         for (const index in json) {
    //             if (json[index].UtmId === id) {
    //                 json.splice(index, 1);
    //                 await Common.writeJson(dbpath, JSON.stringify(json));
    //                 break;
    //             }
    //         }
    //     }
    // }
}
