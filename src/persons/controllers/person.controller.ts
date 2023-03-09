import { PersonService } from '../service/person.service';
import { HttpResponse } from '../../shared/response/http-response';
import { Request, Response } from 'express';
export class PersonsController {

    constructor(
        private readonly personService: PersonService = new PersonService(),
        private httpResponse: HttpResponse = new HttpResponse()
    ) { }

    async findAll(_req: Request, res: Response) {
        try {
            const persons = await this.personService.findAll();
            (persons?.length === 0)
                ? this.httpResponse.NotFound(res, `no registered persons yet`)
                : this.httpResponse.Ok(res, persons);
        } catch (error) {
            this.httpResponse.Error(res, error);
        }
    }

    async create(req: Request, res: Response) {
        try {
            await this.personService.create(req.body);
            this.httpResponse.Created(res, `person created successfully`)
        } catch (error) {
            this.httpResponse.Custom(res, error);
        }
    }

}