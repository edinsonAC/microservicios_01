import { Request, Response } from 'express';
import { HttpResponse } from '../../shared/response/http-response';
import { RoleService } from '../services/role.service';
export class RoleController{

    constructor(
        private readonly roleService:RoleService = new RoleService(),
        private readonly httpResponse:HttpResponse = new HttpResponse()
    ) {}

    async findAll(_req: Request, res: Response) {
        try {
            const roles = await this.roleService.findAll();
            (roles?.length === 0)
                ? this.httpResponse.NotFound(res, `no registered roles yet`)
                : this.httpResponse.Ok(res, roles);
        } catch (error) {
            this.httpResponse.Error(res, error);
        }
    }
}