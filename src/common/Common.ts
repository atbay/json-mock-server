import * as fs from 'fs';

export class Common {

    public static readJson(filepath: string): Promise<any> {
        return new Promise((resolve) => {
            fs.readFile(filepath, 'utf8', (err: NodeJS.ErrnoException, data: string) => {
                resolve(JSON.parse(data));
            });
        });
    }

    public static async writeJson(filepath: string, data: string): Promise<{}> {

        const json: any = await Common.readJson(filepath);
        console.log(json);
        return new Promise((resolve) => {
            fs.writeFile(filepath, 'utf8', (err: NodeJS.ErrnoException) => {
                resolve();
            });
        });
    }

}
