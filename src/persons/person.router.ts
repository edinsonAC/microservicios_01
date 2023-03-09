import { BaseRouter } from '../shared/router/router';
import { PersonsController } from './controllers/person.controller';
import { PersonMiddleware } from './middleware/persos.middleware';


export class PersonRouter extends BaseRouter<PersonsController, PersonMiddleware>{

    constructor() {
        super(PersonsController, PersonMiddleware)
    }

    routes(): void {
        this.router.get(
            "/",
            (req, res) => this.controller.findAll(req, res))
    }
}