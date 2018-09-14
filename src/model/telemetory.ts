import { Request, Response, NextFunction } from 'express';

export class Telemetory {

    public get(request: Request, response: Response, next: NextFunction): void {
        response.send('OK!');
    }

    public getById(request: Request, response: Response, next: NextFunction): void {
        response.send('OK!');
    }

    public post(request: Request, response: Response, next: NextFunction): void {
        response.send('OK!');
    }

    public put(request: Request, response: Response, next: NextFunction): void {
        response.send('OK!');
    }

    public delete(request: Request, response: Response, next: NextFunction): void {
        response.send('OK!');
    }
}
