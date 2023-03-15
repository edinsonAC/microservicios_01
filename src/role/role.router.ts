import { BaseRouter } from '../shared/router/router';
import { RoleController } from './controllers/role.controller';
import { RoleMiddleware } from './middleware/role.middleware';


export class RoleRouter extends BaseRouter<RoleController, RoleMiddleware>{

    constructor() {
        super(RoleController, RoleMiddleware)
    }

    routes(): void {
        this.router.get(
            "/role",
            (req, res) => this.controller.findAll(req, res))

        this.router.post(
            "/role/create",
            (req, res, next) => this.middleware.validateRole(req, res, next),
            (req, res) => this.controller.create(req, res)
        )
    }

}