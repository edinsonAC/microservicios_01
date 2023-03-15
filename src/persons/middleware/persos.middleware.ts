import { validate } from 'class-validator';
import { NextFunction, Request, Response } from 'express';
import { HttpResponse } from '../../shared/response/http-response';
import { PersonDTO } from '../dto/person.dto';
export class PersonMiddleware{
    constructor(
        private readonly httpResponse: HttpResponse = new HttpResponse()
    ) { }

    async validatePerson(req: Request, res: Response, next: NextFunction) {
        let data = new PersonDTO()
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