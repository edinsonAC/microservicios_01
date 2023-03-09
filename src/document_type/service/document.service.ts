import { BaseService } from '../../config/base.service';
import { DocumentEntity } from '../entity/document.entity';

export class DocumentService extends BaseService<DocumentEntity>{

    constructor(){
        super(DocumentEntity)
    }

    async findAll(): Promise<DocumentEntity[] | undefined> {
        try {
            return (await this.execRepository).find()
        } catch (error:any) {
            throw new Error(error)
        }
    }

    async findById(id: string):Promise<DocumentEntity | null> {
        try {
            return (await this.execRepository).findOneBy({id})
        } catch (error:any) {
            throw new Error(error)
        }
    }
}