import { BaseRouter } from '../shared/router/router';
import { PersonsController } from './controllers/person.controller';
import { PersonMiddleware } from './middleware/persos.middleware';


export class PersonRouter extends BaseRouter<PersonsController, PersonMiddleware>{

    constructor() {
        super(PersonsController, PersonMiddleware)
    }

    routes(): void {
        this.router.get(
            "/persons",
            (req, res) => this.controller.findAll(req, res))

        this.router.post(
            "/person/create",
            (req, res, next) => this.middleware.validatePerson(req, res, next),
            (req, res) => this.controller.create(req, res)
        )
    }
}