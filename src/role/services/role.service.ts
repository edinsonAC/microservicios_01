import { BaseService } from '../../config/base.service';
import { RoleEntity } from '../entity/role.entity';
import { RoleDTO } from '../dto/role.dto';

export class RoleService extends BaseService<RoleEntity>{

    constructor(){
        super(RoleEntity)
    }

    async findAll(): Promise<RoleEntity[] | undefined> {
        try {
            console.log("hola")
            return (await this.execRepository).find()
        } catch (error:any) {
            throw new Error(error)
        }
    }

    async findById(id: string):Promise<RoleEntity | null> {
        try {
            return (await this.execRepository).findOneBy({id})
        } catch (error:any) {
            throw new Error(error)
        }
    }

    async create(body:RoleDTO) {
        try {
            return (await this.execRepository).save(body)
        } catch (error:any) {
            throw new Error(error)
        }
    }
}