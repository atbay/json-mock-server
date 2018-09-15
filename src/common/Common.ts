import * as fs from 'fs';

export class Common {

    public static async readJson(filepath: string): Promise<any> {
        return new Promise((resolve, reject) => {
            fs.readFile(filepath, 'utf8', (err: NodeJS.ErrnoException, data: string) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(JSON.parse(data));
                }
            });
        });
    }

    public static async writeJson(filepath: string, data: string): Promise<{}> {
        return new Promise((resolve, reject) => {
            fs.writeFile(filepath, data, (err: NodeJS.ErrnoException) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }

}
