import { DataModel } from './DataModel';

export class TelemetmoryModel extends DataModel {

    set code(val: string) {
        this.set('code', val);
    }
    get code(): string {
        return this.get<string>('code');
    }

    set id(val: string) {
        this.set('id', val);
    }
    get id(): string {
        return this.get<string>('id');
    }

    set lan(val: number) {
        this.set('lan', val);
    }
    get lan(): number {
        return this.get<number>('lan');
    }

    set lon(val: number) {
        this.set('lon', val);
    }
    get lon(): number {
        return this.get<number>('lon');
    }

    set alt(val: number) {
        this.set('alt', val);
    }
    get alt(): number {
        return this.get<number>('alt');
    }

    set x_speed(val: number) {
        this.set('x_speed', val);
    }
    get x_speed(): number {
        return this.get<number>('x_speed');
    }

    set y_speed(val: number) {
        this.set('y_speed', val);
    }
    get y_speed(): number {
        return this.get<number>('y_speed');
    }

    set z_speed(val: number) {
        this.set('z_speed', val);
    }
    get z_speed(): number {
        return this.get<number>('z_speed');
    }

    set rating(val: number) {
        this.set('rating', val);
    }
    get rating(): number {
        return this.get<number>('rating');
    }
}
