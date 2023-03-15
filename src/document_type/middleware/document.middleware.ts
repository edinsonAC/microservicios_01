import { validate } from 'class-validator';
import { NextFunction, Request, Response } from 'express';
import { HttpResponse } from '../../shared/response/http-response';
import { DocumentDTO } from '../dto/document.dto';
export class DocumentMiddleware{
    constructor(
        private readonly httpResponse: HttpResponse = new HttpResponse()
    ) { }

    async validateDocument(req: Request, res: Response, next: NextFunction) {
        let data = new DocumentDTO()
        Object.assign(data, req.body)

        const errors = await validate(data,
            { whitelist: true, forbidNonWhitelisted: true }
        )
        if (errors.length > 0) {
            return this.httpResponse.BadRequest(res, errors)
        }
        next()
    }
}