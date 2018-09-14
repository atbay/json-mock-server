export class DataModel {

    private data: { [key: string]: any } = {};

    public constructor(keys: string[], data?: { [key: string]: any }) {
        if (data === void 0 || data === null) {
            this.data = {};
        } else {
            this.data = data;
        }

        keys.forEach((key) => {
            if (this.data[key] === void 0) {
                this.data[key] = null;
            }
        });
    }

    public getKeys(): string[] {
        const keys: string[] = [];
        if (this.data !== void 0 && this.data !== null) {
            for (const key in this.data) {
                keys.push(key);
            }
        }
        return keys;
    }

    public set(key: string, data: any, skipTrigger = false): void {
        this.data[key] = data;
    }

    public get<T>(key: string): T {
        return this.data[key];
    }
}
