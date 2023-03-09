import { BaseRouter } from '../shared/router/router';
import { RoleController } from './controllers/role.controller';
import { RoleMiddleware } from './middleware/role.middleware';


export class RoleRouter extends BaseRouter<RoleController, RoleMiddleware>{

    constructor() {
        super(RoleController, RoleMiddleware)
    }

    routes(): void {
        this.router.get(
            "/",
            (req, res) => this.controller.findAll(req, res))
    }

}